import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Terminal, Play, Download, Database } from "lucide-react";
import { Link } from "react-router-dom";

const SQLConsole = () => {
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
            <Terminal className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">SQL Console</h2>
          </div>
          <p className="text-muted-foreground">
            Execute SQL queries and export data directly from the database
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Query Editor</CardTitle>
                  <CardDescription>Write and execute SQL queries (SELECT only)</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-muted-foreground">Connected</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <textarea
                  className="w-full h-48 p-4 bg-muted border border-border rounded-lg text-sm font-mono text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="SELECT * FROM HDFC_MIS_Data LIMIT 10;"
                />
                <div className="flex gap-3">
                  <Button className="gradient-primary">
                    <Play className="w-4 h-4 mr-2" />
                    Execute Query
                  </Button>
                  <Button variant="outline">
                    Clear
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Database Tables</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  "Campaign_Data",
                  "HDFC_MIS_Data",
                  "Google_Ads_Summary",
                  "Phone_Numbers"
                ].map((table) => (
                  <div
                    key={table}
                    className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Database className="w-4 h-4 text-primary" />
                      <span className="font-mono text-sm text-foreground">{table}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      View Schema
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Query Results</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                Execute a query to view results
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Terminal className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <div className="font-medium text-foreground mb-1">Security Notice</div>
                  <p className="text-sm text-muted-foreground">
                    Only SELECT queries are allowed. Queries containing DROP, DELETE, UPDATE, INSERT, or other 
                    data modification keywords will be blocked for security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SQLConsole;
