import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/metarium-hero/1920/1080?blur=1"
          alt="Jeju Ocean View"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-white/80 text-sm md:text-base font-medium tracking-[0.3em] mb-4"
        >
          SEOGWIPO, JEJU
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight text-balance"
        >
          바다와 마주한<br />온전한 쉼, 메타리움
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://booking.naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-accent text-white px-8 py-4 rounded-full font-bold tracking-widest flex items-center gap-2 hover:bg-accent/90 transition-all duration-300 shadow-xl"
          >
            네이버 예약하기
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/rooms"
            className="text-white/90 px-8 py-4 rounded-full font-medium tracking-widest border border-white/20 hover:bg-white/5 transition-all duration-300"
          >
            객실 둘러보기
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
