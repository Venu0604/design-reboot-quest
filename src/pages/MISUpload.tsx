import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, Database, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MISUpload = () => {
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
            <Upload className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">MIS Data Upload</h2>
          </div>
          <p className="text-muted-foreground">
            Upload and manage MIS data from Excel/CSV files to PostgreSQL database
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Upload Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Automatic Duplicate Detection</div>
                    <div className="text-sm text-muted-foreground">Updates existing records, inserts new ones</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Date Validation</div>
                    <div className="text-sm text-muted-foreground">Automatic date format detection and cleaning</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Column Matching</div>
                    <div className="text-sm text-muted-foreground">Smart column alignment with database</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Multi-format Support</div>
                    <div className="text-sm text-muted-foreground">Excel (.xlsx) and CSV (.csv) files</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Upload File</CardTitle>
              <CardDescription>Table: HDFC_MIS_Data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-16 text-center hover:border-primary transition-colors cursor-pointer">
                <div className="flex flex-col items-center gap-4">
                  <Database className="w-16 h-16 text-muted-foreground" />
                  <div>
                    <p className="text-lg text-foreground mb-2">
                      Choose an Excel or CSV file
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Drag and drop or click to browse
                    </p>
                  </div>
                  <Button className="gradient-primary mt-2">
                    <Upload className="w-4 h-4 mr-2" />
                    Select File
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border border-l-4 border-l-yellow-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <div className="font-medium text-foreground mb-1">Important Notes</div>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Unique identifier: APPLICATION_REFERENCE_NUMBER</li>
                    <li>Existing records will be updated based on the unique identifier</li>
                    <li>New records will be inserted automatically</li>
                    <li>Large files may take a few minutes to process</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MISUpload;
