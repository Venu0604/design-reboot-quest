import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart3, Upload, Download } from "lucide-react";
import { Link } from "react-router-dom";

const StatusAnalysis = () => {
  const statuses = [
    { label: "Card Out", count: 0, color: "bg-green-500" },
    { label: "Declined", count: 0, color: "bg-red-500" },
    { label: "In Progress", count: 0, color: "bg-yellow-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Status Analysis</h2>
          </div>
          <p className="text-muted-foreground">
            Track final decision counts with date filters
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Upload MIS Data</CardTitle>
              <CardDescription>Upload your MIS file to analyze application statuses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  Upload MIS Excel or CSV file
                </p>
                <p className="text-xs text-muted-foreground">
                  Supports .xlsx and .csv formats
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {statuses.map((status) => (
              <Card key={status.label} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-3 h-3 rounded-full ${status.color}`}></div>
                    <div className="text-sm text-muted-foreground">{status.label}</div>
                  </div>
                  <div className="text-3xl font-bold text-foreground">{status.count}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Status Distribution</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                Upload data to view status distribution
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StatusAnalysis;
