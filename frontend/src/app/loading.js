// app/loading.js
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-6 w-[250px]" />
      <Skeleton className="h-6 w-[200px]" />
      <Skeleton className="h-6 w-[300px]" />
    </div>
  );
}
