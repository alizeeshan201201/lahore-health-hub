import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { MapPin, Clock, Phone, Navigation, Star, Filter, Search, Building2 } from 'lucide-react';

const hospitals = [
  {
    id: 1,
    nameEn: 'Shaukat Khanum Memorial Hospital',
    nameUr: 'شوکت خانم میموریل ہسپتال',
    specialtiesEn: ['Oncology', 'General Surgery', 'Radiology'],
    specialtiesUr: ['کینسر', 'جنرل سرجری', 'ریڈیولوجی'],
    distance: '2.3 km',
    travelTime: '8 min',
    rating: 4.8,
    phone: '+92-42-35905000',
    verified: true,
    emergency: true,
  },
  {
    id: 2,
    nameEn: 'Services Hospital Lahore',
    nameUr: 'سروسز ہسپتال لاہور',
    specialtiesEn: ['Emergency', 'Cardiology', 'Neurology'],
    specialtiesUr: ['ایمرجنسی', 'دل کے امراض', 'اعصابی امراض'],
    distance: '3.1 km',
    travelTime: '12 min',
    rating: 4.5,
    phone: '+92-42-99203402',
    verified: true,
    emergency: true,
  },
  {
    id: 3,
    nameEn: 'Mayo Hospital',
    nameUr: 'میو ہسپتال',
    specialtiesEn: ['General Medicine', 'Orthopedics', 'ENT'],
    specialtiesUr: ['عمومی ادویات', 'ہڈیوں کے امراض', 'ناک کان گلا'],
    distance: '4.5 km',
    travelTime: '18 min',
    rating: 4.3,
    phone: '+92-42-99211137',
    verified: true,
    emergency: true,
  },
  {
    id: 4,
    nameEn: 'Jinnah Hospital',
    nameUr: 'جناح ہسپتال',
    specialtiesEn: ['Trauma', 'Burns', 'Plastic Surgery'],
    specialtiesUr: ['صدمہ', 'جلنے کا علاج', 'پلاسٹک سرجری'],
    distance: '5.2 km',
    travelTime: '22 min',
    rating: 4.2,
    phone: '+92-42-99231401',
    verified: true,
    emergency: true,
  },
  {
    id: 5,
    nameEn: 'Doctors Hospital',
    nameUr: 'ڈاکٹرز ہسپتال',
    specialtiesEn: ['Internal Medicine', 'Pediatrics', 'Dermatology'],
    specialtiesUr: ['داخلی ادویات', 'بچوں کے امراض', 'جلدی امراض'],
    distance: '6.8 km',
    travelTime: '25 min',
    rating: 4.6,
    phone: '+92-42-35302701',
    verified: true,
    emergency: false,
  },
];

const Hospitals = () => {
  const { t, language, isUrdu } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHospitals = hospitals.filter((hospital) => {
    const name = language === 'ur' ? hospital.nameUr : hospital.nameEn;
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleGetDirections = (hospital: typeof hospitals[0]) => {
    // Open Google Maps with hospital location
    const query = encodeURIComponent(hospital.nameEn + ' Lahore');
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <AppLayout>
      <div className="px-4 py-4 space-y-4">
        <div className={cn('text-center mb-2', isUrdu && 'font-urdu')}>
          <h1 className="text-2xl font-bold text-foreground mb-1">
            {t('nearbyHospitals')}
          </h1>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            <MapPin className="w-4 h-4" />
            {t('lahore')}
          </p>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isUrdu ? 'ہسپتال تلاش کریں...' : 'Search hospitals...'}
              className={cn(
                'w-full h-12 pl-10 pr-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary',
                isUrdu && 'font-urdu text-right pr-10 pl-4'
              )}
            />
          </div>
          <Button variant="secondary" size="icon" className="h-12 w-12">
            <Filter className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-3">
          {filteredHospitals.map((hospital) => (
            <Card key={hospital.id} variant="glass" className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={cn(
                        'font-bold text-foreground',
                        isUrdu && 'font-urdu'
                      )}>
                        {language === 'ur' ? hospital.nameUr : hospital.nameEn}
                      </h3>
                      {hospital.verified && (
                        <span className="px-2 py-0.5 bg-success/10 text-success text-[10px] font-medium rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-warning fill-warning" />
                        <span>{hospital.rating}</span>
                      </div>
                      {hospital.emergency && (
                        <span className="px-2 py-0.5 bg-emergency/10 text-emergency text-[10px] font-medium rounded-full">
                          24/7
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm font-medium text-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {hospital.distance}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {hospital.travelTime}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <p className={cn(
                    'text-xs text-muted-foreground mb-1',
                    isUrdu && 'font-urdu text-right'
                  )}>
                    {t('specialties')}:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {(language === 'ur' ? hospital.specialtiesUr : hospital.specialtiesEn).map((spec, i) => (
                      <span
                        key={i}
                        className={cn(
                          'px-2 py-1 bg-secondary text-foreground text-xs rounded-md',
                          isUrdu && 'font-urdu'
                        )}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleGetDirections(hospital)}
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    <span className={isUrdu ? 'font-urdu' : ''}>{t('getDirections')}</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCall(hospital.phone)}
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className={cn(
              'text-muted-foreground',
              isUrdu && 'font-urdu'
            )}>
              {t('noResults')}
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Hospitals;
