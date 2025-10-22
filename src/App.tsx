import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
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
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <SidebarInset>
              <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4">
                <SidebarTrigger />
                <h1 className="text-lg font-semibold">HDFC Unified Analytics Dashboard</h1>
              </header>
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
            </SidebarInset>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
