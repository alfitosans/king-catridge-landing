"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Button } from "../components/ui/button";

export function Navbar() {
  return (
    <>
      <div className="text-center items-center ">
        <div className="p-2 bg-neutral-950"></div>
        {/* =================================== */}
        <div className="grid grid-cols-5 p-3 gap-3 bg-slate-100 ">
          <p>Franchise Opportunities</p>
          <p>Help</p>
          <p>Feedback</p>
          <p>hello@gmail.com</p>
          <p>0800 022 2 022</p>
        </div>
        {/* =================================== */}
        <div className="grid grid-cols-2 p-3 gap-3">
          <div className="flex gap-2 ">
            <img
              src="https://t4.ftcdn.net/jpg/02/04/25/71/360_F_204257104_jnqWGXAbNuyORkJG9yw9tdfutvkmJblt.jpg"
              alt="Cartridge Kings"
              width={70}
            />
            <div className="text-3xl font-black mt-1">CARTRIDGE KINGS</div>
          </div>
          <div className="flex gap-2">
            <Input type="SEARCH" placeholder="SEARCH" />
            <Button
              className="bg-amber-500 text-neutral-950   text-neutral-100"
              size="sm"
            >
              CART (1)
            </Button>
          </div>
        </div>

        {/* =================================== */}

        <div className="flex justify-center items-center bg-sky-600 gap-2 p-2 ">
          <Button className="bg-sky-600 text-neutral-100 " size="sm">
            HOME
          </Button>
          <Button className="bg-sky-600 text-neutral-100 " size="sm">
            INK CARTRIDGES
          </Button>
          <Button className="bg-sky-600 text-neutral-100 " size="sm">
            TONER CARTRIDGE
          </Button>
          <Button className="bg-sky-600 text-neutral-100 " size="sm">
            CONTACT US
          </Button>
          <Button className="bg-sky-600 text-neutral-100 " size="sm">
            LOGIN / REGISTER
          </Button>
        </div>
      </div>
    </>
  );
}
