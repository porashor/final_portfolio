import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="w-[350px] min-h-[400px] bg-light rounded-2xl py-5 px-3 mt-3">
        <Skeleton className="w-20 aspect-square object-cover mx-auto rounded-full border-4" />
      <div className="w-fit flex mx-auto gap-3">
      <Skeleton className="my-5 w-6 h-6 rounded-full"/>
      <Skeleton className="my-5 w-6 h-6 rounded-full"/>
      <Skeleton className="my-5 w-6 h-6 rounded-full"/>
      <Skeleton className="my-5 w-6 h-6 rounded-full"/>
      <Skeleton className="my-5 w-6 h-6 rounded-full"/>
      </div>
      <Skeleton className="w-[70%] h-6 mx-auto my-1"/>
      <Skeleton className="w-[75%] h-7 mx-auto my-2"/>
      <Skeleton className="w-full h-40 mt-5"/>
    </div>
  );
}
