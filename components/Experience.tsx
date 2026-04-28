"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building, Users, Target } from "lucide-react";
import { experienceData } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
          >
            Professional <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
          
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-16 relative pl-20 last:mb-0"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
            >
              {/* Timeline Dot with animation */}
              <motion.div 
                className="absolute left-6 top-2 w-5 h-5 rounded-full bg-white border-4 border-blue-600 shadow-lg z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full bg-blue-600"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                />
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative group overflow-hidden"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <motion.div 
                        className="flex items-center gap-3 mb-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.2 + 0.4, duration: 0.4 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            {exp.role}
                          </h3>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-2 text-blue-600 font-semibold text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.4 }}
                      >
                        <Briefcase size={20} />
                        <span>{exp.company}</span>
                      </motion.div>
                    </div>
                    
                    {/* Date and Location Badges */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.div 
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-200"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.2 + 0.6, duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar size={16} className="text-blue-600" />
                        <span className="text-sm font-medium text-gray-700">{exp.date}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-200"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.2 + 0.7, duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <MapPin size={16} className="text-blue-600" />
                        <span className="text-sm font-medium text-gray-700">{exp.location}</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Responsibilities List */}
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-5 h-5 text-blue-600" />
                      <h4 className="text-lg font-semibold text-gray-900">Key Responsibilities</h4>
                    </div>
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-3 text-gray-600 leading-relaxed text-justify"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.2 + 0.9 + idx * 0.1, duration: 0.4 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mt-2.5 shrink-0 shadow-md"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                        />
                        <span className="text-sm sm:text-base">{resp}</span>
                      </motion.li>
                    ))}
                  </motion.div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 blur-xl"></div>
                <motion.div 
                  className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-3xl"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  style={{ transformOrigin: "top" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
