"use client";

import LeftSideBar from "@/components/LeftSideBar";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar";
import { handleCanvasMouseDown, handleResize, initializeFabric } from "@/lib/canvas";
import { CustomFabricObject } from "@/types/type";
import { useEffect, useRef } from "react";
import { fabric } from "fabric";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>('rectangle');

  useEffect(() => {
    const canvas = initializeFabric({canvasRef, fabricRef });

    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas, 
        isDrawing,
        shapeRef,
        selectedShapeRef,
      });
    });

    window.addEventListener("resize", () => {
      handleResize({ canvas: fabricRef.current, })
    })
  }, [])

  return (
    <main className = "h-screen overflow-hidden"  >
        <Navbar />

        <section className = "flex h-full flex-row" >
          <LeftSideBar />
            <Live canvasRef = { canvasRef } />
          <RightSideBar />
        </section>
    </main>
  );
}