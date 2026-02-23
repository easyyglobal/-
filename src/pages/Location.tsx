import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Car, Bus, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <div className="pt-32 pb-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            How to find us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-primary"
          >
            LOCATION
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
                <MapPin className="text-secondary" />
                Address
              </h2>
              <p className="text-primary/70 text-lg leading-relaxed">
                제주특별자치도 서귀포시 해안로 123-45 (법환동)<br />
                서귀포의 아름다운 해안도로변에 위치하고 있습니다.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 p-6 rounded-3xl bg-white/40 border border-primary/5">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <Car className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-primary">자가용 / 렌터카</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">
                    제주국제공항에서 약 50분 소요 (평화로 이용)<br />
                    네비게이션에 '메타리움' 또는 주소를 검색하세요.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-3xl bg-white/40 border border-primary/5">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <Bus className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-primary">대중교통</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">
                    공항 리무진 600번 탑승 후 '서귀포 월드컵경기장' 하차<br />
                    택시로 약 5분 거리입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/90 transition-colors">
                <Navigation className="w-4 h-4" /> 카카오맵 열기
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 border border-primary/10 text-primary rounded-xl text-sm font-bold hover:bg-white/40 transition-colors">
                <Navigation className="w-4 h-4" /> 네이버 지도 열기
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl relative"
          >
            {/* Placeholder for Map */}
            <img 
              src="https://picsum.photos/seed/map/1000/1000" 
              alt="Map" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-2 animate-bounce">
                <div className="w-4 h-4 bg-secondary rounded-full" />
                <span className="font-bold text-sm tracking-tighter text-white">METARIUM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Nearby Spots */}
        <section className="mt-32">
          <h2 className="text-2xl font-bold mb-12 text-center text-primary">Nearby Spots</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: '법환포구', dist: '도보 5분' },
              { name: '서귀포 월드컵경기장', dist: '차량 5분' },
              { name: '천지연폭포', dist: '차량 15분' },
              { name: '중문관광단지', dist: '차량 20분' }
            ].map(spot => (
              <div key={spot.name} className="bg-white/40 border border-primary/5 p-8 rounded-3xl text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2 text-primary">{spot.name}</h3>
                <p className="text-secondary text-sm font-medium">{spot.dist}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
