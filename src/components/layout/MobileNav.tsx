import { Link, useLocation } from 'react-router-dom';
import { Home, Heart, Stethoscope, Building2, BookOpen, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const navItems = [
  { path: '/', icon: Home, labelKey: 'home' as const },
  { path: '/donate', icon: Heart, labelKey: 'donate' as const },
  { path: '/symptoms', icon: Stethoscope, labelKey: 'symptoms' as const },
  { path: '/hospitals', icon: Building2, labelKey: 'hospitals' as const },
  { path: '/awareness', icon: BookOpen, labelKey: 'awareness' as const },
  { path: '/profile', icon: User, labelKey: 'profile' as const },
];

export function MobileNav() {
  const location = useLocation();
  const { t, isUrdu } = useLanguage();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t safe-bottom">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map(({ path, icon: Icon, labelKey }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                'flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 touch-target',
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              <Icon className={cn('w-5 h-5', isActive && 'scale-110')} />
              <span className={cn(
                'text-[10px] font-medium',
                isUrdu && 'font-urdu'
              )}>
                {t(labelKey)}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
