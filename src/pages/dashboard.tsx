import { Sidebar } from '@/components/layout/sidebar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  BoxesIcon, 
  TruckIcon, 
  AlertCircleIcon, 
  PlusIcon,
  SearchIcon,
  PackageIcon
} from 'lucide-react';
import { Input } from '@/components/ui/input';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search inventory..." 
                className="pl-10 w-64"
              />
            </div>
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatsCard 
            title="Total Products"
            value="2,547"
            icon={<BoxesIcon className="h-4 w-4" />}
          />
          <StatsCard 
            title="Low Stock Items"
            value="12"
            icon={<AlertCircleIcon className="h-4 w-4" />}
            variant="warning"
          />
          <StatsCard 
            title="Active Suppliers"
            value="86"
            icon={<TruckIcon className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <PackageIcon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">New stock arrived</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Low Stock Alerts</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-orange-500/10 rounded-full">
                      <AlertCircleIcon className="h-4 w-4 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Product Name {i}</p>
                      <p className="text-xs text-muted-foreground">5 units remaining</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Reorder
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

function StatsCard({ 
  title, 
  value, 
  icon, 
  variant = 'default' 
}: { 
  title: string;
  value: string;
  icon: React.ReactNode;
  variant?: 'default' | 'warning';
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">{title}</span>
        <span className={`${
          variant === 'warning' ? 'text-orange-500' : 'text-primary'
        }`}>
          {icon}
        </span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </Card>
  );
}