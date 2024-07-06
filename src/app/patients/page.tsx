import { PatientList } from "./components/patient-list";

export default function PatientPage() {
    return (
        <main className="w-full flex p-16">
            <div className="w-full">
                <PatientList />
            </div>
        </main>
    );
}