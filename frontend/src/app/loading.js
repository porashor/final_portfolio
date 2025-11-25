// app/loading.js
import { Skeleton } from "@/components/ui/skeleton";
import { TbLoader } from "react-icons/tb";
export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <TbLoader className="animate-spin" size={40} />
    </div>
  );
}
