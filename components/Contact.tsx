"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, User, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { contactInfo } from "@/lib/data";
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10
    }
  }
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormState({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setFormState({ isSubmitting: false, isSubmitted: true, error: null });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);

    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      });
    }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Send me a message and I'll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-1 h-8 sm:h-10 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
                Let's Connect
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you have a question, want to start a project, or simply want to connect, 
                feel free to reach out. I'm always interested in hearing about new opportunities and exciting ideas.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <motion.a
                    href={info.href}
                    className="flex items-center gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                      <info.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
                        {info.value}
                      </p>
                    </div>
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-6 h-6" />
                Response Time
              </h4>
              <p className="text-blue-100 leading-relaxed mb-4">
                I typically respond to messages within 24-48 hours. For urgent matters, 
                please mention it in your message or call me directly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  Available for freelance
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  Open to collaboration
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-1 h-8 sm:h-10 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
                Send Message
              </h3>

              {/* Success Message */}
              {formState.isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {formState.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-800 font-medium">
                    {formState.error}
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      suppressHydrationWarning={true}
                      className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.name 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="Manoj Kumar"
                      disabled={formState.isSubmitting}
                    />
                  </div>
                  <div className="min-h-[1.5rem]">
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      suppressHydrationWarning={true}
                      className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.email 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="manojkumar@example.com"
                      disabled={formState.isSubmitting}
                    />
                  </div>
                  <div className="min-h-[1.5rem]">
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    suppressHydrationWarning={true}
                    className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.subject 
                        ? 'border-red-300 bg-red-50' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    placeholder="Project Discussion"
                    disabled={formState.isSubmitting}
                  />
                  <div className="min-h-[1.5rem]">
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.subject}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    suppressHydrationWarning={true}
                    rows={5}
                    className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                      errors.message 
                        ? 'border-red-300 bg-red-50' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    placeholder="Tell me about your project or idea..."
                    disabled={formState.isSubmitting}
                  />
                  <div className="min-h-[1.5rem]">
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: formState.isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: formState.isSubmitting ? 1 : 0.98 }}
                >
                  {formState.isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
