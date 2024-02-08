import { useLoaderData } from "react-router-dom";
import Client from "../components/Client";

export function loader() {
    const clients = [
        {
            id: 1,
            nombre: 'Juan',
            telefono: 102013313,
            email: "juan@psdadev.com",
            empresa: 'PsdaDev'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@psdadev.com",
            empresa: 'PsdaDev'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@psdadev.com",
            empresa: 'PsdaDev'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguel@psdadev.com",
            empresa: 'PsdaDev'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@psdadev.com",
            empresa: 'PsdaDev'
        },
    ];

    return clients;
}

function Index() {
    const clients = useLoaderData();
    console.log(clients);

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Clients</h1>
            <p className="mt-3">Manage your clients</p>

            {clients.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2">Client</th>
                            <th className="p-2">Contact</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <Client
                                client={client}
                                key={client.id}
                            ></Client>
                        ))}
                    </tbody>

                </table>
            ) : (
                <p className="text-center mt-10">No clients</p>
            )}
        </>
    )
}

export default Index