// "use client";
// import React from "react";
// import * as Yup from "yup";
// import { FormProvider, useForm } from "react-hook-form";
// import InputField from "@/app/components/input";
// import { yupResolver } from "@hookform/resolvers/yup";

// const schema = Yup.object().shape({
//   firstName: Yup.string().required("First name is required"),
// });

// const Login: React.FC = () => {
//   const methods = useForm({
//     resolver: yupResolver(schema),
//   });

//   return (
//     <FormProvider {...methods}>
//       <form>
//         <InputField
//           name="firstName"
//           placeholder="Enter your first name"
//           label="First Name"
//           schema={schema}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </FormProvider>
//   );
// };

// export default Login;

"use client";
import React from "react";
import * as Yup from "yup";
import InputField from "@/app/components/input";

const userSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const Login: React.FC = () => {
  return (
    <form>
      <InputField
        name="name"
        placeholder="Enter your name"
        rules={userSchema.fields.name} // Access specific field schema
        label="Name"
      />
      <InputField
        name="email"
        placeholder="Enter your email"
        rules={userSchema.fields.email} // Access specific field schema
        label="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
