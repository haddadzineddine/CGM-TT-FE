import { Suspense } from "react";
import { VisiteList } from "./components/visite-list";
import { Loading } from "../components/loading";

export default function VisitePage() {

    return (
        <main className="w-full flex p-16">
            <div className="w-full">
                <Suspense fallback={<Loading />}>
                    <VisiteList />
                </Suspense>
            </div>
        </main>
    );
}