import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Plane, GraduationCap } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      country: "Canada",
      title: "Permanent Residency",
      desc: "Express Entry, PNP Programs, and Family Sponsorship tailored for your Canadian dream.",
      icon: <Plane size={32} className="text-[#c5a059]" />,
      bgImg: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop"
    },
    {
      country: "Australia",
      title: "Skilled Worker Visa",
      desc: "Subclass 189, 190, and 491 visas. End-to-end processing for Australian immigration.",
      icon: <Globe2 size={32} className="text-[#c5a059]" />,
      bgImg: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop"
    },
    {
      country: "New Zealand",
      title: "Accredited Employer Work",
      desc: "Secure your pathway to New Zealand with expert employer work visa assistance.",
      icon: <Globe2 size={32} className="text-[#c5a059]" />,
      bgImg: "https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      country: "Europe",
      title: "Schengen & Work Visas",
      desc: "Unlock opportunities across Europe with our seamless visa processing services.",
      icon: <GraduationCap size={32} className="text-[#c5a059]" />,
      bgImg: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-1 bg-[#c5a059]"></div>
            <h4 className="text-[#c5a059] font-bold tracking-[0.2em] uppercase text-sm">Our Expertise</h4>
            <div className="w-12 h-1 bg-[#c5a059]"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-[#002147]"
          >
            Discover Our <span className="text-[#c5a059]">Visa Services</span>
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer h-full"
            >
              {/* Card Image */}
              <div className="h-48 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-[#002147]/40 group-hover:bg-[#002147]/20 transition-colors duration-300 z-10"></div>
                <img
                  src={service.bgImg}
                  alt={service.country}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-[#c5a059] font-bold tracking-widest uppercase text-xs mb-2">
                  {service.country}
                </div>
                <h3 className="text-xl font-extrabold text-[#002147] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#002147] font-bold text-sm uppercase tracking-wider group-hover:text-[#c5a059] transition-colors">
                  Explore <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesGrid;
