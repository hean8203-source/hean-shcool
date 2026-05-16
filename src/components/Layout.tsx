import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { GraduationCap, ArrowRight } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "glass border-b border-slate-200 py-2" : "bg-transparent border-b border-transparent py-4"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-serif text-xl font-bold group-hover:rotate-6 transition-transform">G</div>
              <span className="font-serif text-xl font-bold text-primary hidden sm:block">Global Vision</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <Link to="/" className={cn("hover:text-primary transition-colors", location.pathname === "/" && "text-primary font-bold")}>Home</Link>
              <Link to="/programs" className={cn("hover:text-primary transition-colors", location.pathname === "/programs" && "text-primary font-bold")}>Programs</Link>
              <Link to="/admissions" className={cn("hover:text-primary transition-colors", location.pathname === "/admissions" && "text-primary font-bold")}>Admissions</Link>
              <Link to="/faq" className={cn("hover:text-primary transition-colors", location.pathname === "/faq" && "text-primary font-bold")}>FAQ</Link>
              <Link to="/about" className={cn("hover:text-primary transition-colors", location.pathname === "/about" && "text-primary font-bold")}>About</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link 
                to="/admissions" 
                className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-secondary hover:text-primary transition-all shadow-lg active:scale-95 flex items-center gap-2"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Mobile Floating Action Button */}
      <div className="md:hidden fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-full px-6">
        <Link 
          to="/admissions"
          className="w-full bg-secondary text-primary py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 font-bold text-lg active:scale-95 transition-all"
        >
          <GraduationCap className="w-6 h-6" />
          Enroll My Child
        </Link>
      </div>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center text-primary font-serif text-lg font-bold">G</div>
                <span className="font-serif text-xl font-bold text-white">Global Vision Academy</span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-slate-400 italic">
                "Developing the heart and mind for a changing world."
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/programs" className="hover:text-white transition-colors">Academic Programs</Link></li>
                <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions Process</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Our School</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>No. 123, Street 456</li>
                <li>Phnom Penh, Cambodia</li>
                <li>info@globalvision.edu</li>
                <li>+855 23 456 789</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between gap-4">
            <p>&copy; 2026 Global Vision International Academy. Empowered by Gemini AI.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
