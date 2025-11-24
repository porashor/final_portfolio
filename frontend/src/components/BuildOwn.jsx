import * as React from "react";
import Image from "next/image";
import img1 from "../../public/slider/slide1.png"
import img2 from "../../public/slider/slide2.jpg"
import img3 from "../../public/slider/slide3.webp"
import img4 from "../../public/slider/slide4.avif"
import img5 from "../../public/slider/slide5.jpg"
import img6 from "../../public/slider/slide6.jpeg"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function BuildOwn() {
    const mg = [img1, img2, img3, img4, img5, img6]
  return (
    <div>
      {/* header section  */}
      <div className="w-[90%] md:[60%] mx-auto flex flex-col items-center justify-center py-5">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold py-3">
          Make your dream live!
        </h1>
        <p className="w-[80%] lg:w-[50%] xl:w-[40%] mx-auto text-center">
          Hy, am here to make your any kind of website that reflect yourself of your business to grow up you existence in the digital world. 
        </p>
        <h1></h1>
      </div>
      <div className="w-full p-6 flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[90%] md:w-[80%] "
        >
          <CarouselContent className="">
            {mg.map((img, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <Card className="relative w-full aspect-5/3">
                    <Image src={img} alt="My profile picture" className="object-cover" fill/>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />
        </Carousel>
      </div>
    </div>
  );
}
