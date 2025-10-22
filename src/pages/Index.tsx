import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, Clock, FileCheck, TrendingUp, Users } from "lucide-react";

const Index = () => {
  // Mock data for final status numbers - in production this would come from your database
  const statusData = [
    {
      label: "Approved",
      count: 1234,
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      label: "Rejected",
      count: 456,
      icon: XCircle,
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      label: "Sanctioned",
      count: 892,
      icon: FileCheck,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      label: "Pending",
      count: 234,
      icon: Clock,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      label: "Total Applications",
      count: 2816,
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      label: "Conversion Rate",
      count: "43.8%",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <main className="flex-1 p-6 space-y-6">
      <div className="animate-fade-in">
        <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Real-time analytics and final decision status tracking
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {statusData.map((status, index) => (
          <Card
            key={status.label}
            className="p-6 gradient-card border-border hover:shadow-lg transition-shadow"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">{status.label}</p>
                <p className="text-3xl font-bold text-foreground">{status.count}</p>
              </div>
              <div className={`p-3 rounded-lg ${status.bgColor}`}>
                <status.icon className={`w-6 h-6 ${status.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 gradient-card border-border animate-fade-in">
        <h3 className="text-lg font-semibold text-foreground mb-4">System Status</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Database: Connected</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Analytics Engine: Active</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Data Pipeline: Running</span>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default Index;
