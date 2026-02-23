import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />

      {/* Concept Section */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-snug">
              복잡한 일상을 떠나 마주하는<br />영감의 공간
            </h2>
            <p className="text-primary/60 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              메타리움은 단순한 숙소를 넘어, 제주의 자연과 현대적인 감각이 어우러진 휴식의 미학을 제안합니다. 
              창밖으로 펼쳐지는 서귀포의 푸른 바다는 당신의 하루를 특별한 예술로 만듭니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-20">
              <div className="space-y-4 p-8 rounded-3xl bg-white/50 border border-primary/5">
                <span className="text-secondary font-bold text-sm tracking-widest">01</span>
                <h3 className="text-xl font-bold">Private View</h3>
                <p className="text-primary/60 text-sm leading-relaxed">전 객실에서 감상하는 파노라마 오션뷰. 누구에게도 방해받지 않는 당신만의 바다.</p>
              </div>
              <div className="space-y-4 p-8 rounded-3xl bg-white/50 border border-primary/5">
                <span className="text-secondary font-bold text-sm tracking-widest">02</span>
                <h3 className="text-xl font-bold">Minimal Design</h3>
                <p className="text-primary/60 text-sm leading-relaxed">여백의 미를 살린 인테리어. 시각적 편안함이 주는 깊은 휴식의 가치.</p>
              </div>
              <div className="space-y-4 p-8 rounded-3xl bg-white/50 border border-primary/5">
                <span className="text-secondary font-bold text-sm tracking-widest">03</span>
                <h3 className="text-xl font-bold">Inspiration</h3>
                <p className="text-primary/60 text-sm leading-relaxed">아침의 햇살과 저녁의 노을. 머무는 것만으로도 새로운 영감이 깨어나는 곳.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Room Teaser Section */}
      <section className="bg-secondary/10 py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-secondary font-bold tracking-[0.2em] text-sm mb-4 block uppercase">Our Spaces</span>
              <h2 className="text-4xl md:text-6xl font-bold text-primary">오직 당신만을 위한<br />제주의 시간</h2>
            </div>
            <Link to="/rooms" className="group flex items-center gap-2 text-primary font-bold tracking-widest hover:opacity-70 transition-opacity">
              VIEW ALL ROOMS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/room1/800/1000" 
                  alt="Ocean Suite" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ocean Suite</h3>
              <p className="text-primary/60">통창 너머로 쏟아지는 서귀포의 푸른 파도</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer md:mt-24"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/room2/800/1000" 
                  alt="Garden Terrace" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Garden Terrace</h3>
              <p className="text-primary/60">바다 내음과 숲의 향기가 공존하는 테라스</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 md:py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/exp/800/800" 
                alt="Experience" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 hidden md:block w-64 h-64 bg-secondary/20 rounded-3xl -z-10" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <span className="text-secondary font-bold tracking-[0.2em] text-sm uppercase">Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">시설이 아닌,<br />머무름의 경험을 담다</h2>
            <p className="text-primary/60 text-lg leading-relaxed">
              아침에 눈을 뜨면 마주하는 윤슬, 테라스에서 즐기는 따뜻한 커피 한 잔, 
              그리고 붉게 물드는 서귀포의 노을까지. 메타리움은 당신의 모든 순간이 
              하나의 작품이 되기를 바랍니다.
            </p>
            <Link to="/experience" className="inline-block px-8 py-4 bg-primary text-white rounded-full font-bold tracking-widest hover:bg-primary/90 transition-colors">
              EXPERIENCE MORE
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/cta/1920/1080" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">지금, 제주에서의<br />완벽한 휴식을 예약하세요</h2>
          <p className="text-white/70 text-lg mb-12">오픈 기념 특별 혜택과 함께 메타리움만의 감성을 경험해보세요.</p>
          <a
            href="https://booking.naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block glass text-white px-12 py-5 rounded-full font-bold text-xl tracking-widest hover:bg-white/20 transition-all duration-300 shadow-2xl"
          >
            네이버 예약하기
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white/50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-white text-2xl font-bold tracking-tighter">METARIUM</h3>
            <p className="text-sm leading-relaxed max-w-sm">
              제주특별자치도 서귀포시 해안로 123-45<br />
              대표번호: 064-123-4567 | 이메일: info@metarium.com
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/rooms" className="hover:text-white transition-colors">Rooms</Link></li>
              <li><Link to="/experience" className="hover:text-white transition-colors">Experience</Link></li>
              <li><Link to="/location" className="hover:text-white transition-colors">Location</Link></li>
              <li><Link to="/reservation" className="hover:text-white transition-colors">Reservation</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase">Social</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-[10px] tracking-widest uppercase flex flex-col md:flex-row justify-between gap-4">
          <span>© 2024 METARIUM JEJU. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
