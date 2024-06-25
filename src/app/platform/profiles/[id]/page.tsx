import axios from "axios"
import Link from "next/link";
import { LuArrowBigLeft, LuArrowUpLeft } from "react-icons/lu";

async function getData(id: string) {
    const res = await axios.get(`http://localhost:3000/api/recyclers/${id}`)
    if (res.status === 200) {
        return res.data
    } else {
        throw new Error('Failed to fetch data')
    }
}

export default async function ProfileDetails ({ params }: { params: { id: string }}) {
    const recycler = await getData(params.id);
    return (
        <main className="bg-white w-full p-10">
            <div className="flex-row-between">
                <h2>Details</h2>
                <Link href='/platform/profiles' className="flex-row-center gap-2 bg-gradient-to-r from-blue-groween to-green-groween p-1 rounded text-white"><LuArrowBigLeft className="text-white"/>Volver</Link>
            </div>
            <ul className="flex-col-center mt-28 w-1/2 mx-auto bg-white space-y-2 rounded p-10">
                <h1 className="text-3xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-groween to-green-groween">Recycler Details</h1>
                <li className="flex-row-between w-full bg-gray-100 p-2 rounded">
                    <span className="text-blue-groween font-bold">Id</span>
                    <span>{recycler.id}</span>
                </li>
                <li className="flex-row-between w-full bg-gray-100 p-2 rounded">
                    <span className="text-blue-groween font-bold">Names</span>
                    <span>{recycler.names}</span>
                </li>
                <li className="flex-row-between w-full bg-gray-100 p-2 rounded">
                    <span className="text-blue-groween font-bold">Age</span>
                    <span>{recycler.age}</span>
                </li>
                <li className="flex-row-between w-full bg-gray-100 p-2 rounded">
                    <span className="text-blue-groween font-bold">Address</span>
                    <span>{recycler.address}</span>
                </li>
                <li className="flex-row-between w-full bg-gray-100 p-2 rounded">
                    <span className="text-blue-groween font-bold">Contact</span>
                    <span>{recycler.contact}</span>
                </li>
                <li className="flex-row-between w-full p-2 rounded">
                    <Link href="/" className="bg-blue-groween rounded p-1 text-white">Editar</Link>
                    <Link href="/" className="bg-red-500 rounded p-1 text-white">Eliminar</Link>
                </li>
            </ul>
            {/* <table className="w-full">
                <tbody className="w-full">
                    <tr className="flex-row-between">
                        <td>Id</td>
                        <td>{recycler.id}</td>
                    </tr>
                    <tr>
                        <td>Names</td>
                        <td>{recycler.names}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{recycler.age}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{recycler.address}</td>
                    </tr>
                    <tr>
                        <td>Contact</td>
                        <td>{recycler.contact}</td>
                    </tr>
                </tbody>
            </table> */}
        </main>
    )
}