import { Activity, AppWindow, Users, TrendingUp } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";

export default function Dashboard() {
  const metrics = [
    {
      title: "Total Apps",
      value: 12,
      change: "+2 from last month",
      icon: AppWindow,
      trend: "up" as const,
    },
    {
      title: "Active Users",
      value: "8.2K",
      change: "+12.5% from last week",
      icon: Users,
      trend: "up" as const,
    },
    {
      title: "Total Requests",
      value: "1.2M",
      change: "+8.2% from last week",
      icon: Activity,
      trend: "up" as const,
    },
    {
      title: "Uptime",
      value: "99.9%",
      change: "All systems operational",
      icon: TrendingUp,
      trend: "up" as const,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-2">
          Monitor and manage your applications
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-gradient-card rounded-xl p-6 shadow-card">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { app: "E-commerce Platform", action: "Deployed v2.1.0", time: "2 minutes ago" },
              { app: "Analytics Dashboard", action: "Health check passed", time: "15 minutes ago" },
              { app: "Mobile API", action: "Scaled to 3 instances", time: "1 hour ago" },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-3 pb-4 border-b border-border last:border-0">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <div className="flex-1">
                  <p className="font-medium text-foreground">{activity.app}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-card rounded-xl p-6 shadow-card">
          <h3 className="text-lg font-semibold mb-4">System Status</h3>
          <div className="space-y-4">
            {[
              { service: "API Gateway", status: "Operational", uptime: "99.99%" },
              { service: "Database", status: "Operational", uptime: "99.95%" },
              { service: "CDN", status: "Operational", uptime: "100%" },
            ].map((system, i) => (
              <div key={i} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
                <div>
                  <p className="font-medium text-foreground">{system.service}</p>
                  <p className="text-sm text-accent">{system.status}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{system.uptime}</p>
                  <p className="text-xs text-muted-foreground">uptime</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
