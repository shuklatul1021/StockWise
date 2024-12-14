import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/hooks/useAuth';
import {
  BoxesIcon,
  TruckIcon,
  BarChart3Icon,
  WarehouseIcon,
  UsersIcon,
  LogOutIcon,
} from 'lucide-react';

export function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-card">
      <div className="flex items-center space-x-2 p-6 border-b">
        <BoxesIcon className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold">Stockwise</span>
      </div>
      <nav className="p-4 space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <BoxesIcon className="mr-2 h-4 w-4" />
          Products
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <TruckIcon className="mr-2 h-4 w-4" />
          Suppliers
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <WarehouseIcon className="mr-2 h-4 w-4" />
          Warehouses
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <BarChart3Icon className="mr-2 h-4 w-4" />
          Reports
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <UsersIcon className="mr-2 h-4 w-4" />
          Users
        </Button>
        <div className="pt-4 border-t mt-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600"
            onClick={logout}
          >
            <LogOutIcon className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </nav>
    </aside>
  );
}