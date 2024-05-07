import React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  rules?: RegisterOptions;
}

const InputField: React.FC<InputProps> = ({
  name,
  type = "text",
  placeholder,
  rules,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-6">
      <input
        {...register(name, rules)}
        type={type}
        placeholder={placeholder}
        className="border block w-full h-[42px] px-2"
      />
      <p className="text-red-500 text-sm text-left">{errors[name]?.message}</p>
    </div>
  );
};

export default InputField;
