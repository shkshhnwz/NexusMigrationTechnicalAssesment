import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    ChevronRight
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logoImg from '../assets/Logo.webp';

const Footer = () => {
    // Pulling exact colors from Navbar/Hero
    const navy = "#002147";
    const gold = "#c5a059";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <footer className="relative text-white pt-32 pb-8 mt-24 font-sans border-t-[6px]" style={{ borderColor: gold, background: `linear-gradient(to bottom, ${navy}, #001024)` }}>

            {/* Floating Modern Contact Bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-6xl bg-white rounded-2xl shadow-2xl py-8 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8 z-20 text-[#002147] border-b-4" style={{ borderColor: gold }}>
                <div className="flex items-center gap-5 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-10 w-full md:w-auto justify-center md:justify-start">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#c5a059]/10 shadow-inner">
                        <Phone style={{ color: gold }} className="w-6 h-6 flex-shrink-0" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone Number</span>
                        <span className="font-extrabold text-lg">+971 4 295 0122</span>
                    </div>
                </div>

                <div className="flex items-center gap-5 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-10 w-full md:w-auto justify-center md:justify-start">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#c5a059]/10 shadow-inner">
                        <Mail style={{ color: gold }} className="w-6 h-6 flex-shrink-0" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Address</span>
                        <span className="font-extrabold text-lg">info@nexusmigration.com</span>
                    </div>
                </div>

                <div className="flex items-center gap-5 w-full md:w-auto justify-center md:justify-start">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#c5a059]/10 shadow-inner">
                        <MapPin style={{ color: gold }} className="w-6 h-6 flex-shrink-0" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Location</span>
                        <span className="font-bold text-sm max-w-[200px] leading-relaxed text-gray-700">Office 103, 1st Floor, Al Makhawi Building, Near Oud Metha Metro Station, Oud Metha, Dubai, UAE</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* Column 1: About & Logo */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <img src={logoImg} alt="Nexus Migration Logo" className="w-52 mb-8 brightness-0 invert drop-shadow-md" />
                        <p className="text-sm text-gray-300 leading-relaxed mb-8 font-light">
                            Nexus Migration is a premier immigration firm based in Dubai, UAE, delivering seamless residency solutions and bringing over 7+ years of global expertise.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[
                                { Icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/nexusimmigrationuae/" },
                                { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/nexus_migration_dxb?igsh=bXRxb3BtMWZhb3Rj" },
                                { Icon: FaTwitter, label: "Twitter", href: "https://x.com/i/flow/login?redirect_after_login=%2FMigrationNexus" },
                                { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/company/nexus-migration-dxb/" },
                                { Icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/channel/UCx-VhbLG6JLbgfuvvtvVCgw" }
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#c5a059] hover:border-[#c5a059] hover:scale-110 transition-all duration-300 shadow-lg">
                                    <social.Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 2: Quick Links */}
                    <motion.div variants={itemVariants} className="flex flex-col lg:pl-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-1 h-6 rounded-full" style={{ backgroundColor: gold }}></div>
                            <h3 className="text-xl font-bold tracking-wide">Who We Are</h3>
                        </div>
                        <ul className="space-y-4">
                            {['About Us', 'Contact Us', 'News & Blog', 'Our Team'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="group text-gray-300 hover:text-white transition-colors flex items-center gap-3 text-sm font-medium">
                                        <span className="w-6 h-6 rounded-full bg-white/5 group-hover:bg-[#c5a059] flex items-center justify-center transition-all duration-300">
                                            <ChevronRight size={14} className="text-[#c5a059] group-hover:text-white transition-colors" />
                                        </span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Services */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-1 h-6 rounded-full" style={{ backgroundColor: gold }}></div>
                            <h3 className="text-xl font-bold tracking-wide">Services</h3>
                        </div>
                        <ul className="space-y-4 mb-10">
                            {[
                                'Canada Permanent Residency Visa',
                                'Australia Permanent Residency Visa',
                                'New Zealand Accredited Employer Work Visa'
                            ].map((link) => (
                                <li key={link}>
                                    <a href="#" className="group text-gray-300 hover:text-white transition-colors flex items-start gap-3 text-sm font-medium leading-relaxed">
                                        <span className="w-6 h-6 rounded-full bg-white/5 group-hover:bg-[#c5a059] flex items-center justify-center transition-all duration-300 shrink-0 mt-0.5">
                                            <ChevronRight size={14} className="text-[#c5a059] group-hover:text-white transition-colors" />
                                        </span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 4: Contact Us Glass Card */}
                    <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative shadow-2xl hover:bg-white/10 transition-colors duration-500">
                        {/* Subtle glow effect behind the card */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-1 h-6 rounded-full" style={{ backgroundColor: gold }}></div>
                            <h3 className="text-xl font-bold tracking-wide">Get In Touch</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#c5a059]/20 flex items-center justify-center shrink-0">
                                    <Phone size={16} style={{ color: gold }} />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">Call Us</span>
                                    <span className="text-sm font-semibold text-white tracking-wide">+971 4 295 0122</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#c5a059]/20 flex items-center justify-center shrink-0">
                                    <Mail size={16} style={{ color: gold }} />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">Email Us</span>
                                    <span className="text-sm font-semibold text-white tracking-wide break-all">info@nexusmigration.com</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#c5a059]/20 flex items-center justify-center shrink-0">
                                    <MapPin size={16} style={{ color: gold }} />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">Visit Us</span>
                                    <span className="text-sm font-medium text-gray-300 leading-relaxed">
                                        Office 103, 1st Floor, Al Makhawi Building, Near Oud Metha Metro Station, Oud Metha, Dubai, UAE
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <div className="text-sm text-gray-400 font-light">
                        © 2026 Nexus Immigration. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-400 font-light">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </motion.div>
            </div>

            {/* Floating action buttons */}
            <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
                <a href="tel:+97144558488" className="w-14 h-14 bg-white text-[#002147] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform group">
                    <Phone size={24} className="group-hover:animate-pulse" />
                </a>
                <a href="https://wa.me/+971505286482" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform group">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
