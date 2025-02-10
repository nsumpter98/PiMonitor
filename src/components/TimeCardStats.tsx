import Card from "./Card";

interface TimeCardStatsProps {
  className?: string;
}

const TimeCardStats = ({ className }: TimeCardStatsProps) => {
  // TODO: Add actual timecard data fetching logic
  const weeklyHours = 32.5; // Example data
  const remainingHours = 40 - weeklyHours;

  return (
    <Card title="This Week's Hours" className={className}>
      <div className="space-y-4">
        <div className="text-3xl font-bold">{weeklyHours}h</div>
        <div className="text-sm text-gray-400">
          {remainingHours}h remaining this week
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${(weeklyHours / 40) * 100}%` }}
          ></div>
        </div>
      </div>
    </Card>
  );
};

export default TimeCardStats;
