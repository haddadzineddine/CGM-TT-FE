import { Suspense } from "react";
import { PatientList } from "./components/patient-list";
import { Loading } from "../components/loading";

export default function PatientPage() {
    return (
        <main className="w-full flex p-16">
            <div className="w-full">

                <Suspense fallback={<Loading />}>
                    <PatientList />
                </Suspense>
            </div>
        </main>
    );
}