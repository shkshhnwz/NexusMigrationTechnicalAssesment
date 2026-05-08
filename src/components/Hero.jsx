import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center pt-32 lg:pt-24 pb-16">
      {/* Background Image with subtle scale animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea4a73a88d4?q=80&w=2070&auto=format&fit=crop')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#002147]/95 via-[#002147]/90 md:via-[#002147]/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-center md:text-left"
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#c5a059] font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm"
            >
              #1 Immigration Firm in Dubai, UAE
            </motion.h4>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] mb-6">
              Immigration Like <br className="hidden sm:block" />
              <span className="text-[#c5a059]">Never Before.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 md:mb-10 leading-relaxed font-light max-w-lg mx-auto md:mx-0"
            >
              Get expert guidance and support for your immigration needs from our experienced agents.
              We provide personalized assistance and advice
              to streamline your immigration process and maximize your chances of success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button className="bg-[#c5a059] hover:bg-white hover:text-[#002147] px-8 py-4 rounded-sm font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.4)]">
                Start Your Journey
              </button>
              <button className="border border-white/50 hover:bg-white/10 px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest transition-all">
                Our Services
              </button>
            </motion.div>
          </motion.div>

          {/* Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/20 rounded-full blur-3xl -z-10"></div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Free Consultation</h3>
            <p className="text-gray-300 mb-6 font-light text-sm">Fill out the form below and our experts will contact you shortly.</p>
            
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all" />
              </div>
              <div>
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all" />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all" />
              </div>
              <div>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all appearance-none cursor-pointer">
                  <option value="" className="text-gray-900">Select Visa Service</option>
                  <option value="canada" className="text-gray-900">Canada PR</option>
                  <option value="australia" className="text-gray-900">Australia PR</option>
                  <option value="europe" className="text-gray-900">Europe Work Visa</option>
                </select>
              </div>
              <button type="button" className="w-full bg-[#002147] text-white border border-[#c5a059] hover:bg-[#c5a059] py-4 rounded-lg font-bold uppercase tracking-widest text-sm transition-colors shadow-lg mt-2">
                Get Free Assessment
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;