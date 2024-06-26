import axios from "axios"
import Link from "next/link";
import { LuArrowBigLeft, LuArrowUpLeft } from "react-icons/lu";

async function getData(id: string) {
    const res = await axios.get(`${process.env.GROWEEN_APP_URL}/api/recyclers/${id}`)
    if (res.status === 200) {
        return res.data
    } else {
        throw new Error('Failed to fetch data')
    }
}

export default async function ProfileDetails ({ params }: { params: { id: string }}) {
    const recycler = await getData(params.id);
    return (
        <main className="bg-white w-full p-2 md:p-10">
            <div className="flex-row-between">
                <h2>Details</h2>
                <Link href='/platform/profiles' className="flex-row-center gap-1 md:gap-2 bg-gradient-to-r from-blue-groween to-green-groween p-1 rounded text-white"><LuArrowBigLeft className="text-white"/>Volver</Link>
            </div>
            <ul className="flex-col-center w-full md:w-1/2 mx-auto bg-white space-y-2 rounded p-2 md:p-10">
                <h1 className="text-2xl md:text-3xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-groween to-green-groween">Recycler Details</h1>
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
            </ul>
            {
                recycler.materials.length > 0 ? (
                    <ul>
                        <h2 className="text-center text-3xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-groween to-green-groween">Assigned Materials</h2>
                        <li className="grid grid-cols-4 place-items-center w-full bg-green-groween p-2 rounded my-2">
                            <span className="text-white font-bold">Id</span>
                            <span className="text-white font-bold">Description</span>
                            <span className="text-white font-bold">Date</span>
                            <span className="text-white font-bold">Quantity</span>
                        </li>
                        {
                            recycler.materials.map((material: any) => {
                                const date = new Date(material.date)
                                return (
                                    <li key={material.id} className="grid grid-cols-4 place-items-center w-full bg-gray-100 p-2 rounded my-2">
                                        <span className="text-blue-groween font-bold">{material.id}</span>
                                        <span>{material.description}</span>
                                        <span>{date.toLocaleDateString('es-ES')}</span>
                                        <span>{material.quantity}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                ) : (<h2>This user doeen't have material assigned</h2>)
            }
        </main>
    )
}