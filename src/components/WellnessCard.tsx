import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface WellnessCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "stable";
  className?: string;
}

export function WellnessCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend = "stable",
  className 
}: WellnessCardProps) {
  return (
    <Card className={cn(
      "p-6 bg-gradient-card shadow-card hover:shadow-hover transition-smooth border-border/50",
      "hover:scale-[1.02] cursor-pointer",
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline space-x-2">
            <h3 className="text-2xl font-bold text-foreground">{value}</h3>
            {trend === "up" && (
              <span className="text-xs text-green-600">↗ Improving</span>
            )}
            {trend === "down" && (
              <span className="text-xs text-orange-500">↘ Declining</span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <div className="p-3 bg-gradient-wellness rounded-lg shadow-wellness">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>
    </Card>
  );
}