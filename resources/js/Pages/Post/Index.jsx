import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ auth, posts }) {
    const { delete: destroy } = useForm();
    const { flash } = usePage().props;
    const [query, setQuery] = useState("");

    const submit = (e, post) => {
        e.preventDefault();
        destroy(route("posts.destroy", post));
    };

    console.log(route().current("posts.index"));

    const searchQuery = (e) => {
        e.preventDefault();

        router.get(route("posts.index", { query }));
    };

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

            <div className="px-2 py-3">
                <div className="mx-auto max-w-7xl sm:px-4">
                    <div className="p-4 space-y-3 overflow-hidden bg-white rounded-lg shadow-sm dark:bg-gray-600">
                        <div className="flex items-center justify-between">
                            <Link
                                href={route("posts.create")}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                Create Post
                            </Link>
                            <form onSubmit={searchQuery} className="space-x-3">
                                <input
                                    type="text"
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="rounded-md"
                                    placeholder="Search by title"
                                />
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Search
                                </button>
                            </form>
                        </div>

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
                                            className="hidden px-6 py-3 md:block"
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
                                    {posts.data.map((post) => (
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
                                            <td className="hidden px-6 py-4 md:block">
                                                {post.body}
                                            </td>
                                            <td className="hidden px-6 py-4">
                                                {post.createdAt}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <form
                                                        onSubmit={(e) =>
                                                            submit(e, post)
                                                        }
                                                    >
                                                        <button
                                                            type="submit"
                                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                        >
                                                            Delete
                                                        </button>
                                                    </form>
                                                    <Link
                                                        href={route(
                                                            "posts.edit",
                                                            post
                                                        )}
                                                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "posts.show",
                                                            post
                                                        )}
                                                        className="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-green-900"
                                                    >
                                                        View
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex items-center justify-between px-3 my-3">
                                {/* <!-- Previous Button --> */}
                                <Link
                                    href={posts.links.prev}
                                    className="flex items-center justify-center h-8 px-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Previous
                                </Link>

                                {/* <!-- Next Button --> */}
                                <Link
                                    href={posts.links.next}
                                    className="flex items-center justify-center h-8 px-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg ms-3 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Next
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
