"use client";

import { PatientService } from "@/app/patients/services/patient-service";
import { Patient } from "@/app/patients/types/patient";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { CreateVisiteDto } from "../types/visite";
import { VisiteService } from "../services/visite-service";

export function CreateVisiteForm() {

    const [patients, setPatients] = useState<Patient[]>([]);

    useEffect(() => {
        PatientService.getPatients().then((patients) => {
            setPatients(patients);
        });
    }, []);

    const formRef = useRef<HTMLFormElement>(null);

    const handleFormSubmit = async (formData: FormData) => {

        const visiteDate = formData.get("visiteDate") as string;
        const type = formData.get("type") as "AT_HOME" | "AT_OFFICE";
        const reason = formData.get("reason") as string;
        const familyHistory = formData.get("familyHistory") as string;
        const patientUuid = formData.get("patientUuid") as string;

        const visite: CreateVisiteDto = {
            visiteDate,
            type,
            reason,
            familyHistory,
            patientUuid
        };

        try {
            await VisiteService.createVisite(visite);

            formRef.current?.reset();
            toast.success("Visite created successfully", {
                autoClose: 1000,
                position: "bottom-right",
            });

        } catch (error) {
            console.error(error);

            toast.error("An error occurred", {
                autoClose: 1000,
                position: "bottom-right",
            });
        }

    }

    return (
        <form className="p-8" ref={formRef} action={handleFormSubmit}>
            <h1 className="text-3xl font-bold">Create Visite For Patient</h1>
            <div className="mt-12 space-y-6">

                <div>
                    <label htmlFor="visiteDate">Visite Date</label>
                    <input type="date" id="visiteDate" name="visiteDate" className="w-full p-2 border border-gray-300 rounded mt-2" />
                </div>

                <div>
                    <label htmlFor="type">Type</label>
                    <select id="type" name="type" className="w-full p-2 border border-gray-300 rounded mt-2">
                        <option value="AT_HOME">At Home</option>
                        <option value="AT_OFFICE">At Office</option>
                    </select>

                </div>

                <div>
                    <label htmlFor="reason">Reason</label>
                    <textarea id="reason" name="reason" className="w-full p-2 border border-gray-300 rounded mt-2"></textarea>
                </div>

                <div>
                    <label htmlFor="familyHistory">Family History</label>
                    <textarea id="familyHistory" name="familyHistory" className="w-full p-2 border border-gray-300 rounded mt-2"></textarea>
                </div>

                {
                    patients.length > 0 && (
                        <div>
                            <label htmlFor="patient">Patient</label>
                            <select id="patient" name="patientUuid" className="w-full p-2 border border-gray-300 rounded mt-2">
                                {patients.map((patient) => (
                                    <option key={patient.uuid} value={patient.uuid}>{patient.name} {patient.surname}</option>
                                ))}
                            </select>
                        </div>
                    )
                }

            </div>

            <div className="mt-12">
                <button
                    disabled={patients.length === 0}
                    type="submit" className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-600">Create Visite</button>
            </div>
        </form>
    );
}   