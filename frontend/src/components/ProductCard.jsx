import Image from "next/image";
import Link from "next/link";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
const ProductCard = ({ plan }) => {
  const features = plan.features ? JSON.parse(plan.features[0]) : [];
  const sixFeature = features.length > 6 ? features.slice(0, 6) : features;
  return (
    <div className="w-[380px] bg-white min-h-[150px] rounded logo-light flex flex-col gap-2 font-thin lowercase ">
      <div className="relative w-full aspect-[4/3]">
        <Image fill alt="img" src={plan.image} className="object-cover" />
      </div>
      <div className="px-4 flex flex-col gap-2 py-2">
        <div className="flex gap-1 items-center justify-between font-bold uppercase tracking-[-1px]">
          <p className="w-fit line-clamp-1">{plan.name}</p>
          <p className="flex items-center">
            {plan.price}
            <FaBangladeshiTakaSign />
          </p>
        </div>
        <p className="line-clamp-3">{plan.description}</p>
        <div className="h-[150px]">
          {
            sixFeature.map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <IoCheckmarkDoneOutline className="text-green-500" />
                <p>{feature}</p>
              </div>
            ))
          }
        </div>
        <Link href={`/plan/${plan._id}`} className="muted-rose logo-dark text-xl py-1 px-2 ">
          get started
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
