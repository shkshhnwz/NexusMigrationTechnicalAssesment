import { motion } from 'framer-motion';

const Statistics = () => {
  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "4000+", label: "ITA Received" },
    { value: "95%", label: "Success Rate" },
    { value: "12000+", label: "Clients Served" }
  ];

  return (
    <section className="py-20 relative bg-[#002147] border-y-4 border-[#c5a059]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-fixed opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#c5a059] mb-3 drop-shadow-[0_0_15px_rgba(197,160,89,0.5)]">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-bold text-white uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
