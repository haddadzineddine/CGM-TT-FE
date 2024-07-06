import { CreatePatientForm } from "../components/create-patient-form";

export default function CreatePatientPage() {
    return (
        <main className="w-full flex p-16">
            <div className="w-full">
                <CreatePatientForm />
            </div>
        </main>
    );
}