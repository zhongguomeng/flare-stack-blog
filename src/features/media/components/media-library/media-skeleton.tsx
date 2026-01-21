import { memo } from "react";

export const MediaCardSkeleton = memo(() => (
  <div className="flex flex-col space-y-4 animate-pulse">
    <div className="aspect-square bg-muted rounded-none" />
    <div className="space-y-2 px-1">
      <div className="h-3 w-3/4 bg-muted rounded-none" />
      <div className="flex justify-between">
        <div className="h-2 w-1/4 bg-muted rounded-none opacity-50" />
        <div className="h-2 w-1/4 bg-muted rounded-none opacity-50" />
      </div>
    </div>
  </div>
));

MediaCardSkeleton.displayName = "MediaCardSkeleton";

export function MediaLibrarySkeleton() {
  return (
    <div className="space-y-8 pb-20">
      {/* Header Skeleton */}
      <div className="flex justify-between items-end pb-6 border-b border-border/30 animate-pulse">
        <div className="space-y-1">
          <div className="h-9 w-48 bg-muted rounded-none"></div>
          <div className="h-3 w-64 bg-muted rounded-none opacity-30"></div>
        </div>
        <div className="h-10 w-32 bg-muted rounded-none"></div>
      </div>

      <div className="space-y-8">
        {/* Toolbar Skeleton */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center pb-8 border-b border-border/30 animate-pulse">
          <div className="w-full md:w-96 h-10 bg-muted rounded-none"></div>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="h-10 w-24 bg-muted rounded-none"></div>
            <div className="h-10 w-24 bg-muted rounded-none"></div>
          </div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <MediaCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
