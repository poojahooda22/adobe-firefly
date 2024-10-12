'use client';

import { useEffect, useRef } from "react";
import Sketch from '../components/js/MainShader';
import Card from "@/components/Cards";


export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    new Sketch({
      dom: ref.current
    });
  })
  return (
    <>
      <div ref={ref} className="absolute top-0 left-0 w-full h-screen"></div>
      <section id="hero" className="hero h-screen relative flex flex-col items-center justify-center">
        <h1 className="text-[8vw] text-center w-[75%] mx-auto leading-none ">Create with <span className="italic">Firefly</span> generative AI.</h1>
      </section>
      <Card />
    </>
    
  );
}
