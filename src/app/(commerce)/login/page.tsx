"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputField from "@/app/components/input";

const schema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login: React.FC = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    methods.reset();
  };

  return (
    <div className="flex justify-center h-[100vh] items-center">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="text-center shadow-md p-8 border w-[400px] rounded"
        >
          <h2 className="font-bold mb-6 text-2xl">Login</h2>
          <InputField name="email" type="text" placeholder="Email" />
          <InputField name="password" type="password" placeholder="Password" />
          <button
            type="submit"
            className="border px-8 py-1 hover:bg-[#7B61FF] hover:text-white  h-[42px]"
          >
            Login
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
