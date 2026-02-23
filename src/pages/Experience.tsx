import React from 'react';
import { motion } from 'motion/react';

export default function Experience() {
  const moments = [
    {
      title: 'Morning Coffee',
      desc: '창밖으로 펼쳐지는 윤슬을 바라보며 즐기는 여유로운 아침의 커피 한 잔.',
      image: 'https://picsum.photos/seed/coffee/800/800'
    },
    {
      title: 'Sunset Moment',
      desc: '하늘과 바다가 붉게 물드는 시간, 테라스에서 마주하는 서귀포의 가장 아름다운 찰나.',
      image: 'https://picsum.photos/seed/sunset/800/800'
    },
    {
      title: 'Deep Rest',
      desc: '파도 소리를 자장가 삼아 잠드는 밤, 온전한 비움이 선사하는 깊은 휴식.',
      image: 'https://picsum.photos/seed/rest/800/800'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Stay & Experience
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-primary mb-8"
          >
            EXPERIENCE
          </motion.h1>
          <p className="text-primary/60 text-lg leading-relaxed">
            메타리움은 단순한 숙박을 넘어, 당신의 제주 여행이 하나의 감각적인 경험이 되기를 바랍니다. 
            공간이 주는 영감과 자연이 주는 위로를 통해 일상의 에너지를 충전하세요.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 rounded-[2.5rem] bg-white/40 border border-primary/5 hover:bg-white/60 transition-colors"
            >
              <div className="aspect-square overflow-hidden rounded-3xl mb-8 shadow-lg">
                <img 
                  src={moment.image} 
                  alt={moment.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{moment.title}</h3>
              <p className="text-primary/60 leading-relaxed">{moment.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Full Width Mood Section */}
        <section className="mt-32 relative h-[60vh] rounded-[3rem] overflow-hidden flex items-center justify-center text-center px-6">
          <img 
            src="https://picsum.photos/seed/mood/1600/900" 
            alt="Mood" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 italic">"The ocean stirs the heart, inspires the imagination and brings eternal joy to the soul."</h2>
            <p className="text-accent tracking-widest uppercase text-sm font-bold">- Robert Wyland -</p>
          </div>
        </section>
      </div>
    </div>
  );
}
