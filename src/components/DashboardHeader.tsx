import { Building2 } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg gradient-primary">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">HDFC Analytics Dashboard</h1>
            <p className="text-xs text-muted-foreground">Unified Campaign Intelligence</p>
          </div>
        </div>
      </div>
    </header>
  );
};
