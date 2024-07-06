import { UpdateVisiteForm } from "../../components/update-visite-form";

export default function UpdateVisitePage({ params }: { params: { uuid: string } }) {



    return (
        <main className="w-full flex p-16">
            <div className="w-full">
                <UpdateVisiteForm visiteUuid={params.uuid} />
            </div>
        </main>
    );
}