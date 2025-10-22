import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Upload, Download, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const GoogleSummary = () => {
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
            <TrendingUp className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Google Ads Summary</h2>
          </div>
          <p className="text-muted-foreground">
            Process and analyze Google Ads campaigns with MIS data integration
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Upload MIS Data</CardTitle>
              <CardDescription>Upload your MIS Excel or CSV file to begin analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop your file here, or click to browse
                </p>
                <p className="text-xs text-muted-foreground">
                  Supports .xlsx and .csv files
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Button className="gradient-primary">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload File
                </Button>
                <Button variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Load from Database
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border gradient-primary">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-white mb-2">0</div>
                <div className="text-sm text-white/80">Total Campaigns</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border gradient-primary">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-white mb-2">0</div>
                <div className="text-sm text-white/80">Matched Records</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border gradient-primary">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-white mb-2">0%</div>
                <div className="text-sm text-white/80">Match Rate</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Campaign Results</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                Upload MIS data to view campaign results
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default GoogleSummary;
