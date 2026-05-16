import FAQ from "@/components/FAQ";
import { motion } from "motion/react";
import { Search } from "lucide-react";

export default function FAQPage() {
  return (
    <div className="bg-paper min-h-screen">
      <div className="bg-primary py-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 italic">Help Center</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Find answers to common questions about admissions, academics, and student life at Global Vision.
          </p>
          
          <div className="mt-12 max-w-xl mx-auto relative px-4">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for a topic (e.g. 'fees', 'curriculum')..."
              className="w-full bg-white rounded-full py-4 pl-14 pr-6 text-slate-900 border-none shadow-2xl focus:ring-4 focus:ring-secondary/20 transition-all outline-none"
            />
          </div>
        </motion.div>
      </div>

      <div className="py-12">
        <FAQ />
      </div>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Still Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50">
              <h4 className="font-bold text-primary mb-2">Admissions Office</h4>
              <p className="text-sm text-slate-500">admissions@globalvision.edu</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border-2 border-secondary/20">
              <h4 className="font-bold text-primary mb-2">Call Us</h4>
              <p className="text-sm text-slate-500">+855 23 456 789</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50">
              <h4 className="font-bold text-primary mb-2">Campus Visit</h4>
              <p className="text-sm text-slate-500">Scheduled Tours Only</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
