import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const moods = [
  { emoji: "😊", label: "Great", value: 5 },
  { emoji: "🙂", label: "Good", value: 4 },
  { emoji: "😐", label: "Okay", value: 3 },
  { emoji: "😟", label: "Low", value: 2 },
  { emoji: "😢", label: "Poor", value: 1 },
];

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMoodSelect = (value: number) => {
    setSelectedMood(value);
  };

  const handleSubmit = () => {
    if (selectedMood) {
      setIsSubmitted(true);
      // Here you would typically save to a database
      setTimeout(() => setIsSubmitted(false), 2000);
    }
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-card">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">How are you feeling today?</h3>
          <p className="text-sm text-muted-foreground">Track your daily mood to monitor your wellness</p>
        </div>
        
        <div className="flex justify-between space-x-2">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => handleMoodSelect(mood.value)}
              className={`flex flex-col items-center p-3 rounded-lg transition-smooth hover:scale-110 ${
                selectedMood === mood.value
                  ? "bg-gradient-wellness shadow-wellness text-primary-foreground"
                  : "bg-muted hover:bg-accent"
              }`}
            >
              <span className="text-2xl mb-1">{mood.emoji}</span>
              <span className="text-xs font-medium">{mood.label}</span>
            </button>
          ))}
        </div>

        {selectedMood && !isSubmitted && (
          <Button 
            onClick={handleSubmit}
            className="w-full bg-gradient-wellness hover:shadow-hover transition-smooth"
          >
            Log My Mood
          </Button>
        )}

        {isSubmitted && (
          <div className="text-center py-2">
            <span className="text-sm text-green-600 font-medium">✓ Mood logged successfully!</span>
          </div>
        )}
      </div>
    </Card>
  );
}