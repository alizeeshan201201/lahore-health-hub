import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Stethoscope } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const { t, isUrdu } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate auth
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: isLogin ? 'Welcome back!' : 'Account created!',
        description: isLogin ? 'You have successfully logged in.' : 'Please check your email to verify your account.',
      });
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
            <Stethoscope className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className={cn(
            'text-3xl font-bold text-foreground mb-1',
            isUrdu && 'font-urdu'
          )}>
            {t('appName')}
          </h1>
          <p className={cn(
            'text-muted-foreground',
            isUrdu && 'font-urdu'
          )}>
            {t('tagline')}
          </p>
        </div>

        <Card variant="glass" className="animate-slide-up">
          <CardContent className="p-6">
            <div className="flex mb-6 bg-secondary rounded-xl p-1">
              <button
                className={cn(
                  'flex-1 py-2.5 rounded-lg font-medium text-sm transition-all duration-200',
                  isLogin 
                    ? 'bg-card text-foreground shadow-sm' 
                    : 'text-muted-foreground',
                  isUrdu && 'font-urdu'
                )}
                onClick={() => setIsLogin(true)}
              >
                {t('login')}
              </button>
              <button
                className={cn(
                  'flex-1 py-2.5 rounded-lg font-medium text-sm transition-all duration-200',
                  !isLogin 
                    ? 'bg-card text-foreground shadow-sm' 
                    : 'text-muted-foreground',
                  isUrdu && 'font-urdu'
                )}
                onClick={() => setIsLogin(false)}
              >
                {t('signup')}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={isUrdu ? 'پورا نام' : 'Full Name'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={cn(
                      'w-full h-12 pl-10 pr-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary',
                      isUrdu && 'font-urdu text-right pr-10 pl-4'
                    )}
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder={t('email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={cn(
                    'w-full h-12 pl-10 pr-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary',
                    isUrdu && 'font-urdu text-right pr-10 pl-4'
                  )}
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('password')}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={cn(
                    'w-full h-12 pl-10 pr-12 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary',
                    isUrdu && 'font-urdu text-right pr-10 pl-12'
                  )}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {!isLogin && (
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={t('confirmPassword')}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className={cn(
                      'w-full h-12 pl-10 pr-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary',
                      isUrdu && 'font-urdu text-right pr-10 pl-4'
                    )}
                    required={!isLogin}
                  />
                </div>
              )}

              {isLogin && (
                <div className="text-right">
                  <button 
                    type="button" 
                    className={cn(
                      'text-sm text-primary font-medium hover:underline',
                      isUrdu && 'font-urdu'
                    )}
                  >
                    {t('forgotPassword')}
                  </button>
                </div>
              )}

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className={isUrdu ? 'font-urdu' : ''}>{t('loading')}</span>
                ) : (
                  <>
                    <span className={isUrdu ? 'font-urdu' : ''}>
                      {isLogin ? t('login') : t('createAccount')}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>

            <p className={cn(
              'text-center text-sm text-muted-foreground mt-6',
              isUrdu && 'font-urdu'
            )}>
              {isLogin ? t('dontHaveAccount') : t('alreadyHaveAccount')}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-semibold hover:underline"
              >
                {isLogin ? t('signup') : t('login')}
              </button>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
