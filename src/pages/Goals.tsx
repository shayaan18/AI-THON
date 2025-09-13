import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  Plus, 
  CheckCircle, 
  Moon, 
  Brain, 
  Heart, 
  BookOpen,
  Users,
  Zap
} from "lucide-react";

const sampleGoals = [
  {
    id: 1,
    title: "Sleep 8 Hours Daily",
    description: "Maintain consistent 8-hour sleep schedule",
    icon: Moon,
    progress: 75,
    target: 7, // days per week
    current: 5,
    category: "Sleep",
    color: "text-purple-600"
  },
  {
    id: 2,
    title: "Study 4 Hours Daily",
    description: "Focused study sessions with breaks",
    icon: BookOpen,
    progress: 60,
    target: 28, // hours per week
    current: 17,
    category: "Academic",
    color: "text-blue-600"
  },
  {
    id: 3,
    title: "Social Connection",
    description: "Meaningful interactions with friends",
    icon: Users,
    progress: 90,
    target: 5, // interactions per week
    current: 4,
    category: "Social",
    color: "text-green-600"
  },
  {
    id: 4,
    title: "Stress Management",
    description: "Practice mindfulness 3 times per week",
    icon: Brain,
    progress: 40,
    target: 3,
    current: 1,
    category: "Mental",
    color: "text-orange-600"
  }
];

export default function Goals() {
  const [goals, setGoals] = useState(sampleGoals);
  const [showAddGoal, setShowAddGoal] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Wellness Goals</h1>
          <p className="text-muted-foreground">Set and track your personal wellness targets</p>
        </div>
        <Button 
          onClick={() => setShowAddGoal(true)}
          className="bg-gradient-wellness hover:shadow-hover transition-smooth"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Goal
        </Button>
      </div>

      {/* Goals Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-4 bg-gradient-card shadow-card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="text-sm text-muted-foreground">Completed Goals</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-gradient-card shadow-card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">4</p>
              <p className="text-sm text-muted-foreground">Active Goals</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-gradient-card shadow-card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">67%</p>
              <p className="text-sm text-muted-foreground">Average Progress</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-gradient-card shadow-card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Heart className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">21</p>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Active Goals */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground">Active Goals</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {goals.map((goal) => {
            const Icon = goal.icon;
            return (
              <Card key={goal.id} className="p-6 bg-gradient-card shadow-card hover:shadow-hover transition-smooth">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 bg-accent rounded-lg ${goal.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{goal.title}</h3>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    {goal.category}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">{goal.current}/{goal.target}</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{goal.progress}% Complete</span>
                    <span className="text-primary font-medium">
                      {goal.progress >= 100 ? "Completed!" : `${100 - goal.progress}% to go`}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2 mt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    Edit Goal
                  </Button>
                  <Button size="sm" className="bg-gradient-wellness">
                    Log Progress
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Goal Templates */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-foreground mb-6">Popular Goal Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Daily Exercise", icon: Heart, category: "Physical" },
            { title: "Meditation Practice", icon: Brain, category: "Mental" },
            { title: "Reading Habit", icon: BookOpen, category: "Learning" },
            { title: "Social Activities", icon: Users, category: "Social" },
            { title: "Sleep Hygiene", icon: Moon, category: "Sleep" },
            { title: "Study Schedule", icon: Target, category: "Academic" }
          ].map((template, index) => {
            const Icon = template.icon;
            return (
              <Card key={index} className="p-4 bg-gradient-card shadow-card hover:shadow-hover transition-smooth cursor-pointer hover-scale">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{template.title}</h4>
                    <p className="text-xs text-muted-foreground">{template.category}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}