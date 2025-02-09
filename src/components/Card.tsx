interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, children, className = "" }: CardProps) => {
  return (
    <div className={`bg-gray-800 p-6 rounded-lg h-full ${className}`}>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
