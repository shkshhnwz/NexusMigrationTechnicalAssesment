import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const NewsBlogs = () => {
  const posts = [
    {
      title: "Latest Express Entry Draw Results 2026",
      category: "Canada Immigration",
      date: "May 10, 2026",
      author: "Nexus Team",
      image: "https://images.unsplash.com/photo-1552858725-2758b5fb1286?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Australia Opens New Pathways for Skilled Workers",
      category: "Australia Visa",
      date: "May 08, 2026",
      author: "Nexus Team",
      image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1933&auto=format&fit=crop"
    },
    {
      title: "How to Ace Your IELTS for Permanent Residency",
      category: "Preparation Guide",
      date: "May 05, 2026",
      author: "Nexus Team",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-1 bg-[#c5a059]"></div>
              <h4 className="text-[#c5a059] font-bold tracking-[0.2em] uppercase text-sm">News & Updates</h4>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold text-[#002147]"
            >
              Our Latest <span className="text-[#c5a059]">Insights</span>
            </motion.h2>
          </div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300"
          >
            View All Posts
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer"
            >
              <div className="h-60 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-[#c5a059] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded z-10">
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#c5a059]" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={14} className="text-[#c5a059]" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#002147] mb-6 group-hover:text-[#c5a059] transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <div className="flex items-center gap-2 text-[#c5a059] font-bold text-sm uppercase tracking-wider">
                  Read Article <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsBlogs;
