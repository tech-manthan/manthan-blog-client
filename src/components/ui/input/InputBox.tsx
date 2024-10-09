import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputBoxProps {
  name?: string;
  type: "text" | "email" | "password" | "checkbox";
  label: string;
  placeholder?: string;
  iconName?: string;
  register: UseFormRegisterReturn;
}

const InputBox = ({
  type,
  label,
  name,
  placeholder,
  register,
  iconName,
}: InputBoxProps) => {
  const [isVisible, setIsVisble] = useState(false);
  return (
    <div
      className={`my-4 ${
        type === "checkbox" && "flex flex-row-reverse items-center gap-x-2 my-0"
      }`}
    >
      <label htmlFor={name} className="text-lg mx-1">
        {label}
      </label>
      <div className={`relative mt-1 ${type === "checkbox" && "m-0"}`}>
        {iconName && (
          <i
            className={`fi fi-rr-${iconName} absolute top-1/2 -translate-y-1/2 left-4 text-xl`}
          ></i>
        )}
        <input
          {...register}
          name={name}
          id={name}
          type={`${isVisible ? "text" : type}`}
          placeholder={placeholder}
          className={`${
            type === "checkbox"
              ? "w-4 h-4 rounded focus:ring-twitter/45"
              : "w-full py-4 pl-12 placeholder:text-dark-grey  border-2 border-grey rounded-md"
          }`}
        />
        {type === "password" && (
          <span
            className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
            onClick={() => setIsVisble((value) => !value)}
          >
            {isVisible ? (
              <i className="fi fi-rr-eye text-xl"></i>
            ) : (
              <i className="fi fi-rr-eye-crossed text-xl"></i>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputBox;
