import { DashboardHeader } from "@/components/DashboardHeader";
import { ModuleCard } from "@/components/ModuleCard";
import { 
  TrendingUp, 
  Upload, 
  Phone, 
  Terminal, 
  BarChart3, 
  Target,
  Activity
} from "lucide-react";

const Index = () => {
  const modules = [
    {
      title: "Google Ads Summary",
      description: "Process and analyze Google Ads campaigns with MIS data integration",
      icon: TrendingUp,
      href: "/google-summary"
    },
    {
      title: "Campaign Analysis",
      description: "Analyze campaign performance across multiple channels with cost tracking",
      icon: Target,
      href: "/campaign-analysis"
    },
    {
      title: "Status Analysis",
      description: "Track final decision counts with creation and decision date filters",
      icon: BarChart3,
      href: "/status-analysis"
    },
    {
      title: "MIS Upload",
      description: "Upload and manage MIS data from Excel/CSV files to database",
      icon: Upload,
      href: "/mis-upload"
    },
    {
      title: "Phone Numbers",
      description: "Extract and map phone numbers from campaign data using LC2 codes",
      icon: Phone,
      href: "/phone-numbers"
    },
    {
      title: "SQL Console",
      description: "Execute SQL queries and export data directly from the database",
      icon: Terminal,
      href: "/sql-console"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Analytics Modules</h2>
          </div>
          <p className="text-muted-foreground">
            Select a module to access campaign analytics, data processing, and reporting tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {modules.map((module, index) => (
            <div
              key={module.href}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in"
            >
              <ModuleCard {...module} />
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-card border border-border animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">System Status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground">Database: Connected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground">Analytics Engine: Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground">Data Pipeline: Running</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
