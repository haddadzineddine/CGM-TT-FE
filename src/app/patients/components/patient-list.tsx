import { PatientService } from "../services/patient-service";





export async function PatientList() {


    const patients = await PatientService.getPatients();

    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold">Patient List</h1>



            <div className="relative overflow-x-auto mt-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                uuid
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Surname
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Birth Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Social Security Number
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.uuid} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {patient.uuid}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {patient.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {patient.surname}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {patient.birthDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {patient.socialSecurityNumber}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}