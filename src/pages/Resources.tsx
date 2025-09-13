import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Phone, 
  MessageCircle, 
  Heart, 
  Brain, 
  Users, 
  ExternalLink,
  PlayCircle,
  Headphones,
  Video
} from "lucide-react";

const emergencyContacts = [
  {
    name: "Crisis Text Line",
    description: "24/7 crisis support via text",
    contact: "Text HOME to 741741",
    icon: MessageCircle,
    urgent: true
  },
  {
    name: "National Suicide Prevention Lifeline",
    description: "24/7 confidential support",
    contact: "988",
    icon: Phone,
    urgent: true
  },
  {
    name: "Campus Counseling Center",
    description: "On-campus mental health services",
    contact: "(555) 123-4567",
    icon: Heart,
    urgent: false
  }
];

const resources = [
  {
    category: "Mental Health",
    icon: Brain,
    color: "text-purple-600",
    items: [
      { title: "Mindfulness Meditation Guide", type: "Article", icon: BookOpen },
      { title: "Anxiety Management Techniques", type: "Video", icon: Video },
      { title: "Daily Affirmations Podcast", type: "Audio", icon: Headphones },
      { title: "Stress Relief Exercises", type: "Interactive", icon: PlayCircle }
    ]
  },
  {
    category: "Academic Success",
    icon: BookOpen,
    color: "text-blue-600",
    items: [
      { title: "Study Techniques That Work", type: "Article", icon: BookOpen },
      { title: "Time Management Mastery", type: "Video", icon: Video },
      { title: "Focus and Concentration Tips", type: "Audio", icon: Headphones },
      { title: "Exam Anxiety Solutions", type: "Interactive", icon: PlayCircle }
    ]
  },
  {
    category: "Social Wellness",
    icon: Users,
    color: "text-green-600",
    items: [
      { title: "Building Healthy Relationships", type: "Article", icon: BookOpen },
      { title: "Communication Skills Workshop", type: "Video", icon: Video },
      { title: "Social Anxiety Support", type: "Audio", icon: Headphones },
      { title: "Peer Support Groups", type: "Interactive", icon: PlayCircle }
    ]
  },
  {
    category: "Physical Wellness",
    icon: Heart,
    color: "text-red-600",
    items: [
      { title: "Exercise for Mental Health", type: "Article", icon: BookOpen },
      { title: "Quick Workout Routines", type: "Video", icon: Video },
      { title: "Sleep Improvement Guide", type: "Audio", icon: Headphones },
      { title: "Nutrition Planning Tools", type: "Interactive", icon: PlayCircle }
    ]
  }
];

export default function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Wellness Resources</h1>
        <p className="text-muted-foreground">Access helpful tools, guides, and support services for your wellbeing</p>
      </div>

      {/* Emergency Contacts */}
      <div className="mb-12">
        <div className="flex items-center space-x-2 mb-6">
          <div className="p-2 bg-red-100 rounded-lg">
            <Phone className="h-5 w-5 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Emergency Support</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {emergencyContacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card key={index} className={`p-4 bg-gradient-card shadow-card ${contact.urgent ? 'border-red-200 bg-red-50' : ''}`}>
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${contact.urgent ? 'bg-red-100' : 'bg-accent'}`}>
                    <Icon className={`h-5 w-5 ${contact.urgent ? 'text-red-600' : 'text-primary'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm">{contact.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{contact.description}</p>
                    <p className="text-sm font-medium text-primary">{contact.contact}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Resource Categories */}
      <div className="space-y-8">
        {resources.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;
          return (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-2 bg-accent rounded-lg ${category.color}`}>
                  <CategoryIcon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">{category.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.items.map((item, itemIndex) => {
                  const ItemIcon = item.icon;
                  return (
                    <Card key={itemIndex} className="p-4 bg-gradient-card shadow-card hover:shadow-hover transition-smooth cursor-pointer hover-scale">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <ItemIcon className="h-5 w-5 text-primary" />
                          <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                            {item.type}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground text-sm mb-1">{item.title}</h3>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs text-primary hover:underline cursor-pointer">Access Resource</span>
                            <ExternalLink className="h-3 w-3 text-primary" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mt-12">
        <Card className="p-6 bg-gradient-wellness shadow-wellness">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-primary-foreground">Need Immediate Support?</h3>
            <p className="text-primary-foreground/80">Don't hesitate to reach out for help when you need it</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/30">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat with Counselor
              </Button>
              <Button variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/30">
                <Phone className="h-4 w-4 mr-2" />
                Schedule Appointment
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}