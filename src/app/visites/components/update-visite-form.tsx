"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { UpdateVisiteDto, Visite } from "../types/visite";
import { VisiteService } from "../services/visite-service";


type UpdateVisiteFormProps = {
    visiteUuid: string;
}

export function UpdateVisiteForm({ visiteUuid }: UpdateVisiteFormProps) {

    const [visite, setVisite] = useState<Visite | null>(null);

    useEffect(() => {
        VisiteService.getVisite(visiteUuid).then((visite) => {
            setVisite(visite);
        });
    }, [visiteUuid]);

    const formRef = useRef<HTMLFormElement>(null);

    const handleFormSubmit = async (formData: FormData) => {

        const visiteDate = formData.get("visiteDate") as string;
        const type = formData.get("type") as "AT_HOME" | "AT_OFFICE";
        const reason = formData.get("reason") as string;
        const familyHistory = formData.get("familyHistory") as string;

        const visite: UpdateVisiteDto = {
            visiteDate,
            type,
            reason,
            familyHistory,
        };

        try {
            await VisiteService.updateVisite(visiteUuid, visite);

            toast.success("Visite updated successfully", {
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
            <h1 className="text-3xl font-bold">Update Visite</h1>
            <div className="mt-12 space-y-6">

                <div>
                    <label htmlFor="visiteDate">Visite Date</label>
                    <input
                        defaultValue={visite?.visiteDate}
                        type="date" id="visiteDate" name="visiteDate" className="w-full p-2 border border-gray-300 rounded mt-2" />
                </div>

                <div>
                    <label htmlFor="type">Type</label>
                    <select
                        defaultValue={visite?.type}
                        id="type" name="type" className="w-full p-2 border border-gray-300 rounded mt-2">
                        <option value="AT_HOME">At Home</option>
                        <option value="AT_OFFICE">At Office</option>
                    </select>

                </div>

                <div>
                    <label htmlFor="reason">Reason</label>
                    <textarea
                        defaultValue={visite?.reason}
                        id="reason" name="reason" className="w-full p-2 border border-gray-300 rounded mt-2"></textarea>
                </div>

                <div>
                    <label htmlFor="familyHistory">Family History</label>
                    <textarea
                        defaultValue={visite?.familyHistory}
                        id="familyHistory" name="familyHistory" className="w-full p-2 border border-gray-300 rounded mt-2"></textarea>
                </div>

            </div>

            <div className="mt-12">
                <button type="submit" className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-600">Create Visite</button>
            </div>
        </form >
    );
}   