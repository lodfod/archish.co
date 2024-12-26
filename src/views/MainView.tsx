//@ts-nocheck
import React, { useEffect, useRef } from "react";

import keyboardImage from "../assets/archish_keyboard.png";
import flamingoImage from "../assets/archish_flamingo.png";
import primeImage from "../assets/archish_52prime.png";
import cameraImage from "../assets/archish_camera.png";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";

import { DocumentTextIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

function MainView() {
  const delay = 18;

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);

  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  const blob = useRef(null);
  const isMobile = useRef(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
      window.innerWidth <= 768 ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
  );

  const interactiveElements = useRef<HTMLElement[]>([]);

  const mouseMoveEvent = (e: any) => {
    if (!blob.current || isMobile.current) return;

    endX.current = e.pageX - Math.abs(0.04 * window.innerWidth);
    endY.current = e.pageY - Math.abs(window.innerHeight * 0.04);

    blob.current.animate(
      {
        top: endY.current + "px",
        left: endX.current + "px",
      },
      { duration: 1000, fill: "forwards" }
    );
  };

  useEffect(() => {
    // More robust mobile detection using multiple checks
    isMobile.current =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      window.innerWidth <= 768 ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    // Only add mouse event listener for non-mobile devices
    if (!isMobile.current) {
      document.addEventListener("mousemove", mouseMoveEvent);
      return () => {
        document.removeEventListener("mousemove", mouseMoveEvent);
      };
    }
  }, []);

  // Optional: Add a resize listener to update mobile status
  useEffect(() => {
    const handleResize = () => {
      isMobile.current =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        window.innerWidth <= 768 ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile.current && blob.current) {
      let animationFrameId: number;

      const checkIntersections = () => {
        if (!blob.current) return;

        const blobRect = blob.current.getBoundingClientRect();
        const adjustedBlobRect = {
          left: blobRect.left + 20,
          right: blobRect.right - 20,
          top: blobRect.top + 20,
          bottom: blobRect.bottom - 20,
        };

        // Check only the main images (excluding social media icons)
        const images = document.querySelectorAll(
          'img:not([src*="linkedinIcon"]):not([src*="instagramIcon"])'
        );
        images.forEach((el) => {
          const elementRect = el.getBoundingClientRect();

          const isIntersecting = !(
            adjustedBlobRect.right < elementRect.left ||
            adjustedBlobRect.left > elementRect.right ||
            adjustedBlobRect.bottom < elementRect.top ||
            adjustedBlobRect.top > elementRect.bottom
          );

          if (isIntersecting) {
            el.style.transform = "scale(1.1)";
            el.classList.add("grayscale-0");

            setTimeout(() => {
              el.style.transform = "scale(1)";
              el.classList.remove("grayscale-0");
            }, 1000);
          }
        });

        // Check text with adjusted blob rect
        const titleText = document.querySelector(".hover\\:text-transparent");
        if (titleText) {
          const textRect = titleText.getBoundingClientRect();

          const isIntersecting = !(
            adjustedBlobRect.right < textRect.left ||
            adjustedBlobRect.left > textRect.right ||
            adjustedBlobRect.bottom < textRect.top ||
            adjustedBlobRect.top > textRect.bottom
          );

          if (isIntersecting) {
            titleText.classList.remove("text-white");
            titleText.classList.add(
              "text-transparent",
              "bg-gradient-to-r",
              "from-red-500",
              "to-yellow-500",
              "bg-clip-text"
            );

            setTimeout(() => {
              titleText.classList.add("text-white");
              titleText.classList.remove(
                "text-transparent",
                "bg-gradient-to-r",
                "from-red-500",
                "to-yellow-500",
                "bg-clip-text"
              );
            }, 1000);
          }
        }

        animationFrameId = requestAnimationFrame(checkIntersections);
      };

      const moveBlob = () => {
        // Calculate position relative to viewport height
        const randomX =
          Math.random() * (window.innerWidth * 0.8) + window.innerWidth * 0.1;
        const randomY = Math.random() * (window.innerHeight * 0.8); // Remove the offset

        blob.current?.animate(
          {
            left: `${randomX}px`,
            top: `${randomY}px`,
          },
          {
            duration: 8000,
            easing: "ease-in-out",
            fill: "forwards",
          }
        );

        setTimeout(moveBlob, 8000);
      };

      // Start both the movement and intersection checking
      moveBlob();
      checkIntersections();

      return () => {
        // Clean up
        cancelAnimationFrame(animationFrameId);
        blob.current
          ?.getAnimations()
          .forEach((animation) => animation.cancel());
        document.querySelectorAll("img").forEach((el) => {
          el.classList.remove("scale-110", "grayscale-0");
        });
      };
    }
  }, []);

  return (
    <>
      {/* Replace the mobile gradient with a mobile-specific blob */}
      {isMobile.current && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div
            ref={blob}
            className="blob"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: -1,
            }}
          />
        </div>
      )}

      {/* Keep the desktop blob */}
      {!isMobile.current && (
        <div className="blur-2xl">
          <div ref={blob} className="blob"></div>
        </div>
      )}

      <div className="items-center sm:h-screen text-center content-center p-20 text-4xl font-medium sm:flex justify-center sm:justify-between z-10 ">
        <div className="">
          <div
            onClick={(e) => (window.location.href = "/#")}
            className=" hover:cursor-pointer text-white hover:text-transparent hover:bg-gradient-to-r bg-clip-text hover:from-red-500 hover:to-yellow-500"
          >
            archish arun
            <div className="font-light font-syne text-xs pb-2">
              student, developer, musician
            </div>
          </div>
          <div className="flex px-10 sm:px-4 justify-between pt-1 ">
            <a href="mailto:me@archisharun.com?subject=Request for Resume">
              <DocumentTextIcon className="h-5 w-5 transition ease-in-out hover:cursor-pointer  hover:scale-110 hover:shadow-lg hover:shadow-red-500 rounded-md" />
            </a>

            <a href="mailto:me@archisharun.com?subject=Request for Resume">
              <EnvelopeIcon className=" h-5 bg-transparent w-5 transition ease-in-out hover:cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-orange-700 rounded-md" />
            </a>

            <a href="https://linkedin.com/in/archisharun" target="_blank">
              <div className="pl-1">
                <img
                  className=" h-5 w-5  transition ease-in-out hover:cursor-pointer hover:scale-110  hover:shadow-lg hover:shadow-orange-500  "
                  src={linkedinIcon}
                  alt=""
                />
              </div>
            </a>

            <a href="https://instagram.com/archisharun" target="_blank">
              <div className="pl-1">
                <img
                  className=" h-5 w-5 invert  transition ease-in-out hover:cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-orange-500 rounded-md "
                  src={instagramIcon}
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>

        <div className="pt-2 flex flex-col  sm:flex-row justify-center items-center align-middle">
          <button onClick={() => (window.location.href = "/general")}>
            <div className="w-36 pt-5 flex justify-center">
              <img
                className="transition ease-in-out  hover:scale-110 w-36 hover:cursor-pointer align-middle grayscale hover:grayscale-0 "
                src={flamingoImage}
                alt=""
              />
            </div>
          </button>

          <button onClick={() => (window.location.href = "/blog")}>
            <div className="h-16 flex justify-center items-center">
              <img
                className="transition ease-in-out hover:scale-110 hover:cursor-pointer h-16 grayscale hover:grayscale-0"
                src={cameraImage}
                alt=""
              />
            </div>
          </button>

          <button
            onClick={() =>
              window.open(
                "https://open.spotify.com/artist/4f5hsDIno1YcAWvudVPyeu?si=OKrmNktfS9Cp8L6Nb9vbzQ",
                "_blank"
              )
            }
          >
            <div className="h-36 w-36 flex justify-center align-middle">
              <img
                className="transition ease-in-out  hover:scale-110 hover:cursor-pointer h-36 grayscale hover:grayscale-0 "
                src={keyboardImage}
                alt=""
              />
            </div>
          </button>

          {/* <button
            onClick={() => window.open("https://linktr.ee/52prime", "_blank")}
          >
            <div className="w-44 flex justify-center align-middle">
              <img
                className="transition ease-in-out  hover:scale-110 hover:cursor-pointer  w-44 grayscale hover:grayscale-0 pt-6 "
                src={primeImage}
                alt=""
              />
            </div>
          </button> */}
        </div>
      </div>
    </>
  );
}

export default MainView;
