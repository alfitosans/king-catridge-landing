import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Banner() {
  return (
    <div className="relative text-center bg-slate-200">
      <img
        src="https://i1.adis.ws/i/canon/pro-4000_hero_1920x1080?w=1920"
        className="w-full h-[300px] object-cover"
        alt="Layout Image"
      />
      <div className="absolute inset-1 grid mt-8 ">
        <h1 className="font-black text-2xl text-slate-100">
          FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
        </h1>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">3-Step Easy Search R</TabsTrigger>
            <TabsTrigger value="password">Search by Serial Number</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card className="mx-20 items-center text-center justify-center ">
              <div className="flex p-4 gap-1">
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="1.Printer Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Canon</SelectItem>
                    <SelectItem value="dark">Epson</SelectItem>
                    <SelectItem value="system">HP</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="2.Printer Series" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Canon</SelectItem>
                    <SelectItem value="dark">Epson</SelectItem>
                    <SelectItem value="system">HP</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="3.Printer Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Canon</SelectItem>
                    <SelectItem value="dark">Epson</SelectItem>
                    <SelectItem value="system">HP</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-amber-500">FIND CARTRIDGES</Button>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card className="p-4 flex gap-1 mx-20">
              <Input placeholder="Search Serial Number" />
              <Button className="bg-amber-500">Search</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Banner;
