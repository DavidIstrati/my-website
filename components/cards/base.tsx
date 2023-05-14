const BaseCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full border border-zinc-600 p-4 flex flex-col transition duration-500 ease-in-out bg-zinc-800 hover:bg-zinc-700/50 shadow-lg hover:shadow-zinc-800/50 hover:scale-105">
      {children}
    </div>
  );
};

export default BaseCard;
