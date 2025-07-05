"use client"

import Loader from "@/components/Loader/Loader"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useGetBorrowsQuery } from "@/features/api/BooksApi"
import type { TBorrowBook } from "@/type"
import { BookOpen, Hash, BookMarked, Barcode, User } from "lucide-react"

function BorrowSummary() {
  const { data, isLoading } = useGetBorrowsQuery(undefined, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  })

  // Get borrowBooks from the response data
  const borrowBooks = data?.data

  if (isLoading) {
    return <Loader />
  }

  // Calculate stats
  const totalBooks = borrowBooks?.reduce((sum: number, borrow: TBorrowBook) => sum + borrow.totalQuantity, 0) || 0
  const totalTitles = borrowBooks?.length || 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="container mx-auto px-4 md:px-10 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg animate-pulse">
              <BookMarked className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Borrow Summary
            </h2>
          </div>
          <p className="text-gray-600 text-lg">Track your borrowed books and reading progress</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Books</p>
                <p className="text-2xl font-bold text-gray-800">{totalBooks}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 group-hover:scale-110 transition-transform duration-300">
                <BookMarked className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Unique Titles</p>
                <p className="text-2xl font-bold text-gray-800">{totalTitles}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 group-hover:scale-110 transition-transform duration-300">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Borrows</p>
                <p className="text-2xl font-bold text-gray-800">{totalTitles}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
          <div className="p-6 border-b border-gray-200/50 bg-gradient-to-r from-purple-50/50 to-blue-50/50">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-purple-600" />
              Borrowed Books Details
            </h3>
            <p className="text-gray-600 text-sm mt-1">Complete list of your current borrowed books</p>
          </div>

          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-purple-50/50 to-blue-50/50 hover:from-purple-50 hover:to-blue-50 transition-all duration-300">
                <TableHead className="font-semibold text-gray-700 py-4">
                  <div className="flex items-center gap-2">
                    <Hash className="h-4 w-4 text-purple-600" />
                    Serial No
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-gray-700 w-[100px]">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    Title
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-gray-700">
                  <div className="flex items-center gap-2">
                    <BookMarked className="h-4 w-4 text-emerald-600" />
                    Total Quantity
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-gray-700">
                  <div className="flex items-center gap-2">
                    <Barcode className="h-4 w-4 text-orange-600" />
                    ISBN
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {borrowBooks?.map((borrow: TBorrowBook, index: number) => (
                <TableRow
                  key={borrow.book?.isbn}
                  className="group hover:bg-gradient-to-r hover:from-purple-50/30 hover:to-blue-50/30 transition-all duration-300 hover:shadow-md animate-in fade-in slide-in-from-bottom"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <TableCell className="py-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 font-semibold text-sm group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors duration-300 py-4">
                    {borrow.book?.title}
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge
                      variant="outline"
                      className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200 text-emerald-700 hover:scale-105 transition-transform duration-300 font-medium"
                    >
                      {borrow.totalQuantity} {borrow.totalQuantity === 1 ? "copy" : "copies"}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 py-4">
                    {borrow.book?.isbn}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {(!borrowBooks || borrowBooks.length === 0) && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 mb-4">
                <BookMarked className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No borrowed books</h3>
              <p className="text-gray-500">You haven't borrowed any books yet. Start exploring our collection!</p>
            </div>
          )}
        </div>

        {/* Additional Info */}
        {borrowBooks && borrowBooks.length > 0 && (
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200/50">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Library Guidelines</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Books can be renewed up to 2 times if no holds are placed</li>
                  <li>• Late fees apply after the due date ($0.50 per day per book)</li>
                  <li>• Maximum borrowing period is 21 days for regular books</li>
                  <li>• Contact the library for any questions about your borrowed items</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default BorrowSummary
