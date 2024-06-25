'use client'
import { SignInOptions, signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface LoginFormInputs {
  email: string;
  code: string;
}

export default function Ingresar() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    const { email, code } = data;
    const signInData: SignInOptions = {
      email,
      code,
    };
    signIn('credentials', signInData)
  };

  return (
    <main className="w-full h-screen flex-col-center">
      <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-groween to-blue-groween">Login</h1>
      <p className="my-4">Welcome back, we are excited to have you here!.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg rounded p-20 space-y-6">
        <div className="w-full flex flex-col">
          <label htmlFor="email" className="text-gray-400 text-sm mb-2">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            type="text"
            className="w-full shadow-lg rounded bg-gray-100 p-1 outline-none"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="code" className="text-gray-400 text-sm mb-2">Code</label>
          <input
            {...register("code", { required: "Code is required" })}
            type="text"
            className="w-full shadow-lg rounded bg-gray-100 p-1 outline-none"
          />
          {errors.code && <span className="text-red-500 text-sm">{errors.code.message}</span>}
        </div>
        <button type="submit" className="w-full rounded p-1 bg-gradient-to-r from-green-groween to-blue-groween text-white">Login</button>
      </form>
      <Link href='/' className="text-sm mt-4 text-gray-400">¿Quieres volver?</Link>
    </main>
  );
}
