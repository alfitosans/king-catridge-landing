import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export const cartridgeData = [
  {
    name: "HP 63 Black Original Ink Cartridge",
    image:
      "https://id-media.apjonlinecdn.com/catalog/product/c/0/c06418786.png",
    printerCompatibility: "HP DeskJet, OfficeJet, ENVY series",
    price: "20.99 USD",
    description:
      "Original HP ink cartridge - high-quality prints, page after page. Trust HP printer ink for home or office printing.",
  },
  {
    name: "Canon CLI-281 Black Ink Tank paling keren sedunia anjay",
    image:
      "https://image.tintatonermurah.com/s3/productimages/webp/co251574/p1197760/w600-h600/e67411a2-755c-4faf-8e81-0aabac396540.jpeg",
    printerCompatibility: "Canon PIXMA TR, TS, MG series",
    price: "12.99 USD",
    description:
      "Genuine Canon ink tanks allow free access to exciting exclusive content via Creative Park Premium.",
  },
  {
    name: "Epson T702XL-BCS DURABrite Ultra Black High Capacity Cartridge",
    image:
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/9/14/ba32af4f-f164-4e85-af67-dc7a87d7e4d5.jpg",
    printerCompatibility: "Epson WorkForce Pro series",
    price: "64.99 USD",
    description:
      "Remarkable durability, with prints that last up to 4x longer than standard prints.",
  },
  {
    name: "Brother Genuine TN660 High Yield Black Toner Cartridge",
    image:
      "https://www.brother.co.id/-/media/ap2/indonesia/microsite/supplies/img/brother-genuine-supplies-mobile.png?rev=91d508d48d72488bb068f48698b6fbfb&hash=235D944C79412CE11CE181158E267530",
    printerCompatibility: "Brother HL, DCP, MFC series",
    price: "54.99 USD",
    description:
      "Professional mono laser print quality you can consistently rely on for up to 2,600 pages.",
  },
  {
    name: "Samsung MLT-D116L Black Toner Cartridge",
    image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-50125646/samsung_toner-samsung-mlt-d116s-black_full01.jpg",
    printerCompatibility: "Samsung Xpress series",
    price: "49.99 USD",
    description:
      "Original Samsung toner cartridges deliver consistent printing, so you can rest easy and get on with your work.",
  },
];
function CarouselSpacing() {
  return (
    <div className="items-center text-center justify-center">
      <div>
        <h1 className="text-center text-3xl font-bold my-10">
          Featured Products
        </h1>
      </div>
      <div className="flex justify-center mx-20">
        {/* Tambahkan div wrapper untuk menempatkan carousel di tengah */}
        <Carousel className="w-full max-w-full items-center">
          <CarouselContent className="-ml-1">
            {cartridgeData.map((cartridge, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/3 lg:basis-1/5 flex justify-center" // Menengahkan item dalam carousel secara horizontal
              >
                <div className="p-1 ">
                  <Card className="h-full flex flex-col items-center justify-between">
                    {/* Menggunakan kelas flex dan items-center untuk menengahkan gambar */}
                    <img
                      src={cartridge.image}
                      alt={cartridge.name}
                      className="h-[200px] object-cover self-center" // Menggunakan self-center untuk menengahkan gambar dalam kartu
                    />
                    <CardContent className="p-4">
                      <h2 className="text-lg font-semibold">
                        {cartridge.name}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {cartridge.printerCompatibility}
                      </p>
                      <p className="text-xl font-bold mt-2">
                        {cartridge.price}
                      </p>
                      <p className="mt-2">{cartridge.description}</p>
                      <Button className="mt-4">Add to Cart</Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselSpacing;
