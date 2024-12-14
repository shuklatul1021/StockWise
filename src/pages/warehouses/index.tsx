import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { PlusIcon, PackageIcon } from 'lucide-react';

export function WarehousesPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Warehouses</h1>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Warehouse
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <PackageIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Warehouse {i}</h3>
                  <p className="text-sm text-muted-foreground">Location {i}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">View</Button>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Capacity Usage</span>
                <span className="font-medium">{i * 20}%</span>
              </div>
              <Progress value={i * 20} />
            </div>
            <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Items</p>
                <p className="text-lg font-semibold">{i * 1000}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Categories</p>
                <p className="text-lg font-semibold">{i * 5}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}