import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface InputFieldProps {
  name: string;
  placeholder: string;
  rules?: Yup.SchemaOf<any>; // Use Yup.Schema for validation rules
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  rules,
  label,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(rules as Yup.ObjectSchema<any>), // Cast rules to ObjectSchema
  });

  const onSubmit = (data: any) => {
    // Handle form submission with data
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          {...register(name, rules)}
          type="text"
          placeholder={placeholder}
          className="h-[36px] w-full border"
          id={name} // Add id for label association
        />
        <p className="text-red-500">{errors[name]?.message}</p>
      </div>
    </form>
  );
};

export default InputField;
