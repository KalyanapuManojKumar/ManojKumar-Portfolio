"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Download, Mouse } from "lucide-react";
import { heroData } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 sm:pt-20 md:pt-20 lg:pt-20 pb-10 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          className="flex flex-col items-center md:items-start text-center md:text-left gap-6 sm:gap-8 mt-10 md:mt-0 order-2 lg:order-1 lg:col-span-7 xl:col-span-7"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* Badge */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold shadow-lg inline-flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-white rounded-full"
            />
            {heroData.name}
          </motion.div>

          {/* Heading */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <span className="block">{heroData.greeting}</span>
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={heroData.roles}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {heroData.description}
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 mt-4 sm:mt-6 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.a 
              href={heroData.buttons.primary.href}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-center flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{heroData.buttons.primary.label}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
            <motion.a 
              href={heroData.buttons.secondary.href}
              download="ManojKumar.pdf"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 flex items-center justify-center gap-2 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{heroData.buttons.secondary.label}</span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
              >
                <Download size={18} />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div 
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {heroData.socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white rounded-full text-gray-600 shadow-lg hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + idx * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div 
          className="relative flex justify-center items-center order-1 lg:order-2 px-4 sm:px-8 md:px-0 lg:col-span-5 xl:col-span-5"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, rotate: -2 }}
        >
          <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-square">
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Image container */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-2xl"
              whileHover={{ rotate: -5 }}
            >
              <Image
                src={heroData.image}
                alt={heroData.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain drop-shadow-2xl z-10"
                priority
              />
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-500 rounded-full opacity-60"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-0 sm:bottom-8 left-1/2 -translate-x-1/2 flex justify-center w-full z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.a 
          href="#about" 
          className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-full shadow-lg hover:shadow-xl text-sm sm:text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 border border-gray-100"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mouse size={18} />
          </motion.div>
          <span className="hidden sm:inline">Scroll Down</span>
          <span className="sm:hidden">Down</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
