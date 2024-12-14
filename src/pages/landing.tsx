import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LoginForm } from '@/components/auth/login-form';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { BoxIcon, BarChart3Icon, AlertCircleIcon, ScanLineIcon, WarehouseIcon, SparklesIcon } from 'lucide-react';

export function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-zinc-800">
      <div className="absolute inset-0 bg-grid-zinc-900/[0.04] dark:bg-grid-zinc-100/[0.03]" />
      <div className="relative">
        <nav className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 opacity-75 blur" />
                <div className="relative flex items-center space-x-2 rounded-lg bg-zinc-950 px-4 py-2">
                  <BoxIcon className="h-6 w-6 text-blue-500" />
                  <span className="font-bold text-white">StockFlow</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" className="text-zinc-700 dark:text-zinc-300">Features</Button>
              <Button variant="ghost" className="text-zinc-700 dark:text-zinc-300">Solutions</Button>
              <Button variant="ghost" className="text-zinc-700 dark:text-zinc-300">Pricing</Button>
              <Button 
                onClick={() => setShowLogin(true)}
                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700"
              >
                Sign In
              </Button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 pt-20 pb-32">
          <div className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <SparklesIcon className="h-16 w-16 text-blue-500 animate-pulse" />
            </div>
            <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500 mb-8">
              Inventory Management
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                Reimagined
              </span>
            </h1>
            <p className="text-center text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
              Experience the future of inventory control with AI-powered insights, 
              real-time tracking, and seamless integration across your entire supply chain.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                onClick={() => setShowLogin(true)}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-zinc-300 dark:border-zinc-700"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            Powerful Features for Modern Business
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<ScanLineIcon className="h-8 w-8" />}
              title="Smart Scanning"
              description="Advanced barcode and QR code scanning with real-time inventory updates."
            />
            <FeatureCard 
              icon={<AlertCircleIcon className="h-8 w-8" />}
              title="Predictive Alerts"
              description="AI-powered stock predictions and automated reordering suggestions."
            />
            <FeatureCard 
              icon={<BarChart3Icon className="h-8 w-8" />}
              title="Analytics"
              description="Deep insights into inventory trends, costs, and optimization opportunities."
            />
            <FeatureCard 
              icon={<WarehouseIcon className="h-8 w-8" />}
              title="Multi-Location"
              description="Seamless management across warehouses with smart stock distribution."
            />
          </div>
        </div>
      </section>

      <Dialog open={showLogin} onOpenChange={setShowLogin}>
        <DialogContent className="sm:max-w-md">
          <LoginForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-50 blur transition duration-200" />
      <div className="relative h-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm transition duration-200 hover:shadow-lg">
        <div className="text-blue-500 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
    </div>
  );
}