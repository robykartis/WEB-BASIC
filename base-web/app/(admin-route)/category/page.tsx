'use client'
import { Skeleton } from '@/components/ui/skeleton';
import React, { useState } from 'react';
import CategoryList from './components/CategoryList';


export default function CategoryPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (

    <div className="container mx-auto mt-12">
      <h3 className="text-lg font-medium">Post</h3>
      {isLoading ? (
        <Skeleton className="h-4 w-[250px]" />
      ) : (
        <CategoryList />
      )}
    </div>

  );
}
