'use client'
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import React, { useState } from 'react';
import PostsList from './components/PostsList';


export default function PostPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Post</h3>
        {isLoading ? (
          <Skeleton className="h-4 w-[250px]" />
        ) : (
          <PostsList />
        )}
      </div>
      {/* <Separator /> */}
    </div>
  );
}
