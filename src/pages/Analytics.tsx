import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const requestData = [
  { name: "Mon", requests: 4200 },
  { name: "Tue", requests: 3800 },
  { name: "Wed", requests: 5100 },
  { name: "Thu", requests: 4900 },
  { name: "Fri", requests: 6200 },
  { name: "Sat", requests: 5400 },
  { name: "Sun", requests: 4100 },
];

const appPerformanceData = [
  { name: "E-commerce", uptime: 99.9, responseTime: 245 },
  { name: "Analytics", uptime: 99.8, responseTime: 180 },
  { name: "Mobile API", uptime: 99.95, responseTime: 120 },
  { name: "Admin", uptime: 98.5, responseTime: 320 },
  { name: "Marketing", uptime: 99.7, responseTime: 280 },
];

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Analytics
        </h1>
        <p className="text-muted-foreground mt-2">
          Detailed insights and performance metrics
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Request Traffic</CardTitle>
            <CardDescription>Total API requests over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={requestData}>
                <defs>
                  <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(234, 89%, 60%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(234, 89%, 60%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="requests"
                  stroke="hsl(234, 89%, 60%)"
                  fillOpacity={1}
                  fill="url(#colorRequests)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>App Performance</CardTitle>
            <CardDescription>Uptime percentage by application</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={appPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                />
                <Bar dataKey="uptime" fill="hsl(188, 95%, 52%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Response Times</CardTitle>
          <CardDescription>Average response time per application (ms)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={appPerformanceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis type="number" className="text-xs" />
              <YAxis dataKey="name" type="category" className="text-xs" width={100} />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem'
                }}
              />
              <Bar dataKey="responseTime" fill="hsl(234, 89%, 60%)" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
