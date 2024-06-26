'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface RegisterNewUserProps {
    email: string;
    code: string;
}

export default function CreateUser() {
  const { register, handleSubmit } = useForm<RegisterNewUserProps>();
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterNewUserProps> = async (data) => {
    const { email, code } = data;
    const user = await axios.post(`${process.env.VERCEL_ENV}/api/users/create`, { email, code })
    if(user.status === 200) {
      alert('User created successfully')
    }
    router.push('/platform/configuration')
  };

  return (
    <main className="bg-white w-full p-2 md:p-10">
      <div className="flex justify-between">
        <h1>Create new user</h1>
        <Link href="/platform/configuration" className="p-2 bg-gradient-to-r from-green-groween to-blue-groween text-white rounded">Back</Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full md:w-1/3 mt-28 space-y-6 rounded p-2 md:p-10 shadow-lg">
        <h1 className="text-center bg-clip-text text-transparent text-2xl bg-gradient-to-r from-green-groween to-blue-groween">Create a new user</h1>
        <div className="flex justify-between p-1 rounded">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="bg-gray-100 rounded p-1 outline-none" 
            {...register('email', { required: true })} 
          />
        </div>
        <div className="flex justify-between p-1 rounded">
          <label htmlFor="code">Employee code</label>
          <input 
            type="text" 
            id="code" 
            className="bg-gray-100 rounded p-1 outline-none" 
            {...register('code', { required: true })} 
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="self-end p-2 bg-gradient-to-r from-green-groween to-blue-groween text-white rounded mt-5">Create</button>
        </div>
      </form>
    </main>
  );
}
