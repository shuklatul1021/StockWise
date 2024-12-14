import { ThemeProvider } from '@/components/theme-provider';
import { Routes } from '@/routes';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="stockwise-theme">
      <Routes />
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}

export default App;