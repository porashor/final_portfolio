import { Skeleton } from "@/components/ui/skeleton";

const RworkCardSkeleton = () => {
  return (
    <div className="w-[350px] md:w-[450px] aspect-square overflow-hidden my-2 md:my-0 bg-light space-y-10">
      <Skeleton className="w-[70%] h-30 md:h-40 mx-auto my-7 rounded-2xl bg-[#e7e7e7] flex items-center justify-center"/>
      <Skeleton className="w-[60%] mx-auto h-7"/>
      <Skeleton className="w-[50%] mx-auto h-7"/>
      <Skeleton className="w-[40%] mx-auto h-7"/>
    </div>
  )
}

export default RworkCardSkeleton
