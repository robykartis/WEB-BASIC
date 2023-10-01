'use client'
import { Skeleton } from '@/components/ui/skeleton';
import React, { useState } from 'react';
import CategoryList from './components/CategoryList';


export default function CategoryPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Post</h3>
        {isLoading ? (
          <Skeleton className="h-4 w-[250px]" />
        ) : (
          <CategoryList />
        )}
      </div>
    </div>
  );
}
