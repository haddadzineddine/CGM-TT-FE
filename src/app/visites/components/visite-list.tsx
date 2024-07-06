import { VisiteService } from "../services/visite-service";

export async function VisiteList() {


    const visites = await VisiteService.getVisites();

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold">Visites List</h1>



            <div className="relative overflow-x-auto mt-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                uuid
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Visit Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Reason
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Family History
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Patient
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {visites.map((visite) => (
                            <tr key={visite.uuid} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {visite.uuid}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {visite.visiteDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {visite.type}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {visite.reason}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {visite.familyHistory}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {visite.patient.name} {visite.patient.surname}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <a href={`/visites/update/${visite.uuid}`} className="text-blue-500 hover:text-blue-600">Update</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}