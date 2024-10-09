interface ButtonProps {
  variant: "dark" | "light";
  width?: "full" | "content";
  text?: string;
  onClick: () => void;
  brand?: string;
}

const Button = ({ text, onClick, variant, brand, width }: ButtonProps) => {
  return (
    <button
      className={`whitespace-nowrap font-medium rounded-md py-3 px-6 text-xl flex justify-center items-center gap-3 capitalize hover:bg-opacity-80 my-5 ${
        variant == "dark" ? "bg-black text-white" : "bg-grey text-black"
      } ${width === "full" && "w-full"}`}
      onClick={onClick}
    >
      {text} {brand && <i className={`fi fi-brands-${brand} text-xl`}></i>}
    </button>
  );
};

export default Button;
