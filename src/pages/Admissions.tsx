import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, Clock, Calendar, ShieldCheck, Users, Globe, Trophy, GraduationCap, MessageSquare, Mail, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import FAQ from "@/components/FAQ";

const STEPS = [
  { id: "parent", title: "Parent Info" },
  { id: "student", title: "Child Info" },
  { id: "program", title: "Program" },
  { id: "confirm", title: "Review" },
];

export default function Admissions() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    program: "primary",
    comments: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => phone.length >= 8;
  const validateName = (name: string) => name.length >= 3;

  const errors = {
    parentName: touched.parentName && !validateName(formData.parentName) ? "Name is too short" : undefined,
    email: touched.email && !validateEmail(formData.email) ? "Invalid email address" : undefined,
    phone: touched.phone && !validatePhone(formData.phone) ? "Phone number too short" : undefined,
    childName: touched.childName && !validateName(formData.childName) ? "Name is too short" : undefined,
    childAge: touched.childAge && (!formData.childAge || parseInt(formData.childAge) < 2) ? "Invalid age" : undefined,
  };

  const isStepValid = () => {
    if (currentStep === 0) return validateName(formData.parentName) && validateEmail(formData.email) && validatePhone(formData.phone);
    if (currentStep === 1) return validateName(formData.childName) && formData.childAge !== "" && parseInt(formData.childAge) >= 2;
    if (currentStep === 2) return formData.program !== "";
    return true;
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === STEPS.length - 1) {
      setSubmitted(true);
    } else {
      nextStep();
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-3xl shadow-2xl text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">Application Received!</h2>
          <p className="text-slate-600 mb-8">
            Thank you, {formData.parentName}. Our admissions officer will contact you within 24 hours to schedule a campus visit.
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="w-full bg-primary text-white py-4 rounded-full font-bold hover:shadow-lg transition-all"
          >
            Back to Homepage
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Side: Progress & Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h1 className="text-4xl font-bold text-primary mb-4 italic">Start Your Journey</h1>
              <p className="text-slate-600 mb-10">Only 4 steps away from joining our thriving community.</p>

              <div className="space-y-8">
                {STEPS.map((step, idx) => (
                  <div key={step.id} className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold transition-all",
                      currentStep === idx ? "bg-primary border-primary text-white scale-110 shadow-lg" : 
                      currentStep > idx ? "bg-green-500 border-green-500 text-white" : "border-slate-300 text-slate-400"
                    )}>
                      {currentStep > idx ? <CheckCircle2 className="w-6 h-6" /> : idx + 1}
                    </div>
                    <div>
                      <p className={cn(
                        "text-sm font-bold uppercase tracking-wider",
                        currentStep === idx ? "text-primary" : "text-slate-400"
                      )}>{step.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-6 bg-secondary/10 rounded-2xl border border-secondary/20">
                <div className="flex items-center gap-2 text-secondary font-bold mb-2">
                  <Clock className="w-5 h-5" />
                  <span>Limited Enrollment</span>
                </div>
                <p className="text-sm text-slate-700">
                  <span className="font-bold">2026-27 Intake:</span> Only a few seats remaining for Grade 1 and Grade 6. Priority is given to early applicants.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-2">
            {/* Horizontal Step Indicator (Desktop) */}
            <div className="mb-14 px-4 hidden md:block">
              <div className="relative flex justify-between items-center">
                {/* Background track */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2" />
                
                {/* Active track progress */}
                <motion.div 
                  className="absolute top-1/2 left-0 h-[3px] bg-secondary -translate-y-1/2 origin-left shadow-[0_0_10px_rgba(197,160,89,0.5)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: currentStep / (STEPS.length - 1) }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: '100%' }}
                />

                {STEPS.map((step, idx) => (
                  <div key={step.id} className="relative z-10 flex flex-col items-center">
                    <motion.div
                      animate={{
                        scale: currentStep === idx ? 1.15 : 1,
                        backgroundColor: currentStep >= idx ? "#C5A059" : "#F8FAFC",
                        borderColor: currentStep >= idx ? "#C5A059" : "#E2E8F0"
                      }}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 relative",
                        currentStep === idx ? "shadow-[0_0_20px_rgba(197,160,89,0.4)]" : ""
                      )}
                    >
                      {/* Pulse Effect for current step */}
                      {currentStep === idx && (
                        <motion.div 
                          className="absolute inset-0 rounded-full border-2 border-secondary"
                          initial={{ scale: 1, opacity: 0.5 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}

                      {currentStep > idx ? (
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      ) : (
                        <span className={cn(
                          "text-sm font-bold",
                          currentStep >= idx ? "text-primary" : "text-slate-400"
                        )}>
                          {idx + 1}
                        </span>
                      )}
                    </motion.div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className={cn(
                        "text-[10px] font-black uppercase tracking-widest",
                        currentStep === idx ? "text-primary" : currentStep > idx ? "text-slate-500" : "text-slate-300"
                      )}>
                        {step.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Progress Bar (Simplified) */}
            <div className="mb-10 px-4 md:hidden">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                  Step {currentStep + 1} <span className="text-slate-300 ml-1">of {STEPS.length}</span>
                </span>
                <span className="text-[10px] font-black text-secondary uppercase tracking-widest italic">
                  {STEPS[currentStep].title}
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                  className="h-full bg-secondary shadow-[0_0_10px_rgba(197,160,89,0.3)]"
                />
              </div>
            </div>

            <motion.form 
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
              layout
            >
              {/* Detailed Progress Stats */}
              <div className="mb-10 flex items-end justify-between border-b border-slate-50 pb-6">
                <div>
                  <h3 className="text-xl font-bold text-primary italic mb-1">
                    {STEPS[currentStep].title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">Please provide the required details below.</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-secondary leading-none italic">
                    {Math.round(((currentStep + 1) / STEPS.length) * 100)}%
                  </span>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-300 mt-1">Complete</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentStep === 0 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-primary mb-6">Parent / Guardian Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputGroup 
                          label="Full Name" 
                          value={formData.parentName} 
                          onChange={v => setFormData({...formData, parentName: v})}
                          onBlur={() => setTouched({...touched, parentName: true})}
                          placeholder="e.g. John Doe"
                          error={errors.parentName}
                          success={touched.parentName && validateName(formData.parentName)}
                        />
                        <InputGroup 
                          label="Email Address" 
                          type="email" 
                          value={formData.email} 
                          onChange={v => setFormData({...formData, email: v})}
                          onBlur={() => setTouched({...touched, email: true})}
                          placeholder="name@example.com"
                          error={errors.email}
                          success={touched.email && validateEmail(formData.email)}
                        />
                      </div>
                      <InputGroup 
                        label="Phone Number" 
                        type="tel" 
                        value={formData.phone} 
                        onChange={v => setFormData({...formData, phone: v})}
                        onBlur={() => setTouched({...touched, phone: true})}
                        placeholder="+855 ..."
                        error={errors.phone}
                        success={touched.phone && validatePhone(formData.phone)}
                      />
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-primary mb-6">Student Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputGroup 
                          label="Child's Full Name" 
                          value={formData.childName} 
                          onChange={v => setFormData({...formData, childName: v})}
                          onBlur={() => setTouched({...touched, childName: true})}
                          placeholder="e.g. Jane Doe"
                          error={errors.childName}
                          success={touched.childName && validateName(formData.childName)}
                        />
                        <InputGroup 
                          label="Child's Age" 
                          type="number" 
                          value={formData.childAge} 
                          onChange={v => setFormData({...formData, childAge: v})}
                          onBlur={() => setTouched({...touched, childAge: true})}
                          placeholder="Age as of August 2026"
                          error={errors.childAge}
                          success={touched.childAge && parseInt(formData.childAge) >= 2}
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-primary mb-6">Program Selection</h2>
                      <p className="text-sm text-slate-500 mb-4">Which academic path are you interested in?</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['Early Years', 'Primary', 'Secondary'].map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setFormData({...formData, program: p.toLowerCase()})}
                            className={cn(
                              "p-4 rounded-2xl border-2 text-left transition-all",
                              formData.program === p.toLowerCase() ? "border-primary bg-primary/5 text-primary" : "border-slate-100 hover:border-slate-200"
                            )}
                          >
                            <span className="font-bold block">{p}</span>
                            <span className="text-xs opacity-60">View Curriculum</span>
                          </button>
                        ))}
                      </div>
                      <div className="mt-6">
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-sm font-bold text-slate-700">Additional Comments</label>
                          <span className={cn(
                            "text-[10px] font-bold uppercase tracking-widest",
                            formData.comments.length > 500 ? "text-red-500" : "text-slate-400"
                          )}>
                            {formData.comments.length} / 500
                          </span>
                        </div>
                        <textarea 
                          rows={4}
                          maxLength={500}
                          value={formData.comments}
                          onChange={(e) => setFormData({...formData, comments: e.target.value})}
                          className="w-full bg-slate-50 border-2 border-transparent rounded-xl p-4 focus:ring-4 focus:ring-primary/5 focus:border-primary/20 focus:bg-white transition-all outline-none text-sm placeholder:italic"
                          placeholder="Tell us about your child's interests, special needs, or any questions you have..."
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-primary mb-6">Review Application</h2>
                      <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                        <SummaryRow label="Parent Name" value={formData.parentName} />
                        <SummaryRow label="Email" value={formData.email} />
                        <SummaryRow label="Child Name" value={formData.childName} />
                        <SummaryRow label="Inquiring For" value={formData.program.toUpperCase()} />
                      </div>
                      <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-xl text-sm italic">
                        <ShieldCheck className="w-5 h-5 shrink-0" />
                        <span>Your data is secure and will only be used for admission purposes.</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 font-bold text-slate-400 hover:text-primary transition-colors disabled:opacity-0"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!isStepValid()}
                  className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2 disabled:opacity-50 disabled:grayscale disabled:scale-100"
                >
                  {currentStep === STEPS.length - 1 ? "Submit Inquiry" : "Continue"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.form>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100 text-primary">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Campus Tours</h4>
                  <p className="text-sm text-slate-500">Available every Tuesday & Thursday at 10:00 AM.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100 text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Join a webinar</h4>
                  <p className="text-sm text-slate-500">Monthly session for international parents.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-secondary font-black text-xs uppercase tracking-[0.3em] mb-4 block">The Global Vision Advantage</span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 italic leading-tight">
                  Why Choose <br />
                  <span className="text-secondary">Global Vision International Academy?</span>
                </h2>
                <p className="text-slate-600 mb-10 text-lg leading-relaxed italic">
                  "Our admissions process is the first step in a lifelong partnership. We don't just enroll students; we welcome families into a culture of excellence."
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                      <ShieldCheck className="w-6 h-6 text-secondary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Accredited Excellence</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">Fully authorized IB World School maintaining the highest global academic standards.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <GraduationCap className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">University Success</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">98% of our graduates transition to top-tier universities worldwide including Ivy League.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-3/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AdmissionBenefitCard 
                  img="https://images.unsplash.com/photo-1544333346-64e4fe186dd0?auto=format&fit=crop&q=80&w=800"
                  icon={<Globe className="w-6 h-6" />}
                  title="Global Curriculum" 
                  description="IB and AP pathways that foster critical thinking and international citizenship." 
                />
                <AdmissionBenefitCard 
                  img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  icon={<Users className="w-6 h-6" />}
                  title="Experienced Faculty" 
                  description="85% of our international teachers hold Master's degrees in their specialized fields." 
                />
                <AdmissionBenefitCard 
                  img="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                  icon={<Heart className="w-6 h-6" />}
                  title="Diverse Community" 
                  description="A vibrant tapestry of cultures with students from over 25+ nationalities." 
                />
                <AdmissionBenefitCard 
                  img="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
                  icon={<GraduationCap className="w-6 h-6" />}
                  title="State-of-the-Art Labs" 
                  description="Olympic-grade sports facilities, digital fabrication labs, and modern performance arts studios." 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Campus map pattern" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-8 text-secondary border border-secondary/30 backdrop-blur-sm">
              <MessageSquare className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 italic">Still have questions?</h2>
            <p className="text-slate-300 text-xl mb-12 italic leading-relaxed">
              Our admissions team is available for a one-on-one call or campus tour to discuss your child's specific needs and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:admissions@globalvision.edu.kh" 
                className="bg-secondary text-primary px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 hover:bg-white transition-all flex items-center justify-center gap-3 group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Contact Admissions
              </a>
              <button 
                className="bg-white/5 text-white border-2 border-white/20 px-12 py-5 rounded-full font-bold text-lg backdrop-blur-sm hover:bg-white hover:text-primary transition-all active:scale-95"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Review the Form
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function AdmissionBenefitCard({ img, icon, title, description }: { img: string, icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative h-[300px] rounded-[2.5rem] overflow-hidden shadow-xl"
    >
      <img src={img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 italic">{title}</h3>
        <p className="text-sm text-slate-300 leading-relaxed italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function InputGroup({ label, type = "text", value, onChange, onBlur, placeholder, error, success }: { label: string, type?: string, value: string, onChange: (v: string) => void, onBlur?: () => void, placeholder: string, error?: string, success?: boolean }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-bold text-slate-700">{label}</label>
        <AnimatePresence mode="wait">
          {error ? (
            <motion.span 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-[10px] uppercase font-bold text-red-500 tracking-wider flex items-center gap-1"
            >
              <XCircle className="w-3 h-3" />
              {error}
            </motion.span>
          ) : success ? (
            <motion.span 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-[10px] uppercase font-bold text-green-500 tracking-wider flex items-center gap-1"
            >
              <CheckCircle2 className="w-3 h-3" />
              Valid
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>
      <div className="relative">
        <input 
          required
          type={type}
          value={value}
          onBlur={onBlur}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full bg-slate-50 border-2 rounded-xl p-4 focus:ring-4 transition-all duration-200 outline-none text-sm",
            error ? "border-red-100 focus:border-red-400 focus:ring-red-100 bg-red-50/10" : 
            success ? "border-green-100 focus:border-green-400 focus:ring-green-100 bg-green-50/30" : 
            "border-transparent focus:border-primary/20 focus:ring-primary/5 focus:bg-white"
          )}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
          <AnimatePresence mode="wait">
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                key="success"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                key="error"
              >
                <XCircle className="w-5 h-5 text-red-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-xs text-red-500 font-medium italic"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-3 last:border-0 last:pb-0">
      <span className="text-slate-400 uppercase tracking-tight font-bold text-[10px]">{label}</span>
      <span className="font-bold text-primary">{value || "Not provided"}</span>
    </div>
  );
}


