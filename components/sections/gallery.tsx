import Image from "next/image";
import gallerydata from "@/data/gallery.json";
import Flag from "react-world-flags";
import { Maximize2 } from "lucide-react";
import Link from "next/link";

export const Gallery = () => {
  return (
    <section id="work">
      <div className="mx-auto lg:w-2/3 w-full py-10 bodoni px-5">
        <h1 className="text-[50px] md:text-[75px] xl:text-[80px] bodoni">
          Gallery
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {gallerydata.map((image, index) => (
            <Link
              href={image.src}
              key={index}
              className="relative group cursor-pointer"
              target="_blank"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={750}
                height={750}
                className="h-full max-w-full rounded-lg object-cover"
              />
              <div className="bg-gradient-to-t from-[#111111] absolute top-0 left-0 w-full h-full from-10% rounded-lg to-50%">
                <div className="absolute bottom-0 p-5 text-white flex justify-between items-center w-full">
                  <div className="flex flex-row items-center gap-3">
                    <Flag
                      code={image.country_code}
                      style={{ height: "20px", borderRadius: "2px" }}
                    />
                    <span className="lexend lg:text-base text-sm">
                      {image.location}
                    </span>
                  </div>
                  <Maximize2 className="w-6 h-6 scale-75 group-hover:scale-100 transition-all duration-300 ease-in-out" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
