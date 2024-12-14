import { useAuth } from '@/lib/hooks/useAuth';
import { LandingPage } from '@/pages/landing';
import { Dashboard } from '@/pages/dashboard';

export function Routes() {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <LandingPage />;
  }
  
  return <Dashboard />;
}