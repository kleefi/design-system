"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const GsapEfek = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    gsap.to("#text", {
      y: 0,
      ease: "power1.inOut",
      opacity: 1,
      scrollTrigger: {
        trigger: "#text",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    gsap.fromTo(
      ".parap",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#text",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150 * (boxes.indexOf(box) + 5),
        rotation: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 20%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <>
      <div className="h-50 mx-auto max-w-[1200px] bg-red-400 p-4">
        <h1
          id="text"
          className="translate-y-10 pb-4 text-4xl text-gray-500 opacity-0"
        >
          Judul
        </h1>
        <p className="parap">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          consequuntur quisquam laudantium eius reprehenderit repudiandae alias
          exercitationem quibusdam officia tenetur.
        </p>
      </div>
      <div className="flex h-screen bg-slate-100 pt-10" ref={scrollRef}>
        <div id="box" className="h-20 w-20 bg-orange-500"></div>
      </div>
    </>
  );
};

export default GsapEfek;
