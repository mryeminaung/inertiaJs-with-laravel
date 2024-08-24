import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function About({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    About Me
                </h2>
            }
        >
            <Head title="About" />

            <div className="mx-auto text-white max-w-7xl px sm:px-4">
                <div className="px-4">Comming Soon...</div>
            </div>
        </AuthenticatedLayout>
    );
}
