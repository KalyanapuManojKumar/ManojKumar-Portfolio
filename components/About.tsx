"use client";

import { motion } from "framer-motion";
import { Download, Code, Database, GitBranch, Globe, Server } from "lucide-react";
import { aboutData } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16">
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
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] xl:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Left: Introduction Card */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, rotateY: 2 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>

            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
              </motion.div>

              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                My Introduction
              </motion.h3>

              <motion.p
                className="text-gray-600 text-justify leading-relaxed mb-10 text-base sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {aboutData.introduction}
              </motion.p>

              <motion.div
                className="flex justify-center md:justify-end"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.a
                  href="/ManojKumar.pdf"
                  download="ManojKumar.pdf"
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                  >
                    <Download size={18} />
                  </motion.div>
                  <span>Download CV</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-2 sm:px-4">
            <SkillColumn title="Programming" skills={aboutData.skills.programming} delay={0.1} icon={Code} color="blue" />
            <SkillColumn title="Frontend" skills={aboutData.skills.frontend} delay={0.2} icon={Globe} color="indigo" />
            <SkillColumn title="Backend" skills={aboutData.skills.backend} delay={0.3} icon={Server} color="purple" />
            <SkillColumn title="Database" skills={aboutData.skills.database} delay={0.4} icon={Database} color="pink" />
            <SkillColumn title="Version Control" skills={aboutData.skills.versionControl} delay={0.5} icon={GitBranch} color="green" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillColumn({
  title,
  skills,
  delay,
  icon: Icon,
  color,
}: {
  title: string;
  skills: string[];
  delay: number;
  icon: any;
  color: string;
}) {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    indigo: "from-indigo-500 to-indigo-600",
    purple: "from-purple-500 to-purple-600",
    pink: "from-pink-500 to-pink-600",
    green: "from-green-500 to-green-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Header: icon + title on same line, wrapped if needed */}
      <motion.div
        className="flex items-center gap-2 mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: delay + 0.1, duration: 0.4 }}
      >
        <div
          className={`w-8 h-8 min-w-[2rem] bg-gradient-to-br ${
            colorClasses[color as keyof typeof colorClasses]
          } rounded-lg flex items-center justify-center shadow-md`}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-sm font-bold text-gray-900 leading-tight">{title}</h3>
      </motion.div>

      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className={`px-2.5 py-1 bg-gradient-to-r ${
              colorClasses[color as keyof typeof colorClasses]
            } text-white text-xs font-medium rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: delay + 0.2 + index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}