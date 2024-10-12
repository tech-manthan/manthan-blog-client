interface FloatButtonProps {
  iconName: string;
  text: string;
  color?: string;
  onClick: () => void;
}

const FloatButton = ({ iconName, text, color, onClick }: FloatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white hover:bg-dark-grey/5 border  border-dark-grey shadow-md p-4 flex justify-center items-center rounded-full hover:opacity-95 z-20 transition-all w-12 h-12 gap-x-2 sm:w-full bg-[${color}] text-base font-medium `}
    >
      <i className={`fi fi-rr-${iconName} text-xl `}></i>
      <p className="hidden sm:block">{text}</p>
    </button>
  );
};

export default FloatButton;
