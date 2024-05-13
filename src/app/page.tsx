"use client";
import Banner from "@/pages/banner";
// import Image from "next/image";
import Navbar from "../pages/navbar";
import CarouselSpacing from "@/pages/carousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <CarouselSpacing />
    </>
  );
}
