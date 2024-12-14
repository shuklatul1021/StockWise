import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { PlusIcon, SearchIcon, FilterIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';

export function SuppliersPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Suppliers</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search suppliers..." className="pl-10 w-[300px]" />
            </div>
            <Button variant="outline" size="icon">
              <FilterIcon className="h-4 w-4" />
            </Button>
          </div>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Supplier
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">Supplier {i}</h3>
                <p className="text-sm text-muted-foreground">ID: SUP-00{i}</p>
              </div>
              <Button variant="ghost" size="sm">•••</Button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <PhoneIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center text-sm">
                <MailIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>supplier{i}@example.com</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPinIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>123 Business Street, City</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}