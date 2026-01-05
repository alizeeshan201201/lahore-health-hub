import { Link } from 'react-router-dom';
import { Droplets, Heart, Wallet, Stethoscope, Building2, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const actions = [
  { 
    path: '/donate/blood', 
    icon: Droplets, 
    labelKey: 'bloodDonation' as const, 
    color: 'blood',
    gradient: 'gradient-blood'
  },
  { 
    path: '/donate/organ', 
    icon: Heart, 
    labelKey: 'organDonation' as const, 
    color: 'organ',
    gradient: 'gradient-organ'
  },
  { 
    path: '/donate/money', 
    icon: Wallet, 
    labelKey: 'moneyDonation' as const, 
    color: 'money',
    gradient: 'gradient-money'
  },
  { 
    path: '/symptoms', 
    icon: Stethoscope, 
    labelKey: 'checkSymptoms' as const, 
    color: 'primary',
    gradient: 'gradient-primary'
  },
  { 
    path: '/hospitals', 
    icon: Building2, 
    labelKey: 'nearbyHospitals' as const, 
    color: 'primary',
    gradient: 'gradient-primary'
  },
  { 
    path: '/awareness', 
    icon: BookOpen, 
    labelKey: 'healthTips' as const, 
    color: 'primary',
    gradient: 'gradient-primary'
  },
];

export function QuickActions() {
  const { t, isUrdu } = useLanguage();

  return (
    <div className="grid grid-cols-3 gap-3 stagger-children">
      {actions.map(({ path, icon: Icon, labelKey, gradient }) => (
        <Link
          key={path}
          to={path}
          className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-card border border-border/50 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] hover:border-primary/30 active:scale-[0.98]"
        >
          <div className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110',
            gradient
          )}>
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className={cn(
            'text-xs font-medium text-center text-foreground leading-tight',
            isUrdu && 'font-urdu'
          )}>
            {t(labelKey)}
          </span>
        </Link>
      ))}
    </div>
  );
}
