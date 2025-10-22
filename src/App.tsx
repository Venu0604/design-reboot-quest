import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GoogleSummary from "./pages/GoogleSummary";
import CampaignAnalysis from "./pages/CampaignAnalysis";
import StatusAnalysis from "./pages/StatusAnalysis";
import MISUpload from "./pages/MISUpload";
import PhoneNumbers from "./pages/PhoneNumbers";
import SQLConsole from "./pages/SQLConsole";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/google-summary" element={<GoogleSummary />} />
          <Route path="/campaign-analysis" element={<CampaignAnalysis />} />
          <Route path="/status-analysis" element={<StatusAnalysis />} />
          <Route path="/mis-upload" element={<MISUpload />} />
          <Route path="/phone-numbers" element={<PhoneNumbers />} />
          <Route path="/sql-console" element={<SQLConsole />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
