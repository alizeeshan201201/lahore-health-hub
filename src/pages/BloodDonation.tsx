import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { 
  Droplets, 
  Calendar, 
  Clock, 
  Award, 
  ChevronLeft,
  Search,
  MapPin,
  Phone,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const nearbyDonors = [
  { id: 1, name: 'Ali Raza', bloodGroup: 'O+', distance: '1.2 km', eligible: true, score: 95 },
  { id: 2, name: 'Sara Ahmed', bloodGroup: 'O+', distance: '2.4 km', eligible: true, score: 88 },
  { id: 3, name: 'Hassan Khan', bloodGroup: 'O+', distance: '3.1 km', eligible: false, score: 92 },
  { id: 4, name: 'Fatima Malik', bloodGroup: 'O-', distance: '3.8 km', eligible: true, score: 97 },
];

const BloodDonation = () => {
  const { t, isUrdu } = useLanguage();
  const { toast } = useToast();
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>('');
  const [showDonors, setShowDonors] = useState(false);

  // Mock user data
  const userBlood = {
    group: 'O+',
    lastDonation: new Date('2024-12-15'),
    nextEligible: new Date('2025-03-15'),
    donationsCount: 5,
    reliabilityScore: 92,
  };

  const isEligible = new Date() >= userBlood.nextEligible;
  const daysUntilEligible = Math.ceil((userBlood.nextEligible.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  const handleRegisterDonation = () => {
    if (!isEligible) {
      toast({
        title: isUrdu ? 'ابھی اہل نہیں' : 'Not Eligible Yet',
        description: isUrdu 
          ? `آپ ${daysUntilEligible} دنوں میں اہل ہوں گے` 
          : `You will be eligible in ${daysUntilEligible} days`,
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: isUrdu ? 'شکریہ!' : 'Thank you!',
      description: isUrdu 
        ? 'آپ کی رجسٹریشن کامیاب ہوگئی' 
        : 'Your donation has been registered',
    });
  };

  const handleFindDonors = () => {
    if (!selectedBloodGroup) {
      toast({
        title: isUrdu ? 'بلڈ گروپ منتخب کریں' : 'Select Blood Group',
        description: isUrdu 
          ? 'براہ کرم پہلے بلڈ گروپ منتخب کریں' 
          : 'Please select a blood group first',
        variant: 'destructive',
      });
      return;
    }
    setShowDonors(true);
  };

  return (
    <AppLayout>
      <div className="px-4 py-4 space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <Link to="/donate">
            <Button variant="ghost" size="icon-sm">
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className={cn(
            'text-xl font-bold text-foreground',
            isUrdu && 'font-urdu'
          )}>
            {t('bloodDonation')}
          </h1>
        </div>

        {/* My Status Card */}
        <Card variant="blood">
          <CardHeader className="pb-2">
            <CardTitle className={cn(
              'text-base flex items-center gap-2',
              isUrdu && 'font-urdu'
            )}>
              <Droplets className="w-5 h-5 text-blood" />
              {isUrdu ? 'میری حیثیت' : 'My Status'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl gradient-blood flex items-center justify-center">
                  <span className="text-xl font-bold text-blood-foreground">{userBlood.group}</span>
                </div>
                <div>
                  <p className={cn(
                    'font-semibold text-foreground',
                    isUrdu && 'font-urdu'
                  )}>
                    {t('bloodGroup')}
                  </p>
                  <div className="flex items-center gap-1 text-sm">
                    {isEligible ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className={cn('text-success', isUrdu && 'font-urdu')}>
                          {t('eligibleToDonate')}
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-muted-foreground" />
                        <span className={cn('text-muted-foreground', isUrdu && 'font-urdu')}>
                          {t('notEligible')}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span>{userBlood.reliabilityScore}%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-card/50 rounded-xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className={cn('text-xs', isUrdu && 'font-urdu')}>{t('lastDonation')}</span>
                </div>
                <p className="font-semibold text-foreground">
                  {userBlood.lastDonation.toLocaleDateString()}
                </p>
              </div>
              <div className="p-3 bg-card/50 rounded-xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Clock className="w-4 h-4" />
                  <span className={cn('text-xs', isUrdu && 'font-urdu')}>{t('nextEligible')}</span>
                </div>
                <p className={cn(
                  'font-semibold',
                  isEligible ? 'text-success' : 'text-foreground'
                )}>
                  {isEligible 
                    ? (isUrdu ? 'ابھی!' : 'Now!') 
                    : userBlood.nextEligible.toLocaleDateString()
                  }
                </p>
              </div>
            </div>

            <Button 
              variant="blood" 
              className="w-full"
              onClick={handleRegisterDonation}
              disabled={!isEligible}
            >
              <Droplets className="w-5 h-5" />
              <span className={isUrdu ? 'font-urdu' : ''}>
                {isUrdu ? 'عطیہ دیں' : 'Donate Now'}
              </span>
            </Button>
          </CardContent>
        </Card>

        {/* Find Donors */}
        <Card variant="glass">
          <CardHeader className="pb-2">
            <CardTitle className={cn(
              'text-base flex items-center gap-2',
              isUrdu && 'font-urdu'
            )}>
              <Search className="w-5 h-5 text-primary" />
              {t('findDonors')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className={cn(
                'text-sm text-muted-foreground mb-2',
                isUrdu && 'font-urdu'
              )}>
                {isUrdu ? 'مطلوبہ بلڈ گروپ منتخب کریں' : 'Select required blood group'}
              </p>
              <div className="grid grid-cols-4 gap-2">
                {bloodGroups.map((group) => (
                  <button
                    key={group}
                    onClick={() => setSelectedBloodGroup(group)}
                    className={cn(
                      'p-3 rounded-xl text-sm font-bold transition-all duration-200',
                      selectedBloodGroup === group
                        ? 'gradient-blood text-blood-foreground scale-105'
                        : 'bg-secondary text-foreground hover:bg-secondary/80'
                    )}
                  >
                    {group}
                  </button>
                ))}
              </div>
            </div>

            <Button 
              variant="default" 
              className="w-full"
              onClick={handleFindDonors}
            >
              <Search className="w-5 h-5" />
              <span className={isUrdu ? 'font-urdu' : ''}>{t('findDonors')}</span>
            </Button>

            {showDonors && (
              <div className="space-y-3 animate-fade-in">
                <p className={cn(
                  'text-sm font-medium text-foreground',
                  isUrdu && 'font-urdu'
                )}>
                  {isUrdu 
                    ? `${selectedBloodGroup} کے ${nearbyDonors.filter(d => d.eligible).length} اہل عطیہ دہندگان` 
                    : `${nearbyDonors.filter(d => d.eligible).length} eligible donors for ${selectedBloodGroup}`
                  }
                </p>
                {nearbyDonors.map((donor) => (
                  <Card key={donor.id} variant="glass" className="overflow-hidden">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            'w-10 h-10 rounded-xl flex items-center justify-center',
                            donor.eligible ? 'gradient-blood' : 'bg-muted'
                          )}>
                            <span className="text-xs font-bold text-primary-foreground">
                              {donor.bloodGroup}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{donor.name}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {donor.distance}
                              </span>
                              <span className="flex items-center gap-1">
                                <Award className="w-3 h-3" />
                                {donor.score}%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {donor.eligible ? (
                            <Button variant="ghost" size="icon-sm">
                              <Phone className="w-4 h-4" />
                            </Button>
                          ) : (
                            <span className={cn(
                              'text-xs text-muted-foreground',
                              isUrdu && 'font-urdu'
                            )}>
                              {t('notEligible')}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default BloodDonation;
