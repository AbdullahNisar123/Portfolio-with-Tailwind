"use client"
import React from "react";
import { useGoToTop } from "../Hooks/useGoToTop";

export default function Footer() {
  const { showGoTop, scrollToTop } = useGoToTop();

  return (
    <footer className="bg-[#151515] text-[#6e6e6e] py-10">
      <div className="container mx-auto">
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center text-center">
          {/* Location */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="text-white text-[3rem] mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5 className="text-[1.4rem] text-[#FF0077] tracking-[0.15rem] font-semibold my-[21px] uppercase">Where to find me</h5>
            <p className="text-[#6e6e6e] text-[1.5rem]">Shahrah-e-Faisal, Karachi<br />75050 Pakistan</p>
          </div>

          {/* Email */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="text-white text-[3rem] mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <h5 className="text-[1.4rem] text-[#FF0077] tracking-[0.15rem] font-semibold my-[21px] uppercase">Email Me At</h5>
            <a
              href="mailto:malikabdullahq976@gmail.com"
              className="text-gray-400 hover:text-white"
            >
              malikabdullahq976@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="text-white text-[3rem] mb-4">
              <i className="fas fa-phone"></i>
            </div>
            <h5 className="text-[1.4rem] text-[#FF0077] tracking-[0.15rem] font-semibold my-[21px] uppercase">Call Me At</h5>
            <p>Phone: +92 348 3937959</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center md:justify-end space-x-8 text-[2.1rem] mb-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-[#FF0077]"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/its_me_abdullah976/"
            target="_blank"
            className="hover:text-[#FF0077]"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/AbdullahNisar123"
            target="_blank"
            className="hover:text-[#FF0077]"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:text-[#FF0077]"
            rel="noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-6 text-[1.5rem] ">
          <span>
            © Copyright 2024{" "}
            <a
              href="https://www.linkedin.com"
              className="text-pink-500 hover:text-white pl-[5px] items-center"
            >
              Abdullah
            </a>
          </span>
        </div>

        {/* Go to Top Button */}
        {showGoTop && (
          <button
            className="fixed bottom-6 right-6 p-3 bg-[#FF0077] text-white shadow-md hover:bg-black transition h-[6.6rem] w-[6rem]"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        )}
      </div>
    </footer>
  );
}
