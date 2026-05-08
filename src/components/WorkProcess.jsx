import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Send, Clock, CheckCircle } from 'lucide-react';

const WorkProcess = () => {
  const steps = [
    { icon: <ClipboardCheck size={28} />, title: "Assessment", desc: "Evaluate your profile and eligibility for the right visa program." },
    { icon: <FileText size={28} />, title: "Documentation", desc: "Gather and prepare all necessary documents accurately." },
    { icon: <Send size={28} />, title: "Filing", desc: "Submit your application securely to the respective authorities." },
    { icon: <Clock size={28} />, title: "Processing", desc: "Continuous tracking and updates during the processing phase." },
    { icon: <CheckCircle size={28} />, title: "Approval", desc: "Receive your visa and start your exciting new journey." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-1 bg-[#c5a059]"></div>
            <h4 className="text-[#c5a059] font-bold tracking-[0.2em] uppercase text-sm">How It Works</h4>
            <div className="w-12 h-1 bg-[#c5a059]"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-[#002147]"
          >
            Visa Approved in <span className="text-[#c5a059]">5 Simple Steps</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Horizontal Line connecting steps (visible on md+) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Number Badge */}
                <div className="w-8 h-8 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-sm mb-4 border-2 border-white shadow-md relative z-20 group-hover:bg-[#c5a059] transition-colors">
                  {idx + 1}
                </div>
                
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-white border-[3px] border-[#c5a059] flex items-center justify-center text-[#002147] mb-6 shadow-[0_0_15px_rgba(197,160,89,0.3)] group-hover:scale-110 group-hover:bg-[#c5a059] group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#002147] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkProcess;
