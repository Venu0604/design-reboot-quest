import { 
  TrendingUp, 
  Upload, 
  Phone, 
  Terminal, 
  BarChart3, 
  Target,
  Building2
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3
  },
  {
    title: "Google Ads Summary",
    url: "/google-summary",
    icon: TrendingUp
  },
  {
    title: "Campaign Analysis",
    url: "/campaign-analysis",
    icon: Target
  },
  {
    title: "Status Analysis",
    url: "/status-analysis",
    icon: BarChart3
  },
  {
    title: "MIS Upload",
    url: "/mis-upload",
    icon: Upload
  },
  {
    title: "Phone Numbers",
    url: "/phone-numbers",
    icon: Phone
  },
  {
    title: "SQL Console",
    url: "/sql-console",
    icon: Terminal
  }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-6 h-6 text-primary" />
          <div>
            <h2 className="font-semibold text-sidebar-foreground">HDFC Analytics</h2>
            <p className="text-xs text-sidebar-foreground/70">Unified Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Modules</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) => 
                        isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : ""
                      }
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
