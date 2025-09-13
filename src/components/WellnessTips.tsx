import { Card } from "@/components/ui/card";
import { Lightbulb, Heart, Brain, Moon } from "lucide-react";

const tips = [
  {
    icon: Brain,
    title: "Take Study Breaks",
    description: "Use the 25-5 rule: 25 minutes focused study, 5 minute break",
    color: "text-blue-600"
  },
  {
    icon: Heart,
    title: "Stay Active",
    description: "Even 10 minutes of walking can boost your mood and energy",
    color: "text-red-500"
  },
  {
    icon: Moon,
    title: "Sleep Schedule",
    description: "Aim for 7-9 hours of sleep to support mental wellbeing",
    color: "text-purple-600"
  },
  {
    icon: Lightbulb,
    title: "Mindful Moments",
    description: "Practice 3 deep breaths when feeling overwhelmed",
    color: "text-yellow-600"
  }
];

export function WellnessTips() {
  return (
    <Card className="p-6 bg-gradient-card shadow-card">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Daily Wellness Tips</h3>
        
        <div className="space-y-3">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-accent/50 transition-smooth">
                <div className={`p-2 rounded-lg bg-background shadow-card ${tip.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-sm font-medium text-foreground">{tip.title}</h4>
                  <p className="text-xs text-muted-foreground">{tip.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}