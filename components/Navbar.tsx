"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = ["Home", "About", "Experience", "Contact"];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -79% 0px", // Trigger when section is roughly in the top 20% of the screen
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get the ID and capitalize the first letter to match navLinks
          const id = entry.target.id;
          const sectionName = id.charAt(0).toUpperCase() + id.slice(1);
          setActiveSection(sectionName);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navLinks.forEach((link) => {
      const section = document.getElementById(link.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  // Close mobile menu on resize to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Helper for smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = item.toLowerCase();
    const element = document.getElementById(targetId);
    
    if (element) {
      // Small timeout to allow mobile menu to close before scrolling
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (item === "Home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 20 }}
        whileHover={{ scale: 1.01 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100" 
            : "bg-white/70 backdrop-blur-md"
        }`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Left Side: Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="#home" 
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight z-50 relative flex items-center gap-2"
              onClick={(e) => handleNavClick(e, "Home")}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-sm">MK</span>
              </motion.div>
              Manoj <span className="text-indigo-600">Kumar</span>
            </Link>
          </motion.div>

          {/* Middle: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((item, index) => {
              const isActive = activeSection === item;
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`text-sm xl:text-base font-medium transition-all duration-300 relative flex items-center justify-center group px-3 py-2 rounded-lg ${
                      isActive 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    <motion.span
                      animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                      className="relative"
                    >
                      {item}
                    </motion.span>
                    {/* Active underline indicator */}
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Desktop Download CV Button & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 z-50 relative">
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href="/ManojKumar.pdf"
                download="ManojKumar.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                whileHover={{ boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)" }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                >
                  <Download size={16} />
                </motion.div>
                <span className="hidden sm:inline">Download CV</span>
                <span className="sm:hidden">CV</span>
              </motion.a>
            </motion.div>

            {/* Mobile Menu Toggle Button */}
            <motion.button
              className="lg:hidden p-2 sm:p-3 text-gray-600 hover:text-blue-600 transition-colors focus:outline-none rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              suppressHydrationWarning={true}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut", type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-20 px-4 sm:px-6 flex flex-col items-center justify-start overflow-hidden backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-4 w-full mt-8">
              {navLinks.map((item, index) => {
                const isActive = activeSection === item;
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08, type: "spring", stiffness: 100 }}
                    className="w-full text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <a 
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`text-xl sm:text-2xl font-semibold transition-all duration-300 block w-full py-4 px-6 rounded-xl border ${
                        isActive 
                          ? "text-blue-600 bg-blue-50 border-blue-200" 
                          : "text-gray-600 hover:text-blue-600 hover:bg-gray-50 border-gray-100"
                      }`}
                    >
                      <motion.span
                        animate={isActive ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                      >
                        {item}
                      </motion.span>
                    </a>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className="w-full mt-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.a
                  href="/ManojKumar.pdf"
                  download="ManojKumar.pdf"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)" }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                  >
                    <Download size={20} />
                  </motion.div>
                  <span>Download CV</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
