import { useEffect, useState } from "react";
import Card from "./Card";

interface MemeOfTheDayProps {
  className?: string;
}

interface DailyContent {
  memeUrl: string;
  quote: string;
  author: string;
}

const MemeOfTheDay = ({ className }: MemeOfTheDayProps) => {
  const [content, setContent] = useState<DailyContent>({
    memeUrl: "",
    quote: "",
    author: "",
  });

  // TODO: Implement actual API call to fetch daily meme and quote
  useEffect(() => {
    // Fetch daily content here
    setContent({
        memeUrl: "https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png",
        quote: "404 this meme is not found",
        author: "Anonymous Developer",
      });
  }, []);

  return (
    <Card title="Meme & Quote of the Day" className={className}>
      <div className="h-[calc(100%-2rem)] flex flex-col gap-4">
        <div className="flex-1 relative">
          <img
            src={content.memeUrl}
            alt="Meme of the day"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <blockquote className="text-lg italic">"{content.quote}"</blockquote>
          <p className="text-right text-gray-400 mt-2">- {content.author}</p>
        </div>
      </div>
    </Card>
  );
};

export default MemeOfTheDay;
