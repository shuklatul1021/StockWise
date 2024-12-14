import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { DataTable } from '@/components/products/data-table';
import { ProductDialog } from '@/components/products/product-dialog';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';

export function ProductsPage() {
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Products</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-10 w-[300px]" />
            </div>
            <Button variant="outline" size="icon">
              <FilterIcon className="h-4 w-4" />
            </Button>
          </div>
          <Button onClick={() => setShowAddProduct(true)}>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      <Card className="p-6">
        <DataTable />
      </Card>

      <ProductDialog open={showAddProduct} onOpenChange={setShowAddProduct} />
    </div>
  );
}