import { motion } from "motion/react";
import { Users, History, Target, Heart, Award, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const CORE_VALUES = [
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Integrity", desc: "Developing ethical leaders who act with honesty and courage." },
  { icon: <Heart className="w-6 h-6" />, title: "Compassion", desc: "Fostering empathy and kindness within our global community." },
  { icon: <Target className="w-6 h-6" />, title: "Excellence", desc: "Striving for the highest standards in every academic pursuit." },
  { icon: <Award className="w-6 h-6" />, title: "Innovation", desc: "Embracing curiosity to solve the challenges of tomorrow." }
];

const LEADERSHIP = [
  {
    name: "Dr. Elena Vance",
    role: "Head of School",
    bio: "With 20 years of experience in IB education across three continents, Dr. Vance leads our vision for global excellence.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Mr. Sovann Phirun",
    role: "Director of Operations",
    bio: "A native of Phnom Penh, Mr. Phirun ensures our campus remains a world-class environment for all students.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Mrs. Sarah Jenkins",
    role: "Primary School Principal",
    bio: "Sarah is passionate about early childhood inquiry and has pioneered our Reggio-inspired Early Years program.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  }
];

export default function About() {
  return (
    <div className="bg-paper min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="Campus courtyard"
          />
        </div>
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Established 2015</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 italic">
              Our Vision, <br />Your Future.
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto italic leading-relaxed">
              Global Vision International Academy was founded with a singular purpose: to cultivate minds that think globally and act locally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=2070" 
                  className="rounded-[3rem] shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700" 
                  alt="School library" 
                />
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <History className="text-secondary w-8 h-8" />
                <h2 className="text-3xl font-bold text-primary italic">A Legacy in the Making</h2>
              </div>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed italic">
                From our humble beginnings with 50 students in a single building, Global Vision has grown into a premier IB World School recognized for academic excellence.
              </p>
              <div className="space-y-6">
                <p className="text-slate-500 leading-relaxed">
                  Founded by a group of international educators and Cambodian visionaries, we recognized the need for a school that offered a truly global curriculum without losing touch with the rich heritage of Cambodia.
                </p>
                <div className="p-8 bg-slate-50 rounded-3xl border-l-4 border-secondary">
                  <p className="text-primary font-bold italic leading-relaxed">
                    "Our mission is to empower students to reach their full potential through a holistic, inquiry-led education that fosters international mindedness."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 italic">The GV Pillars</h2>
            <p className="text-slate-400">The values that guide every lesson and interaction on campus.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((value, idx) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm group hover:border-secondary transition-all"
              >
                <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-secondary/10 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 italic">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed italic">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary mb-4 italic">Our Leadership</h2>
            <p className="text-slate-500">Meet the dedicated team shaping the future of Global Vision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {LEADERSHIP.map((lead, idx) => (
              <motion.div 
                key={lead.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="group"
              >
                <div className="relative mb-8 overflow-hidden rounded-[3rem] aspect-[4/5]">
                  <img src={lead.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={lead.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-1 italic">{lead.name}</h3>
                <p className="text-secondary font-black text-xs uppercase tracking-widest mb-4">{lead.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed italic">
                  {lead.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20">
              <h2 className="text-4xl font-bold text-primary mb-8 italic">Get in Touch</h2>
              <p className="text-slate-500 mb-12">Whether you're a prospective parent, a potential educator, or a community partner, we'd love to hear from you.</p>
              
              <div className="space-y-8">
                <ContactItem icon={<Mail />} title="Email Us" detail="admissions@globalvision.edu.kh" />
                <ContactItem icon={<Phone />} title="Call Us" detail="+855 23 456 789" />
                <ContactItem icon={<MapPin />} title="Visit Us" detail="No. 123, Diamond Island, Phnom Penh" />
              </div>
            </div>
            
            <div className="lg:w-1/2 relative bg-primary flex items-center justify-center p-20 text-center">
              <div className="absolute inset-0 opacity-20">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Campus map pattern" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6 italic">Ready to see for yourself?</h3>
                <p className="text-slate-300 mb-10">Schedule a 30-minute campus tour with our admissions team.</p>
                <button className="bg-secondary text-primary px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform active:scale-95">
                  Book a Campus Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary border border-slate-100 group-hover:bg-secondary group-hover:text-primary transition-all">
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">{title}</h4>
        <p className="text-lg font-bold text-primary italic">{detail}</p>
      </div>
    </div>
  );
}
