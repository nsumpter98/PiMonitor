import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import Card from "./Card";

interface GithubActivityProps {
  className?: string;
}

interface Activity {
  id: string;
  type: string;
  repo: string;
  time: string;
  url: string;
}


const GithubActivity = ({ className }: GithubActivityProps) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubActivity = async () => {
      try {
        const octokit = new Octokit({
          auth: import.meta.env.VITE_GITHUB_TOKEN,
        });

        const { data } = await octokit.activity.listPublicEventsForUser({
          username: import.meta.env.VITE_GITHUB_USERNAME,
          per_page: 5,
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedActivities = data.map((event: any) => {
          const time = new Date(event.created_at);
          const now = new Date();
          const diffInHours = Math.floor(
            (now.getTime() - time.getTime()) / (1000 * 60 * 60)
          );

          return {
            id: event.id,
            type: event.type
              .replace("Event", "")
              .split(/(?=[A-Z])/)
              .join(" ")
              .toLowerCase(),
            repo: event.repo.name.split("/")[1],
            time: `${diffInHours}h ago`,
            url: `https://github.com/${event.repo.name}`,
          };
        });

        setActivities(formattedActivities);
      } catch (error) {
        console.error("Error fetching GitHub activity:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubActivity();
    // Refresh every 5 minutes
    const interval = setInterval(fetchGithubActivity, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card title="GitHub Activity" className={className}>
      <div className="space-y-3 overflow-y-hidden max-h-[150px]">
        {loading ? (
          <div className="text-gray-400 text-sm">Loading activities...</div>
        ) : activities.length === 0 ? (
          <div className="text-gray-400 text-sm">No recent activity</div>
        ) : (
          activities.map((activity) => (
            <a
              key={activity.id}
              href={activity.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-sm hover:bg-gray-700 p-2 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-gray-400">{activity.type}</span>
                <span className="text-blue-400">{activity.repo}</span>
              </div>
              <span className="text-gray-500">{activity.time}</span>
            </a>
          ))
        )}
      </div>
    </Card>
  );
};

export default GithubActivity;
