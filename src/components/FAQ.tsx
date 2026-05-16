import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "What is the application deadline for the 2026-27 academic year?",
    answer: "Applications are accepted on a rolling basis throughout the year. However, for the primary August intake, we strongly recommend submitting your application by March 15th. This ensures priority placement and allows sufficient time for assessments and uniform fitting."
  },
  {
    question: "Are there any entrance examinations for new students?",
    answer: "To ensure every student is placed in an environment where they can thrive, we conduct holistic assessments. Early Years applicants participate in a play-based observation, while Primary and Secondary students undergo age-appropriate evaluations in English Literacy and Mathematics."
  },
  {
    question: "How much are the tuition fees and enrollment costs?",
    answer: "Our tuition fees are tiered by grade level, typically ranging from $8,000 to $18,000 per annum. This covers all core academic materials. A one-time non-refundable enrollment fee is required upon acceptance. A full fee schedule is provided immediately upon your initial inquiry."
  },
  {
    question: "What extracurricular activities are available for students?",
    answer: "We offer a vibrant 'Beyond the Classroom' program with over 30 clubs, including Competitive Robotics, Model United Nations, Varsity Swimming, Khmer Arts, and Digital Design. These sessions run daily from 3:30 PM to 4:30 PM and are led by expert coaches."
  },
  {
    question: "Does the school provide a lunch or meal program?",
    answer: "Our 'Healthy Minds' cafeteria serves nutritious, chef-prepared meals daily. We offer a balanced menu that includes international and local options, with strict protocols for vegetarian, halal, and nut-allergy requirements. The meal plan can be subscribed to on a term-by-term basis."
  },
  {
    question: "Is there a school bus service available?",
    answer: "Yes, we operate a fleet of modern, air-conditioned buses covering all major residential districts in Phnom Penh. Each bus is equipped with real-time GPS tracking and is staffed by a dedicated bus monitor to ensure your child's safety from doorstep to campus."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4" />
            Support
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 italic">Common Questions</h2>
          <p className="text-slate-600">Everything you need to know about the admissions process and student life.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
          <h3 className="text-xl font-bold text-primary mb-2">Still have questions?</h3>
          <p className="text-slate-600 mb-6 font-serif">Our admissions team is available for a one-on-one call.</p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all active:scale-95">
            Contact Admissions
          </button>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden transition-all hover:border-secondary/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full p-6 text-left flex justify-between items-center transition-colors",
          isOpen ? "bg-primary/5" : "bg-white"
        )}
      >
        <span className="font-bold text-primary pr-8">{question}</span>
        <div className={cn(
          "w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-transform",
          isOpen ? "rotate-180 bg-primary border-primary text-white" : "rotate-0 text-slate-400"
        )}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 bg-white py-4 border-t border-slate-50">
              <p className="text-slate-600 leading-relaxed italic">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
