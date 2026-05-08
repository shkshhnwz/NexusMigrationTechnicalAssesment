import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AboutSummary = () => {
  return (
    <section className="py-24 bg-white text-[#002147]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-[#c5a059]"></div>
              <h4 className="text-[#c5a059] font-bold tracking-[0.2em] uppercase text-sm">About Us</h4>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Expert Agents for your <br/>
              <span className="text-[#c5a059]">Immigration Needs.</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We provide high-quality immigration services and consultations. With years of experience in security, citizenship applications, and comprehensive IELTS support, our dedicated team ensures your transition is seamless and successful.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Certified and experienced immigration consultants",
                "Personalized visa strategies for families and individuals",
                "End-to-end support including IELTS preparation",
                "High success rate for Permanent Residency"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#c5a059] w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-[#002147] text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-[#c5a059] transition-all shadow-lg">
              Read More About Us
            </button>
          </motion.div>
          
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#c5a059] rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
              alt="Immigration Consultation" 
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
            
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4">
              <div className="text-5xl font-extrabold text-[#c5a059]">7+</div>
              <div className="text-sm font-bold text-[#002147] uppercase tracking-widest leading-snug">
                Years of <br/> Experience
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
