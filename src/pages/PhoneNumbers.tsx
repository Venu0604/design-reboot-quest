import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Upload, Download, Database } from "lucide-react";
import { Link } from "react-router-dom";

const PhoneNumbers = () => {
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
            <Phone className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Phone Numbers Extraction</h2>
          </div>
          <p className="text-muted-foreground">
            Extract and map phone numbers from campaign data using LC2 codes
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Data Sources</CardTitle>
              <CardDescription>Load data from database or upload MIS file</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
                  <Database className="w-8 h-8 text-primary" />
                  <span>Load from Database</span>
                </Button>
                <div className="border-2 border-dashed border-border rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:border-primary transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Upload MIS File</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-foreground mb-2">0</div>
                <div className="text-sm text-muted-foreground">Campaign Records</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-foreground mb-2">0</div>
                <div className="text-sm text-muted-foreground">MIS Records</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-foreground mb-2">0</div>
                <div className="text-sm text-muted-foreground">Matched Numbers</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>LC2 Code Transformations</CardTitle>
              <CardDescription>Supported phone number derivation methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">IV Prefix (Base36)</div>
                    <div className="text-sm text-muted-foreground">Converts IV-prefixed codes using base36 conversion</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">MNOPQRSTUV Mapping</div>
                    <div className="text-sm text-muted-foreground">Converts letter-based codes to numeric phone numbers</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Extraction Results</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                Load data to view phone number extraction results
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PhoneNumbers;
