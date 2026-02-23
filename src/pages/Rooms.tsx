import React from 'react';
import { motion } from 'motion/react';

export default function Rooms() {
  const roomTypes = [
    {
      id: 'ocean-suite',
      name: 'Ocean Suite',
      desc: '서귀포의 푸른 바다를 가장 가까이서 마주하는 최상위 객실',
      features: ['킹 사이즈 베드', '파노라마 오션뷰', '프라이빗 테라스', '프리미엄 어메니티'],
      image: 'https://picsum.photos/seed/suite/1200/800'
    },
    {
      id: 'garden-terrace',
      name: 'Garden Terrace',
      desc: '자연의 싱그러움과 바다의 청량함이 공존하는 공간',
      features: ['퀸 사이즈 베드', '가든 뷰 & 오션뷰', '야외 테라스', '미니멀 인테리어'],
      image: 'https://picsum.photos/seed/garden/1200/800'
    },
    {
      id: 'standard-double',
      name: 'Standard Double',
      desc: '합리적인 가격으로 즐기는 메타리움만의 감성 스테이',
      features: ['더블 베드', '부분 오션뷰', '모던 데스크', '스마트 TV'],
      image: 'https://picsum.photos/seed/standard/1200/800'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Our Spaces
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-primary"
          >
            ROOMS
          </motion.h1>
        </header>

        <div className="space-y-32">
          {roomTypes.map((room, index) => (
            <motion.section 
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-3/5">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/5 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{room.name}</h2>
                <p className="text-primary/60 text-lg leading-relaxed">{room.desc}</p>
                <div className="pt-4 p-8 rounded-3xl bg-white/40 border border-primary/5">
                  <h4 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Amenities</h4>
                  <ul className="grid grid-cols-2 gap-y-3">
                    {room.features.map(feature => (
                      <li key={feature} className="text-primary/70 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8">
                  <a
                    href="https://booking.naver.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-primary text-white rounded-full font-bold tracking-widest hover:bg-primary/90 transition-colors shadow-lg"
                  >
                    RESERVE NOW
                  </a>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
