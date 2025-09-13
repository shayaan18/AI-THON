import { WellnessCard } from "@/components/WellnessCard";
import { MoodTracker } from "@/components/MoodTracker";
import { WellnessTips } from "@/components/WellnessTips";
import { 
  Brain, 
  Heart, 
  Moon, 
  BookOpen, 
  Activity,
  Users,
  BarChart3,
  Settings
} from "lucide-react";
import heroImage from "@/assets/wellness-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-wellness shadow-wellness">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-foreground/20 rounded-lg">
                <Activity className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-foreground">WellnessTracker</h1>
                <p className="text-primary-foreground/80 text-sm">Student Wellness Monitor</p>
              </div>
            </div>
            <button className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-smooth">
              <Settings className="h-6 w-6 text-primary-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Wellness journey visualization" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-calm"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Wellness Journey Starts Here
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monitor your mental, physical, and academic wellness with personalized insights and recommendations.
          </p>
        </div>
      </section>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <MoodTracker />
            </div>
            <div>
              <WellnessTips />
            </div>
          </div>
        </div>

        {/* Wellness Metrics */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Your Wellness Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <WellnessCard
              title="Sleep Quality"
              value="7.2h"
              description="Average sleep last week"
              icon={Moon}
              trend="up"
            />
            <WellnessCard
              title="Stress Level"
              value="3/10"
              description="Lower than last week"
              icon={Brain}
              trend="down"
            />
            <WellnessCard
              title="Study Hours"
              value="4.5h"
              description="Daily average this week"
              icon={BookOpen}
              trend="stable"
            />
            <WellnessCard
              title="Social Activity"
              value="8/10"
              description="Great social connections"
              icon={Users}
              trend="up"
            />
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WellnessCard
            title="Physical Activity"
            value="3.2k"
            description="Steps today"
            icon={Heart}
            trend="up"
            className="lg:col-span-1"
          />
          <WellnessCard
            title="Wellness Score"
            value="82/100"
            description="Overall wellness rating"
            icon={BarChart3}
            trend="up"
            className="lg:col-span-1"
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
