import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'ROOMS', path: '/rooms' },
  { name: 'EXPERIENCE', path: '/experience' },
  { name: 'LOCATION', path: '/location' },
  { name: 'RESERVATION', path: '/reservation' },
];

export default function Header() {
  const { isScrolled } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6',
        isScrolled || !isHome ? 'bg-background/80 backdrop-blur-md border-b border-primary/5 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className={cn(
            'text-2xl font-bold tracking-tighter transition-colors duration-500',
            isScrolled || !isHome ? 'text-primary' : 'text-white'
          )}
        >
          METARIUM
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-medium tracking-widest transition-colors duration-300 hover:opacity-70',
                isScrolled || !isHome ? 'text-primary' : 'text-white'
              )}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://booking.naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-300',
              isScrolled || !isHome 
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'glass text-white hover:bg-white/20'
            )}
          >
            BOOK NOW
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={cn(isScrolled || !isHome ? 'text-primary' : 'text-white')} />
          ) : (
            <Menu className={cn(isScrolled || !isHome ? 'text-primary' : 'text-white')} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-background border-b border-primary/5 shadow-xl py-8 px-6 md:hidden flex flex-col space-y-6 items-center"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-primary tracking-widest"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://booking.naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-primary text-white py-4 rounded-xl font-bold tracking-widest"
          >
            NAVER BOOKING
          </a>
        </motion.div>
      )}
    </header>
  );
}
