import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, AlertCircle, RefreshCcw } from 'lucide-react';

export default function Reservation() {
  return (
    <div className="pt-32 pb-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <header className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Booking Information
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-primary"
          >
            RESERVATION
          </motion.h1>
        </header>

        <div className="space-y-12">
          {/* Check-in/out */}
          <section className="bg-white/40 border border-primary/5 p-8 md:p-12 rounded-[2.5rem] grid grid-cols-1 md:grid-cols-2 gap-8 shadow-sm">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary">Check-in</h3>
                <p className="text-primary/60">PM 15:00</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary">Check-out</h3>
                <p className="text-primary/60">AM 11:00</p>
              </div>
            </div>
          </section>

          {/* Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="space-y-6 p-8 rounded-3xl bg-white/40 border border-primary/5">
              <h3 className="text-xl font-bold flex items-center gap-2 text-primary">
                <AlertCircle className="text-accent w-5 h-5" />
                이용 안내
              </h3>
              <ul className="space-y-4 text-primary/60 text-sm leading-relaxed">
                <li>• 전 객실 금연 구역입니다. (지정된 장소 이용)</li>
                <li>• 반려동물 동반 입실은 불가합니다.</li>
                <li>• 밤 10시 이후에는 타 객실 손님을 위해 정숙 부탁드립니다.</li>
                <li>• 시설물 파손 시 실비 변상이 청구될 수 있습니다.</li>
              </ul>
            </section>

            <section className="space-y-6 p-8 rounded-3xl bg-white/40 border border-primary/5">
              <h3 className="text-xl font-bold flex items-center gap-2 text-primary">
                <RefreshCcw className="text-accent w-5 h-5" />
                환불 규정
              </h3>
              <ul className="space-y-4 text-primary/60 text-sm leading-relaxed">
                <li>• 이용 10일 전: 100% 환불</li>
                <li>• 이용 7일 전: 70% 환불</li>
                <li>• 이용 5일 전: 50% 환불</li>
                <li>• 이용 3일 전 ~ 당일: 환불 불가</li>
              </ul>
            </section>
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative p-12 rounded-[3rem] text-center text-white space-y-8 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <img src="https://picsum.photos/seed/res-cta/1200/800" alt="CTA" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" />
            </div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl font-bold">지금 바로 예약을 진행하세요</h2>
              <p className="text-white/70">네이버 예약을 통해 실시간 예약 현황을 확인하고 간편하게 예약할 수 있습니다.</p>
              <a
                href="https://booking.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent text-white px-12 py-5 rounded-full font-bold text-xl tracking-widest hover:bg-accent/90 transition-all duration-300 shadow-2xl"
              >
                <Calendar className="w-6 h-6" />
                네이버 예약하기
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
