import React from "react";
import { useState,useEffect } from "react";
import {motion,AnimatePresence} from "motion/react";
import './index.css'
import S1 from './assets/hennry.png'
import S2 from './assets/h2.jpeg'
import S3 from './assets/h3.png'
import h4 from './assets/h4.jpeg'
const slides = [
  {
    image: S1,
    title: "Creative Design",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: S2,
    title: "Modern UI",
    desc: "Smooth animations with Framer Motion.",
  },
  {
    image: S3,
    title: "Fast & Responsive",
    desc: "Perfect for landing pages & portfolios.",
  },
   {
    image: h4,
    title: "Fast & Responsive",
    desc: "Perfect for landing pages & portfolios.",
  },
];

function Motion() {
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

    return(
        <>
        <div className="w-full h-screen flex items-center justify-center bg-slate-950">
      <div className="relative w-[90%] max-w-5xl h-105 overflow-hidden rounded-2xl shadow-xl">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index].image})` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1,rotate:180,x:200}}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text */}
            <motion.div
              className="absolute bottom-10 left-10 max-w-md text-white"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold">
                {slides[index].title}
              </h2>
              <p className="mt-2 text-sm text-gray-200">
                {slides[index].desc}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
        </>
    )

}
export default Motion;