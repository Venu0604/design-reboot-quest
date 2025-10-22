import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Upload, Download, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CampaignAnalysis = () => {
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
            <Target className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Campaign Analysis</h2>
          </div>
          <p className="text-muted-foreground">
            Analyze campaign performance across SMS, RCS, WhatsApp channels
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Data Upload</CardTitle>
              <CardDescription>Upload identifier data and MIS files for analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Identifier Data</p>
                  <p className="text-xs text-muted-foreground">Campaign identifiers & channels</p>
                </div>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">MIS Data</p>
                  <p className="text-xs text-muted-foreground">Application & status data</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Date Range Filter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Start Date</span>
                </div>
                <input
                  type="date"
                  className="px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground"
                />
                <span className="text-muted-foreground">to</span>
                <input
                  type="date"
                  className="px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground"
                />
                <Button className="gradient-primary">Apply Filter</Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-4 gap-6">
            {["SMS", "RCS", "WhatsApp Marketing", "WhatsApp Utility"].map((channel) => (
              <Card key={channel} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{channel}</div>
                  <div className="text-2xl font-bold text-foreground mb-1">0</div>
                  <div className="text-xs text-muted-foreground">Total Sent</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Campaign Performance</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                Upload campaign data to view performance metrics
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CampaignAnalysis;
