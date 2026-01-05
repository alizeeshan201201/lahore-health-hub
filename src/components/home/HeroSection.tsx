import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Stethoscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  const { t, isUrdu } = useLanguage();

  return (
    <div className="relative overflow-hidden rounded-3xl gradient-hero border border-border/50 p-6 mb-6">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className={cn(
              'text-2xl font-bold text-foreground mb-2',
              isUrdu && 'font-urdu text-right'
            )}>
              {t('tagline')}
            </h2>
            <p className={cn(
              'text-muted-foreground text-sm mb-4',
              isUrdu && 'font-urdu text-right'
            )}>
              {isUrdu 
                ? 'لاہور کی صحت کی دیکھ بھال کا مکمل ماحولیاتی نظام'
                : "Lahore's complete healthcare ecosystem"
              }
            </p>
          </div>
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow animate-float">
            <Stethoscope className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        <Link to="/symptoms">
          <Button variant="hero" size="lg" className="w-full group">
            <span className={isUrdu ? 'font-urdu' : ''}>{t('checkSymptoms')}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
