import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '@/pages/dashboard';
import { ProductsPage } from '@/pages/products';
import { SuppliersPage } from '@/pages/suppliers';
import { WarehousesPage } from '@/pages/warehouses';
import { ReportsPage } from '@/pages/reports';
import { Layout } from '@/components/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'suppliers', element: <SuppliersPage /> },
      { path: 'warehouses', element: <WarehousesPage /> },
      { path: 'reports', element: <ReportsPage /> },
    ],
  },
]);