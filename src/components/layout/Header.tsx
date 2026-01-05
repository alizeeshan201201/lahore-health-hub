import { Bell, Settings, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function Header() {
  const { t, language, setLanguage, isUrdu } = useLanguage();

  return (
    <header className="sticky top-0 z-40 glass-card border-b safe-top">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow-sm">
            <span className="text-lg font-bold text-primary-foreground">L</span>
          </div>
          <div>
            <h1 className={cn(
              'text-lg font-bold text-foreground',
              isUrdu && 'font-urdu'
            )}>
              {t('appName')}
            </h1>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span className={isUrdu ? 'font-urdu' : ''}>{t('lahore')}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
            className="text-xs font-medium px-2"
          >
            {language === 'en' ? 'اردو' : 'EN'}
          </Button>
          <Button variant="ghost" size="icon-sm" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-emergency text-emergency-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon-sm" asChild>
            <a href="/settings">
              <Settings className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
