import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreVertical, Activity, Users } from "lucide-react";

interface AppCardProps {
  name: string;
  description: string;
  status: "active" | "inactive" | "maintenance";
  users: number;
  requests: string;
}

export function AppCard({ name, description, status, users, requests }: AppCardProps) {
  const statusColors = {
    active: "bg-accent text-accent-foreground",
    inactive: "bg-muted text-muted-foreground",
    maintenance: "bg-destructive text-destructive-foreground",
  };

  return (
    <Card className="shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
        <Badge className={statusColors[status]} variant="secondary">
          {status}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{users} users</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{requests}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
