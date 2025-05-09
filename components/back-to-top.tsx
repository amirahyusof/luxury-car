"use client";
import React from 'react';
import { Rocket } from "lucide-react";

export default function BackToTop(){
  return (
    <div className='flex flex-col mx-auto justify-center items-center'>
      <p
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="cursor-pointer flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition"
      >
        <Rocket className="h-6 w-6" />
        Back to top
      </p>
    </div>
  )
}
