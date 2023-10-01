

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';

interface Category {
  id: number,
  name: string,
  slug: string
}
async function getDataCategory() {
  try {
    const api = process.env.BACKEND_URL;
    const res = await fetch('http://127.0.0.1:8000/api/categories', {
      cache: 'force-cache',
    });

    if (!res.ok) {
      throw new Error('Gagal mengambil data kategori');
    }

    const category = await res.json();
    return category.data;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data:', error);
    throw error; // Melempar kembali kesalahan untuk penanganan lebih lanjut jika diperlukan
  }
}
export default async function CategoryList() {
  const categories: Category[] = await getDataCategory();
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Slug</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((cat, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{cat.name}</TableCell>
            <TableCell>{cat.slug}</TableCell>
            <TableCell className="text-center">
              <div className="flex gap-3 content-center">
                <Button>Edit</Button>
                <Button>Delete</Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
