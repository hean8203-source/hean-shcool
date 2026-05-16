import { motion } from "motion/react";
import { GraduationCap, BookOpen, Microscope, Music, Globe, Lightbulb, ArrowRight, Download, CheckCircle2, Sparkles, Binary, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const PROGRAM_GROUPS = [
  {
    id: "early-years",
    title: "Early Years",
    age: "2.5 - 5 Years",
    description: "A play-based inquiry environment focusing on social-emotional development and foundational literacy.",
    image: "https://images.unsplash.com/photo-1544333346-64e4fe186dd0?auto=format&fit=crop&q=80&w=2070",
    features: ["Reggio-inspired approach", "Safe sensory play zones", "Language immersion starting at age 3", "Ratio 1:6 teacher-student"]
  },
  {
    id: "primary",
    title: "Primary School",
    age: "6 - 11 Years",
    description: "Authorized IB Primary Years Programme (PYP) fostering critical thinking and transdisciplinary learning.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2070",
    features: ["IB PYP Authorized", "Personalized literacy paths", "Daily STEM & Arts integration", "Global Citizenship modules"]
  },
  {
    id: "secondary",
    title: "Secondary School",
    age: "12 - 18 Years",
    description: "Preparing students for global university success through rigorous AP and IB diploma pathways.",
    image: "https://images.unsplash.com/photo-1523050335392-9bc5675e583f?auto=format&fit=crop&q=80&w=2070",
    features: ["AP & IB Diploma options", "College counseling from Grade 9", "Advanced Robotics & labs", "Leadership & MUN programs"]
  }
];

const SPECIALIZATIONS = [
  { icon: <Microscope />, title: "STEM Excellence", desc: "Digital fabrication labs and early coding integration." },
  { icon: <Globe />, title: "Languages", desc: "Fluent pathways in English, Khmer, and Mandarin." },
  { icon: <Music />, title: "Fine Arts", desc: "Performance-grade studios for music, dance, and visual arts." },
  { icon: <Lightbulb />, title: "Innovation", desc: "Entrepreneurship incubators for high school students." }
];

export default function Programs() {
  return (
    <div className="bg-paper min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="Students in library" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Academic Excellence</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 italic leading-tight">
              Future-Ready <br />Curriculum
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Our inquiry-based model empowers students to become lifelong learners, blending global standards with localized Khmer heritage.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary mb-4 italic">Educational Stages</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-slate-500 max-w-2xl mx-auto">From early discovery to university readiness, explore our developmental pathways.</p>
          </div>

          <div className="space-y-32">
            {PROGRAM_GROUPS.map((program, idx) => (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={cn(
                  "flex flex-col gap-16 items-center",
                    idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}
                >
                  <div className="lg:w-1/2 w-full">
                    <div className="relative group">
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="relative z-10"
                      >
                        <img 
                          src={program.image} 
                          className="rounded-[3.5rem] shadow-2xl w-full h-[500px] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" 
                          alt={program.title}
                        />
                        <div className="absolute inset-0 rounded-[3.5rem] ring-1 ring-inset ring-white/20" />
                      </motion.div>
                      
                      {/* Floating Badge */}
                      <motion.div 
                        initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className={cn(
                          "absolute top-12 bg-white p-6 rounded-[2rem] shadow-xl z-20 flex items-center gap-4 border border-slate-50",
                          idx % 2 === 0 ? "-right-8" : "-left-8"
                        )}
                      >
                        <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                          {idx === 0 ? <Sparkles className="w-6 h-6" /> : idx === 1 ? <BookOpen className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                        </div>
                        <div>
                          <span className="text-secondary font-black text-2xl block leading-none">{program.age}</span>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Grade level range</p>
                        </div>
                      </motion.div>

                      {/* Level Marker */}
                      <div className={cn(
                        "absolute -bottom-10 w-24 h-24 bg-primary text-white rounded-full flex flex-col items-center justify-center border-8 border-paper z-20",
                        idx % 2 === 0 ? "left-12" : "right-12"
                      )}>
                        <span className="text-xs font-black uppercase tracking-tighter opacity-50">Level</span>
                        <span className="text-3xl font-black italic mt-[-4px]">{idx + 1}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-[1px] w-8 bg-secondary" />
                      <span className="text-secondary font-black text-xs uppercase tracking-[0.3em]">{program.id.replace(/-/g, ' ')}</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold text-primary mb-8 italic">{program.title}</h3>
                    <div className="p-8 bg-white rounded-4xl shadow-sm border border-slate-50 mb-10 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary" />
                      <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic relative z-10 transition-colors group-hover:text-primary">
                        "{program.description}"
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
                      {program.features.map(feature => (
                        <div key={feature} className="flex items-start gap-4 group/feature">
                          <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover/feature:bg-secondary group-hover/feature:text-white transition-all">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-bold text-slate-600 group-hover/feature:text-primary transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to="/admissions" 
                      className="group inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full font-bold shadow-xl hover:bg-secondary hover:text-primary transition-all active:scale-95"
                    >
                      Inquire About This Level
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 italic">Academic Pillars</h2>
            <p className="text-slate-400">Specialized focuses that define the Global Vision experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SPECIALIZATIONS.map((spec, idx) => (
              <motion.div 
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm group hover:bg-secondary transition-all"
              >
                <div className="w-14 h-14 bg-secondary text-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  {spec.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{spec.title}</h4>
                <p className="text-sm text-slate-400 group-hover:text-primary/70 transition-colors italic leading-relaxed">
                  {spec.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 text-primary mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 italic">Empower Your Child's Journey</h2>
          <p className="text-slate-600 text-xl mb-12 italic leading-relaxed">
            Admissions for the 2026-27 academic year are now open. Discover how Global Vision can transform your child's educational experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/admissions" 
              className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-transform"
            >
              Start Admission Process
            </Link>
            <Link 
              to="/faq" 
              className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-slate-50 transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


