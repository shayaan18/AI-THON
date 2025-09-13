import { Card } from "@/components/ui/card";
import { WellnessCard } from "@/components/WellnessCard";
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Clock,
  Brain,
  Heart,
  Moon,
  Users
} from "lucide-react";

export default function Analytics() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Wellness Analytics</h1>
        <p className="text-muted-foreground">Track your progress and identify patterns in your wellness journey</p>
      </div>

      {/* Time Period Selector */}
      <div className="mb-8">
        <Card className="p-4 bg-gradient-card shadow-card">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Viewing Period</h3>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-gradient-wellness text-primary-foreground rounded-lg text-sm font-medium shadow-wellness">
                Last 7 Days
              </button>
              <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-accent transition-smooth">
                Last 30 Days
              </button>
              <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-accent transition-smooth">
                Last 90 Days
              </button>
            </div>
          </div>
        </Card>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <WellnessCard
          title="Average Mood"
          value="4.2/5"
          description="Up 0.3 from last week"
          icon={Brain}
          trend="up"
        />
        <WellnessCard
          title="Sleep Consistency"
          value="85%"
          description="Great sleep schedule"
          icon={Moon}
          trend="up"
        />
        <WellnessCard
          title="Study Efficiency"
          value="92%"
          description="Productive study sessions"
          icon={Clock}
          trend="stable"
        />
        <WellnessCard
          title="Social Engagement"
          value="78%"
          description="Healthy social balance"
          icon={Users}
          trend="up"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Mood Trends */}
        <Card className="p-6 bg-gradient-card shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Mood Trends</h3>
            <TrendingUp className="h-5 w-5 text-green-600" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Monday</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-gradient-wellness h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
                <span className="text-sm font-medium">4.0</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Tuesday</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-gradient-wellness h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                <span className="text-sm font-medium">4.5</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Wednesday</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-gradient-wellness h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
                <span className="text-sm font-medium">3.5</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Thursday</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-gradient-wellness h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                <span className="text-sm font-medium">4.8</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Friday</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-gradient-wellness h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span className="text-sm font-medium">4.2</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Sleep Patterns */}
        <Card className="p-6 bg-gradient-card shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Sleep Patterns</h3>
            <Moon className="h-5 w-5 text-purple-600" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Average Bedtime</span>
              <span className="text-sm font-medium">10:45 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Average Wake Time</span>
              <span className="text-sm font-medium">7:15 AM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Sleep Duration</span>
              <span className="text-sm font-medium">8h 30m</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Sleep Quality</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-muted rounded-full h-2">
                  <div className="bg-gradient-wellness h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span className="text-sm font-medium">85%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Insights */}
      <Card className="p-6 bg-gradient-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Wellness Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">Positive Trend</span>
            </div>
            <p className="text-sm text-green-700">Your mood has improved by 15% over the past week. Keep up the great work with your sleep schedule!</p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-800">Recommendation</span>
            </div>
            <p className="text-sm text-blue-700">Consider adding 15 minutes of physical activity on Wednesday to boost your mid-week energy levels.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}