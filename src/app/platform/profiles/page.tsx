import axios from "axios";
import Link from "next/link";

async function getData() {
    const res = await axios.get('http://localhost:3000/api/recyclers')
    if (res.status === 200) {
        return res.data
    } else {
        throw new Error('Failed to fetch data')
    }
}

export default async function Dashboard (){
    const recyclers = await getData();
    return (
        <main className="bg-white w-full p-2 md:p-10">
            <div className="flex-row-between">
                <h1>List</h1>
                <Link href="/" className="p-2 bg-gradient-to-r from-green-groween to-blue-groween text-white rounded">Back</Link>
            </div>
            {/* ESCRITORIO */}
            <table className="w-full hidden md:table border p-5 shadow-md rounded mt-10">
                <thead className="bg-blue-groween rounded text-white text-sm">
                    <tr>
                        <th className="py-2">Id</th>
                        <th className="py-2">Names</th>
                        <th className="py-2">Age</th>
                        <th className="py-2">Address</th>
                        <th className="py-2">Contact</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center text-sm">
                    {
                        recyclers.map((recycler: any) => (
                            <tr className="border-b" key={recycler.id}>
                                <td className="py-2">{recycler.id}</td>
                                <td className="py-2">{recycler.names}</td>
                                <td className="py-2">{recycler.age}</td>
                                <td className="py-2">{recycler.address}</td>
                                <td>{recycler.contact}</td>
                                <td className="py-2">
                                    <Link className="p-1 rounded bg-green-groween" href={`/platform/profiles/${recycler.id}`}>Details</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* MOBILE */}
            <div className="flex-col-center md:hidden space-y-4">
                {
                    recyclers.map((recycler: any) => (
                        <div className="flex flex-col border-b p-2 shadow-md" key={recycler.id}>
                            <p>{recycler.names}</p>
                            <p>{recycler.age} años</p>
                            <p>{recycler.address}</p>
                            <p>{recycler.contact}</p>
                            <Link href={`/platform/profiles/${recycler.id}`} className="p-1 border text-white bg-green-groween">Details</Link>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}