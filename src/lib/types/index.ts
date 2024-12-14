export interface Product {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  minStockLevel: number;
  price: number;
  supplierId: string;
  batchNumber?: string;
  expiryDate?: Date;
  warehouseId: string;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Warehouse {
  id: string;
  name: string;
  location: string;
  capacity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'staff';
}