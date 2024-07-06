"use client";

import { useRef } from "react";
import { CreatePatientDto } from "../types/patient";
import { PatientService } from "../services/patient-service";
import { toast } from "react-toastify";

export function CreatePatientForm() {

    const formRef = useRef<HTMLFormElement>(null);

    const handleFormSubmit = async (formData: FormData) => {

        const name = formData.get("name") as string;
        const surname = formData.get("surname") as string;
        const birthDate = formData.get("birthDate") as string;
        const socialSecurityNumber = formData.get("socialSecurityNumber") as string;

        const patient: CreatePatientDto = {
            name,
            surname,
            birthDate,
            socialSecurityNumber
        };

        try {
            const response = await PatientService.createPatient(patient);


            formRef.current?.reset();
            toast.success("Patient created successfully", {
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
            <h1 className="text-3xl font-bold">Create Patient</h1>
            <div className="mt-12 space-y-6">

                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded mt-2" />
                </div>
                <div>
                    <label htmlFor="surname">Surname</label>
                    <input type="text" id="surname" name="surname" className="w-full p-2 border border-gray-300 rounded mt-2" />
                </div>

                <div>
                    <label htmlFor="birthDate">Birth Date</label>
                    <input type="date" id="birthDate" name="birthDate" className="w-full p-2 border border-gray-300 rounded mt-2" />
                </div>

                <div>
                    <label htmlFor="socialSecurityNumber">Social Security Number</label>
                    <input type="text" id="socialSecurityNumber" name="socialSecurityNumber" className="w-full p-2 border border-gray-300 rounded mt-2" />
                </div>

            </div>

            <div className="mt-12">
                <button type="submit" className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-600">Create Patient</button>
            </div>
        </form>
    );
}   