import { Skeleton } from "@/components/ui/skeleton";

export function ProjectCardSkeleton() {
  return (
    <div className="h-full border border-border rounded-xl overflow-hidden bg-card">
      {/* Image skeleton */}
      <Skeleton className="w-full aspect-video" />

      {/* Content skeleton */}
      <div className="p-6 space-y-3">
        {/* Category Badges skeleton */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>

        {/* Title skeleton */}
        <Skeleton className="h-7 w-3/4" />

        {/* Description skeleton - 2 lines */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        {/* Date skeleton */}
        <Skeleton className="h-5 w-32 mt-2" />
      </div>
    </div>
  );
}
