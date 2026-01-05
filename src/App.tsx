import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Donate from "./pages/Donate";
import BloodDonation from "./pages/BloodDonation";
import OrganDonation from "./pages/OrganDonation";
import MoneyDonation from "./pages/MoneyDonation";
import Symptoms from "./pages/Symptoms";
import Hospitals from "./pages/Hospitals";
import Awareness from "./pages/Awareness";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/donate/blood" element={<BloodDonation />} />
            <Route path="/donate/organ" element={<OrganDonation />} />
            <Route path="/donate/money" element={<MoneyDonation />} />
            <Route path="/symptoms" element={<Symptoms />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
