import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Moon, 
  Sun,
  Settings,
  Edit,
  Mail,
  Phone,
  MapPin,
  Calendar
} from "lucide-react";

export default function Profile() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    moodReminders: true,
    goalDeadlines: true,
    wellnessTips: false,
    weeklyReports: true
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your account and wellness preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Info */}
          <Card className="p-6 bg-gradient-card shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Personal Information</span>
              </h3>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>

            <div className="flex items-center space-x-6 mb-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="text-lg bg-gradient-wellness text-primary-foreground">
                  AS
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-foreground">Alex Student</h2>
                <p className="text-muted-foreground">Computer Science Major</p>
                <p className="text-sm text-muted-foreground">Junior Year • GPA: 3.7</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Input id="email" value="alex.student@university.edu" disabled />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <Input id="phone" value="+1 (555) 123-4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Campus Location</Label>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <Input id="location" value="North Campus Dormitory" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Academic Year</Label>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Input id="year" value="2024-2025" />
                </div>
              </div>
            </div>
          </Card>

          {/* Notification Preferences */}
          <Card className="p-6 bg-gradient-card shadow-card">
            <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2 mb-6">
              <Bell className="h-5 w-5" />
              <span>Notification Preferences</span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Daily Mood Reminders</p>
                  <p className="text-sm text-muted-foreground">Get reminded to log your daily mood</p>
                </div>
                <Switch 
                  checked={notifications.moodReminders}
                  onCheckedChange={(checked) => setNotifications(prev => ({...prev, moodReminders: checked}))}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Goal Deadline Alerts</p>
                  <p className="text-sm text-muted-foreground">Notifications when goals are due</p>
                </div>
                <Switch 
                  checked={notifications.goalDeadlines}
                  onCheckedChange={(checked) => setNotifications(prev => ({...prev, goalDeadlines: checked}))}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Daily Wellness Tips</p>
                  <p className="text-sm text-muted-foreground">Receive helpful wellness suggestions</p>
                </div>
                <Switch 
                  checked={notifications.wellnessTips}
                  onCheckedChange={(checked) => setNotifications(prev => ({...prev, wellnessTips: checked}))}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Weekly Progress Reports</p>
                  <p className="text-sm text-muted-foreground">Summary of your wellness progress</p>
                </div>
                <Switch 
                  checked={notifications.weeklyReports}
                  onCheckedChange={(checked) => setNotifications(prev => ({...prev, weeklyReports: checked}))}
                />
              </div>
            </div>
          </Card>

          {/* Privacy & Security */}
          <Card className="p-6 bg-gradient-card shadow-card">
            <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2 mb-6">
              <Shield className="h-5 w-5" />
              <span>Privacy & Security</span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Data Sharing</p>
                  <p className="text-sm text-muted-foreground">Share anonymized data for research</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Analytics</p>
                  <p className="text-sm text-muted-foreground">Help improve the app with usage data</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Button variant="outline" className="w-full">
                Change Password
              </Button>
              <Button variant="outline" className="w-full">
                Download My Data
              </Button>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Appearance */}
          <Card className="p-6 bg-gradient-card shadow-card">
            <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2 mb-4">
              <Palette className="h-5 w-5" />
              <span>Appearance</span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <span className="font-medium text-foreground">Dark Mode</span>
                </div>
                <Switch 
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
              </div>
            </div>
          </Card>

          {/* Wellness Stats */}
          <Card className="p-6 bg-gradient-card shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Days Active</span>
                <span className="font-medium text-foreground">23</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Goals Completed</span>
                <span className="font-medium text-foreground">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Wellness Score</span>
                <span className="font-medium text-foreground">82/100</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Streak</span>
                <span className="font-medium text-foreground">7 days</span>
              </div>
            </div>
          </Card>

          {/* Support */}
          <Card className="p-6 bg-gradient-card shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Support</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Help Center
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Contact Support
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Privacy Policy
              </Button>
              <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                Delete Account
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}