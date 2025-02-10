import { useEffect, useState } from "react";
import Card from "./Card";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
    memeUrl:
      "https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png",
    quote: "Loading...",
    author: "Hmm idk",
  });
  const [memeApiUrl] = useState<string>(
    "https://meme-api.com/gimme/ProgrammerHumor"
  );

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Fetch meme
        const memeResponse = await fetch(memeApiUrl);
        const memeData = await memeResponse.json();

        // Generate quote using Gemini
        const genAI = new GoogleGenerativeAI(
          import.meta.env.VITE_GEMINI_API_KEY
        );
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt =
          'Generate a short, inspiring programming or technology related quote (max 2 sentences) and attribute it to a famous programmer, tech leader, or company. Return only a JSON object with format: {"quote": "your quote here", "author": "author name"}';
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().replace(/```json\n|\n```/g, ""); // Remove markdown formatting
        const quoteData = JSON.parse(text);

        setContent({
          memeUrl: memeData.url,
          quote: quoteData.quote,
          author: quoteData.author,
        });
      } catch (error) {
        console.error("Error fetching content:", error);
        setContent({
          memeUrl:
            "https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png",
          quote: "Failed to load content",
          author: "Error",
        });
      }
    };

    fetchContent();
  }, [memeApiUrl]);

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
