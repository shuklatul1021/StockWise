import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // Simulate API call
        if (email === 'demo@stockwise.com' && password === 'demo') {
          set({
            user: {
              id: '1',
              email,
              name: 'Demo User',
              role: 'admin'
            },
            isAuthenticated: true
          });
        } else {
          throw new Error('Invalid credentials');
        }
      },
      logout: () => set({ user: null, isAuthenticated: false })
    }),
    {
      name: 'auth-storage'
    }
  )
);