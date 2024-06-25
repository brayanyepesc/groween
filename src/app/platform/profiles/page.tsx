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
        <main className="bg-white w-full p-10">
            <div className="flex-row-between">
                <h1>List</h1>
                <p>Volver</p>
            </div>
            <table className="w-full border p-5 shadow-md rounded mt-10">
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
        </main>
    )
}