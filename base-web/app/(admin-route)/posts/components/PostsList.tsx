import React, { useState } from 'react'
import getPostsData from '@/app/api/posts/apiPosts'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Posts {
  id: string
  title: string,
  content: string,
  slug: string,
  category: string,
}
export default async function PostsList() {
  const [isLoading, setIsLoading] = useState(false);
  const posts: Posts[] = await getPostsData();
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{post.title}</TableCell>
            <TableCell>{post.content}</TableCell>
            <TableCell>{post.slug}</TableCell>
            <TableCell className="text-right">{post.category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
