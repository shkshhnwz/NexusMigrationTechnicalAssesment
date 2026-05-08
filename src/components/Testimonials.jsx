import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Ahmed Hassan",
      visa: "Canada PR Visa",
      text: "Nexus Migration made my Canadian PR dream a reality. Special thanks to Ishara for the continuous support and flawless documentation process.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      visa: "Australia Work Visa",
      text: "The team is incredibly professional. They handled my complex case with ease and kept me updated at every step. Highly recommended!",
      rating: 5
    },
    {
      name: "Raj Patel",
      visa: "Europe Schengen Visa",
      text: "Fast, reliable, and transparent. I received my visa much earlier than expected thanks to their expert guidance.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-[#001024] relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#002147]/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-1 bg-[#c5a059]"></div>
            <h4 className="text-[#c5a059] font-bold tracking-[0.2em] uppercase text-sm">Testimonials</h4>
            <div className="w-12 h-1 bg-[#c5a059]"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            What Our <span className="text-[#c5a059]">Clients Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl relative group hover:bg-white/10 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-[#c5a059]/20 w-16 h-16 transform -rotate-12 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#c5a059] text-[#c5a059]" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c5a059] to-[#8a6e35] flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <span className="text-[#c5a059] text-xs font-semibold tracking-wider uppercase">{review.visa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
