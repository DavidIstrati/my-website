const Tab = ({
  title,
  active,
  onClick,
  className = "px-6 py-2 rounded-full text-xs",
  classNameActive = "bg-emerald-500/20 border-emerald-500 text-emerald-500 shadow-emerald-500/20",
  classNameDefault = "bg-transparent border-zinc-800 text-zinc-700 shadow-transparent hover:text-zinc-500 hover:border-zinc-600",
}: {
  title: string;
  active: boolean;
  onClick: () => void;
  className?: string;
  classNameActive?: string;
  classNameDefault?: string;
}) => {
  return (
    <div
      className={`flex justify-center items-center ${className} transition duration-500 ease-in-out border shadow-lg ${
        active ? classNameActive : classNameDefault
      } `}
      onClick={onClick}
    >
      <span>{title}</span>
    </div>
  );
};

export default Tab;
