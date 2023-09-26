
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { PenLine, EyeIcon, Trash2 } from "lucide-react"


interface Category {
    id: number
    name: string
    slug: string
}


async function getDataCategory() {
    const res = await fetch('http://localhost:8000/api/categories')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()
    return data.data
}


export default async function CategoryPage() {
    const categories: Category[] = await getDataCategory()
    return (
        <main className="p-4">

            <Card className="w-1/2">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">No</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Slug</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories.map((category, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{category.name}</TableCell>
                                    <TableCell>{category.slug}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="icon">
                                                <PenLine className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="icon">
                                                <EyeIcon className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="icon">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>


        </main>
    )
}
