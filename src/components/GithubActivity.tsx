import Card from "./Card";

interface GithubActivityProps {
  className?: string;
}

const GithubActivity = ({ className }: GithubActivityProps) => {
  // TODO: Add GitHub API integration
  const activities = [
    { id: 1, type: "commit", repo: "project-x", time: "2h ago" },
    { id: 2, type: "pull request", repo: "project-y", time: "4h ago" },
  ];

  return (
    <Card title="GitHub Activity" className={className}>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-400">{activity.type}</span>
              <span className="text-blue-400">{activity.repo}</span>
            </div>
            <span className="text-gray-500">{activity.time}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default GithubActivity;
