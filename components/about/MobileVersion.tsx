"use client";
// import { Metadata } from "next";
import bath from "@/public/images/bath.png";
// import { WaterElement } from "@/utils/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SpringDefine from "@/components/about/SpringDefine";
import WaterComponent from "@/components/about/WaterComponent";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import MineralComposition from "@/components/about/MineralComposition";
import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import { Sliders } from "lucide-react";
import SpringFeatures from "@/components/about/SpringFeatures";

function MobileVersion({ className }: { className: string }) {
  const springData = [
    <SpringDefine key={0} />,
    <WaterComponent key={1} />,
    <MineralComposition key={2} />,
    <SpringFeatures key={3} />,
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false);
  const prevIndex = useRef(0);
  const slides = useRef([] as any);

  const rightClickHandler = () => {
    animate(slides.current[index], { x: 0 }, { delay: 0.3 });
    animate(slides.current[prevIndex.current], {
      scale: index === 0 ? 1 : 0.4,
      rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
    });
  };

  const leftClickHandler = () => {
    animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
    animate(slides.current[prevIndex.current], { x: "100%" });
  };

  useEffect(() => {
    direction ? leftClickHandler() : rightClickHandler();
    prevIndex.current = index;
  }, [index]);

  return (
    <div className={`sm:px-32 px-1 ${className}`}>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative w-[300px] h-[600px] md:w-[700px] lg:w-[1000px] md:h-[700px] lg:h-[500px] flex items-center justify-center overflow-hidden"
        >
          {springData.map((item, index) => (
            <motion.div
              initial={{ x: "100%" }}
              className="absolute inset-0 flex flex-col items-center justify-center lg:border border-yellow-500 bg-zinc-50 p-3 rounded-md mt-3"
              key={index}
              ref={(el) => slides.current.push(el)}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
        <div className="flex gap-x-4 mt-5">
          <Button
            variant="ghost"
            onClick={() => {
              setDirection(true);
              setIndex(index - 1);
            }}
            className={`${
              index === 0
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-150 transition-all`}
            size="sm"
          >
            <IoIosArrowBack />
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setDirection(false);
              setIndex(index + 1);
            }}
            className={`${
              index === springData.length - 1
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-150 transition-all`}
            size="sm"
          >
            <IoIosArrowForward />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MobileVersion;
