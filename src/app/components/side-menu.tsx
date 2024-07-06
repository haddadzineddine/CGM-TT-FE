import Link from "next/link";

export function SideMenu() {
    return (
        <aside className="bg-gray-800 text-white w-64 h-screen p-8">

            <h1 className="text-2xl font-bold">CGM TT</h1>


            <h2 className="text-lg font-bold mt-16">Patient</h2>

            <ul className="mt-4">
                <li className="p-2">
                    <Link href="/patients" className="text-white hover:text-gray-300">Patient List</Link>
                </li>
                <li className="p-2">
                    <Link href="/patients" className="text-white hover:text-gray-300">Add Patient</Link>
                </li>
            </ul>


            <h2 className="text-lg font-bold mt-16">Visite</h2>

            <ul className="mt-4">
                <li className="p-2">
                    <Link href="/visites" className="text-white hover:text-gray-300">Visite List</Link>
                </li>
                <li className="p-2">
                    <Link href="/visites" className="text-white hover:text-gray-300">Add Visite</Link>
                </li>
            </ul>
        </aside>
    );
}