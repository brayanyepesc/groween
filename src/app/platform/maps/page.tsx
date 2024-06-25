import { getRecyclersAddressesWithMaterials } from "@/app/api/actions/GetMaterialDirections";
import { ClientMap } from "@/components/atoms";

export default async function Maps(){
    //Trae las direcciones de los recicladores con materiales el día de hoy
    const addresses = await getRecyclersAddressesWithMaterials(new Date());
    return (
        <div className="w-full">
            <ClientMap addresses={addresses}/>
        </div>
    )
}