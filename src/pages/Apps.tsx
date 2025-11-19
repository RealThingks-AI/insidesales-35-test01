import { AppCard } from "@/components/AppCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Apps() {
  const apps = [
    {
      name: "E-commerce Platform",
      description: "Main shopping application with payment integration",
      status: "active" as const,
      users: 2543,
      requests: "125K/day",
    },
    {
      name: "Analytics Dashboard",
      description: "Real-time data visualization and reporting",
      status: "active" as const,
      users: 342,
      requests: "45K/day",
    },
    {
      name: "Mobile API",
      description: "RESTful API for mobile applications",
      status: "active" as const,
      users: 1825,
      requests: "320K/day",
    },
    {
      name: "Admin Portal",
      description: "Internal management and configuration tool",
      status: "maintenance" as const,
      users: 89,
      requests: "8K/day",
    },
    {
      name: "Marketing Website",
      description: "Public-facing marketing site and blog",
      status: "active" as const,
      users: 4521,
      requests: "280K/day",
    },
    {
      name: "Customer Portal",
      description: "Self-service customer support platform",
      status: "active" as const,
      users: 1234,
      requests: "95K/day",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Applications
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage and monitor all your applications
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4 mr-2" />
          New App
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <AppCard key={app.name} {...app} />
        ))}
      </div>
    </div>
  );
}
