import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, posts }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    All Posts
                </h2>
            }
        >
            <Head title="All Posts" />

            <div className="py-3">
                <div className="mx-auto max-w-7xl sm:px-4">
                    <div className="p-4 space-y-3 overflow-hidden bg-white rounded-lg shadow-sm dark:bg-gray-600">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-300">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden px-6 py-3 md:inline"
                                        >
                                            Body
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden px-6 py-3 "
                                        >
                                            Created At
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map((post) => (
                                        <tr
                                            key={post.id}
                                            className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700"
                                        >
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {post.id}
                                            </th>
                                            <td className="px-6 py-4">
                                                {post.title}
                                            </td>
                                            <td className="hidden px-6 py-4 md:inline">
                                                {post.body}
                                            </td>
                                            <td className="hidden px-6 py-4">
                                                {post.createdAt}
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link
                                                    href="#"
                                                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                >
                                                    Delete
                                                </Link>
                                                <Link
                                                    href="#"
                                                    class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
