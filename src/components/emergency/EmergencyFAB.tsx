import { useState } from 'react';
import { AlertTriangle, Phone, MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function EmergencyFAB() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, isUrdu } = useLanguage();

  const handleEmergency = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  const handleCall = () => {
    window.location.href = 'tel:1122';
  };

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // In production, this would share with hospitals/contacts
          console.log('Location shared:', latitude, longitude);
          alert(`Location shared: ${latitude}, ${longitude}`);
        },
        (error) => {
          console.error('Location error:', error);
          alert('Unable to get location. Please enable location services.');
        }
      );
    }
  };

  if (isExpanded) {
    return (
      <div className="fixed inset-0 z-[100] bg-emergency/95 flex flex-col items-center justify-center p-6 animate-scale-in">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute top-4 right-4 text-emergency-foreground hover:bg-emergency-foreground/10"
        >
          <X className="w-6 h-6" />
        </Button>

        <div className="text-center mb-8">
          <AlertTriangle className="w-20 h-20 text-emergency-foreground mx-auto mb-4 animate-pulse" />
          <h2 className={cn(
            'text-3xl font-bold text-emergency-foreground mb-2',
            isUrdu && 'font-urdu'
          )}>
            {t('emergency')}
          </h2>
          <p className={cn(
            'text-emergency-foreground/80',
            isUrdu && 'font-urdu'
          )}>
            {t('preCareInstructions')}
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Button
            size="xl"
            onClick={handleCall}
            className="bg-emergency-foreground text-emergency hover:bg-emergency-foreground/90 flex items-center justify-center gap-3"
          >
            <Phone className="w-6 h-6" />
            <span className={cn('text-lg font-bold', isUrdu && 'font-urdu')}>
              Call 1122
            </span>
          </Button>

          <Button
            size="xl"
            onClick={handleShareLocation}
            className="bg-emergency-foreground/20 text-emergency-foreground hover:bg-emergency-foreground/30 flex items-center justify-center gap-3 border border-emergency-foreground/30"
          >
            <MapPin className="w-6 h-6" />
            <span className={cn('text-lg font-semibold', isUrdu && 'font-urdu')}>
              {t('shareLocation')}
            </span>
          </Button>
        </div>

        <p className={cn(
          'mt-8 text-sm text-emergency-foreground/60 text-center',
          isUrdu && 'font-urdu'
        )}>
          {t('medicalDisclaimer')}
        </p>
      </div>
    );
  }

  return (
    <button
      onClick={handleEmergency}
      className="fixed bottom-24 right-4 z-50 w-16 h-16 rounded-full gradient-emergency shadow-emergency flex items-center justify-center pulse-emergency transition-transform hover:scale-105 active:scale-95"
      aria-label="Emergency"
    >
      <AlertTriangle className="w-7 h-7 text-emergency-foreground" />
    </button>
  );
}
