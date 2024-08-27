import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Pagination from "./Partials/Pagination";
import PostCard from "./Partials/PostCard";

export default function Index({ auth, posts, filter: { search } }) {
    const { delete: destroy, get } = useForm();

    const submit = (e, post) => {
        e.preventDefault();
        destroy(route("posts.destroy", post));
    };

    const searchQuery = (query) => {
        get(route("posts.index", { search: query ?? "" }), {
            preserveState: true,
            replace: true,
        });
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
                            <input
                                type="text"
                                onChange={(e) => searchQuery(e.target.value)}
                                value={search ?? ""}
                                className="rounded-md"
                                placeholder="Search by title"
                            />
                            <button className="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Search
                            </button>
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
                                        <PostCard
                                            key={post.id}
                                            post={post}
                                            submit={submit}
                                        />
                                    ))}
                                </tbody>
                            </table>
                            <Pagination posts={posts} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
