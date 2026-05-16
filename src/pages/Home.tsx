import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, GraduationCap, Globe, Users, Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2071" 
            alt="Students collaborating" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary font-bold text-xs uppercase tracking-widest mb-6">
                Now Enrolling for 2026-27
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight mb-6 text-balance">
                Shape Your Child's <br />
                <span className="italic text-secondary">Global Future</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed text-balance">
                Join Phnom Penh's premier international academy. Where academic excellence meets character building in a diverse, world-class community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/admissions" 
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all active:scale-95 group"
                >
                  Start Application
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/programs" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all active:scale-95"
                >
                  Explore Programs
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="Student" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">500+ Active Students</p>
                  <p className="text-sm text-slate-500 italic">"The best decision for my daughter" — Sarah M.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <p className="text-4xl font-bold mb-1 italic text-secondary">98%</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Uni Acceptance</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-1 italic text-secondary">15+</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Nationalities</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-1 italic text-secondary">1:12</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Teacher Ratio</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-1 italic text-secondary">25+</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Extracurriculars</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Why Choose <br />
                <span className="text-secondary italic">Global Vision?</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We go beyond traditional education to foster critical thinking, global awareness, and a passion for lifelong learning.
              </p>
              <div className="space-y-4">
                {["Accredited IB World School", "Holistic Student Support", "State-of-the-Art STEM Labs"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="font-bold text-primary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <BenefitCard 
                icon={<Globe className="w-6 h-6 text-secondary" />}
                title="Global Curriculum"
                description="IB and AP pathways designed for international university success."
              />
              <BenefitCard 
                icon={<Users className="w-6 h-6 text-secondary" />}
                title="World-Class Faculty"
                description="80% of our teachers hold advanced degrees from top global institutions."
              />
              <BenefitCard 
                icon={<Trophy className="w-6 h-6 text-secondary" />}
                title="Diverse Community"
                description="Students from 25+ countries fostering a truly multicultural perspective."
              />
              <BenefitCard 
                icon={<GraduationCap className="w-6 h-6 text-secondary" />}
                title="Modern Facilities"
                description="Science labs, Olympic pool, and a 500-seat theater to nurture every talent."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Academic Pathways</h2>
            <p className="text-slate-600 leading-relaxed">
              Tailored curriculum designed to challenge and inspire at every stage of development, from early years to secondary graduation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:col-span-1 lg:grid-cols-3 gap-8">
            <ProgramCard 
              icon={<GraduationCap className="w-8 h-8 text-secondary" />}
              title="Early Years"
              age="3 - 5 Years"
              description="Nurturing curiosity and social skills through play-based inquiry and bilingual support."
            />
            <ProgramCard 
              active
              icon={<Globe className="w-8 h-8 text-secondary" />}
              title="Primary Years"
              age="6 - 11 Years"
              description="A robust foundation in core subjects with a strong focus on digital literacy and global citizenship."
            />
            <ProgramCard 
              icon={<Trophy className="w-8 h-8 text-secondary" />}
              title="Secondary School"
              age="12 - 18 Years"
              description="IB and AP pathways preparing students for competitive entry into top-tier global universities."
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 italic text-balance">Success Stories</h2>
              <p className="text-slate-600">Hear from the parents and students who make our community exceptional.</p>
            </div>
            <div className="flex gap-4">
              <button title="Previous" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button title="Next" className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-md active:scale-95">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="The focus on both academics and emotional intelligence is what sets Global Vision apart. My son has found his voice here."
              author="Michael Chen"
              role="Parent of Grade 4 Student"
              image="https://i.pravatar.cc/150?u=michael"
            />
            <TestimonialCard 
              quote="Attending this school opened doors I never thought possible. The IB program prepared me perfectly for my studies at Oxford."
              author="Sokha Lin"
              role="Alumni, Class of 2024"
              image="https://i.pravatar.cc/150?u=sokha"
            />
          </div>
        </div>
      </section>

      {/* Trust Signal / Call to Action */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to join our family?</h2>
              <p className="text-slate-300 mb-10 leading-relaxed">
                Our admissions team is here to guide you through every step. Book a campus tour or start your online application today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/admissions" 
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-primary px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg transition-all active:scale-95"
                >
                  Book a Visit
                </a>
                <a 
                  href="/admissions" 
                  className="inline-flex items-center justify-center gap-2 text-white border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
                >
                  Quick Inquiry
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1523050335392-9ae854d97c7f?auto=format&fit=crop&q=80&w=2070" 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="School building" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TestimonialCard({ quote, author, role, image }: { quote: string, author: string, role: string, image: string }) {
  return (
    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
      <div>
        <div className="flex gap-1 mb-6">
          {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-5 h-5 text-secondary fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-xl text-primary font-serif italic leading-relaxed mb-8">"{quote}"</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-bold text-primary">{author}</p>
          <p className="text-xs text-slate-500 uppercase tracking-widest">{role}</p>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
    >
      <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed italic">
        {description}
      </p>
    </motion.div>
  );
}

function ProgramCard({ icon, title, age, description, active = false }: { icon: React.ReactNode, title: string, age: string, description: string, active?: boolean }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`p-8 rounded-3xl border transition-all ${active ? 'bg-primary text-white border-primary shadow-xl' : 'bg-white border-slate-100 hover:border-secondary/50'}`}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${active ? 'bg-white/10' : 'bg-secondary/10'}`}>
        {icon}
      </div>
      <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${active ? 'text-secondary' : 'text-slate-500'}`}>{age}</p>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className={`text-sm leading-relaxed mb-8 ${active ? 'text-slate-300' : 'text-slate-600'}`}>
        {description}
      </p>
      <a 
        href="/programs" 
        className={`inline-flex items-center gap-2 font-bold text-sm ${active ? 'text-secondary hover:text-white' : 'text-primary hover:text-secondary'}`}
      >
        View Curriculum
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  );
}
