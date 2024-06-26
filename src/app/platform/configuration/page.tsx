import { DeleteUserBtn } from "@/components/atoms";
import axios from "axios";
import Link from "next/link";

async function getData() {
    const res = await axios.get(`${process.env.VERCEL_ENV}/api/users`)
    if (res.status === 200) {
        return res.data
    } else {
        throw new Error('Failed to fetch data')
    }
}

export default async function Configuration (){
    const users = await getData();
    return (
        <main className="bg-white w-full p-2 md:p-10">
            <div className="flex-row-between mb-10">
                <h1>Configuration</h1>
                <Link href="/platform/users/create" className="p-2 bg-gradient-to-r from-green-groween to-blue-groween text-white rounded">Create new user</Link>
                <Link href="/" className="hidden md:flex p-2 bg-gradient-to-r from-green-groween to-blue-groween text-white rounded">Back</Link>
            </div>
            {/* ESCRITORIO */}
            <table className="w-full hidden md:table border p-5 shadow-md rounded mt-10">
                <thead className="bg-blue-groween rounded text-white text-sm">
                    <tr>
                        <th className="py-2">Id</th>
                        <th className="py-2">Email</th>
                        <th className="py-2">Employee Code</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center text-sm">
                    {
                        users.map((user: any) => (
                            <tr className="border-b" key={user.id}>
                                <td className="py-2">{user.id}</td>
                                <td className="py-2">{user.email}</td>
                                <td className="py-2">{user.code}</td>
                                <td className="py-2">
                                    <DeleteUserBtn id={user.id} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* MOBILE */}
            <div className="flex-col-center md:hidden space-y-4">
                {
                    users.map((user: any) => (
                        <div className="flex flex-col border-b p-2 shadow-md" key={user.id}>
                            <p>{user.id}</p>
                            <p>{user.email}</p>
                            <p>{user.code}</p>
                            <Link href={`/`} className="p-1 border text-white bg-red-500">Delete</Link>
                        </div>
                    ))
                }
            </div> 
        </main>
    )
}