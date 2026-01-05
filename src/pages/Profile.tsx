import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { 
  User, 
  Droplets, 
  Heart, 
  Wallet, 
  Settings, 
  ChevronRight, 
  LogOut,
  Bell,
  Shield,
  Languages,
  Calendar,
  Award
} from 'lucide-react';

const Profile = () => {
  const { t, language, setLanguage, isUrdu } = useLanguage();

  // Mock user data
  const user = {
    name: 'Ahmed Khan',
    nameUr: 'احمد خان',
    email: 'ahmed.khan@email.com',
    phone: '+92 300 1234567',
    bloodGroup: 'O+',
    donationsCount: 5,
    reliabilityScore: 92,
    memberSince: 'Jan 2024',
    organPledges: ['Kidney', 'Liver (partial)'],
    totalDonated: 'PKR 25,000',
  };

  const menuItems = [
    { icon: Bell, label: isUrdu ? 'اطلاعات' : 'Notifications', badge: 3 },
    { icon: Shield, label: isUrdu ? 'رازداری اور سیکیورٹی' : 'Privacy & Security' },
    { icon: Languages, label: isUrdu ? 'زبان' : 'Language', value: language === 'ur' ? 'اردو' : 'English' },
    { icon: Settings, label: isUrdu ? 'سیٹنگز' : 'Settings' },
  ];

  return (
    <AppLayout>
      <div className="px-4 py-4 space-y-4">
        {/* Profile Header */}
        <Card variant="glass">
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h1 className={cn(
                  'text-xl font-bold text-foreground',
                  isUrdu && 'font-urdu'
                )}>
                  {language === 'ur' ? user.nameUr : user.name}
                </h1>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-blood/10 text-blood text-xs font-bold rounded-lg flex items-center gap-1">
                    <Droplets className="w-3 h-3" />
                    {user.bloodGroup}
                  </span>
                  <span className="px-2 py-1 bg-success/10 text-success text-xs font-medium rounded-lg flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {user.reliabilityScore}%
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Donation Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card variant="blood">
            <CardContent className="p-3 text-center">
              <Droplets className="w-6 h-6 text-blood mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">{user.donationsCount}</p>
              <p className={cn(
                'text-[10px] text-muted-foreground',
                isUrdu && 'font-urdu'
              )}>
                {t('bloodDonation')}
              </p>
            </CardContent>
          </Card>
          <Card variant="organ">
            <CardContent className="p-3 text-center">
              <Heart className="w-6 h-6 text-organ mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">{user.organPledges.length}</p>
              <p className={cn(
                'text-[10px] text-muted-foreground',
                isUrdu && 'font-urdu'
              )}>
                {t('myPledges')}
              </p>
            </CardContent>
          </Card>
          <Card variant="money">
            <CardContent className="p-3 text-center">
              <Wallet className="w-6 h-6 text-money mx-auto mb-1" />
              <p className="text-sm font-bold text-foreground">{user.totalDonated.replace('PKR ', '')}</p>
              <p className={cn(
                'text-[10px] text-muted-foreground',
                isUrdu && 'font-urdu'
              )}>
                {t('totalDonated')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Blood Donation Info */}
        <Card variant="glass">
          <CardHeader className="pb-2">
            <CardTitle className={cn(
              'text-base flex items-center gap-2',
              isUrdu && 'font-urdu'
            )}>
              <Droplets className="w-5 h-5 text-blood" />
              {t('bloodDonation')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className={cn('text-sm text-muted-foreground', isUrdu && 'font-urdu')}>
                {t('lastDonation')}
              </span>
              <span className="text-sm font-medium text-foreground flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Dec 15, 2024
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className={cn('text-sm text-muted-foreground', isUrdu && 'font-urdu')}>
                {t('nextEligible')}
              </span>
              <span className="text-sm font-medium text-success">Mar 15, 2025</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={cn('text-sm text-muted-foreground', isUrdu && 'font-urdu')}>
                {t('reliabilityScore')}
              </span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-success rounded-full"
                    style={{ width: `${user.reliabilityScore}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-success">{user.reliabilityScore}%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <Card variant="glass">
          <CardContent className="p-0">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className={cn(
                    'w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors',
                    index !== menuItems.length - 1 && 'border-b border-border/50'
                  )}
                  onClick={() => {
                    if (item.label.includes('Language') || item.label.includes('زبان')) {
                      setLanguage(language === 'en' ? 'ur' : 'en');
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                    <span className={cn(
                      'font-medium text-foreground',
                      isUrdu && 'font-urdu'
                    )}>
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="w-5 h-5 bg-emergency text-emergency-foreground text-xs font-bold rounded-full flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                    {item.value && (
                      <span className={cn(
                        'text-sm text-muted-foreground',
                        isUrdu && 'font-urdu'
                      )}>
                        {item.value}
                      </span>
                    )}
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </button>
              );
            })}
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Button variant="outline" className="w-full text-destructive border-destructive/30 hover:bg-destructive/10">
          <LogOut className="w-5 h-5 mr-2" />
          <span className={isUrdu ? 'font-urdu' : ''}>{t('logout')}</span>
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Member since {user.memberSince} • v1.0.0
        </p>
      </div>
    </AppLayout>
  );
};

export default Profile;
