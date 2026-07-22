"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Heart,
  Code,
  Zap
} from "lucide-react";
import { contactInfo } from "@/lib/data";
import { heroData } from "@/lib/data";

const footerLinks = {
  "Quick Links": [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    
    { name: "Contact", href: "#contact" }
  ],
  "Resources": [
    { name: "Blog", href: "#" },
    { name: "Resume", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Testimonials", href: "#" }
  ],
  "Legal": [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" }
  ]
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10
    }
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-pattern"></div>
        </div>
      </div>

      <div className="relative z-10">

        {/* Enhanced Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Enhanced Brand Section */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/25">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Manoj Kumar</h4>
                  <p className="text-gray-400 text-sm font-medium">Full Stack Developer</p>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Passionate about creating exceptional digital experiences 
                through clean code and innovative design.
              </motion.p>

              {/* Enhanced Social Links */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {heroData.socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 hover:border-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-600/25"
                    whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Quick Links Section */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.h5 
                className="text-xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Quick Links
              </motion.h5>
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {footerLinks["Quick Links"].map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-3 group py-2 px-3 rounded-lg hover:bg-white/5"
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  >
                    <span className="w-2 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    <span className="text-base">{link.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Contact Info Section */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.h5 
                className="text-xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Get In Touch
              </motion.h5>
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-300 group py-3 px-4 rounded-xl hover:bg-white/5 border border-gray-800 hover:border-blue-600/50"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-lg flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                      <info.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-base">{info.value}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Divider */}
          <motion.div 
            className="mt-16 pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Enhanced Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                suppressHydrationWarning={true}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 border border-blue-600/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <ArrowUp className="w-5 h-5" />
                <span>Back to Top</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700/50 bg-gradient-to-r from-slate-900/90 to-blue-900/90 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <motion.div 
                className="text-gray-400 text-base"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <span>© {currentYear} Manoj Kumar</span>
                <span className="hidden lg:inline mx-2">•</span>
                <span className="hidden lg:inline">All rights reserved</span>
              </motion.div>
              
              {/* <motion.div 
                className="flex items-center gap-2 text-gray-400"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <span className="text-sm">Crafted with</span>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="mx-1"
                >
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                </motion.div>
                <span className="text-sm">and</span>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
                  className="ml-1"
                >
                  <Zap className="w-5 h-5 text-yellow-400" />
                </motion.div>
              </motion.div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
