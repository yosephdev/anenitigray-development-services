
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import AboutADS from "./pages/AboutADS";
import DungoEnergy from "./pages/DungoEnergy";
import Project from "./pages/Project";
import YouthEmployment from "./pages/YouthEmployment";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Programs from "./pages/Programs";
import IntegratedChildCare from "./pages/IntegratedChildCare";
import AssetProgram from "./pages/AssetProgram";
import RapidRelief from "./pages/RapidRelief";
import CapacityBuilding from "./pages/CapacityBuilding";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from './pages/TermsAndConditions';
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-ads" element={<AboutADS />} />
              <Route path="/dungo-energy" element={<DungoEnergy />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/integrated-child-care" element={<IntegratedChildCare />} />
              <Route path="/programs/asset-program" element={<AssetProgram />} />
              <Route path="/programs/rapid-relief" element={<RapidRelief />} />
              <Route path="/programs/capacity-building" element={<CapacityBuilding />} />
              <Route path="/project" element={<Project />} />
              <Route path="/youth-employment" element={<YouthEmployment />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
