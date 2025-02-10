import { useEffect, useState } from "react";
import Card from "./Card";

interface LiveCommentsProps {
  className?: string;
}

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

const LiveComments = ({ className }: LiveCommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([]);

  // TODO: Replace with actual WebSocket or polling implementation
  useEffect(() => {
    const demoComments: Comment[] = [
      {
        id: 1,
        author: "User1",
        content: "Great dashboard!",
        timestamp: "1m ago",
      },
      {
        id: 2,
        author: "User2",
        content: "Nice work on this",
        timestamp: "2m ago",
      },
      { id: 3, author: "User3", content: "Keep it up!", timestamp: "3m ago" },
    ];
    setComments(demoComments);
  }, []);

  return (
    <Card title="Live Comments" className={className}>
      <div className="space-y-4 overflow-y-auto max-h-[calc(100%-2rem)]">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-700 pb-2">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">{comment.author}</span>
              <span className="text-sm text-gray-400">{comment.timestamp}</span>
            </div>
            <p className="text-sm text-gray-300">{comment.content}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default LiveComments;
