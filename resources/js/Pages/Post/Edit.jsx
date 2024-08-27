import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, post }) {
    const { data, setData, put, processing, errors, reset, clearErrors } =
        useForm({
            title: post.title,
            body: post.body,
        });

    const submit = (e) => {
        e.preventDefault();

        put(route("posts.update", post), {
            preserveState: true,
            onSuccess: () => reset("title", "body"),
        });
        clearErrors("title", "body");
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Edit a Post
                </h2>
            }
        >
            <Head title="Edit Post" />

            <div className="mx-auto mt-3 max-w-7xl px sm:px-4">
                <div className="p-4 space-y-3 overflow-hidden bg-white rounded-lg shadow-sm dark:bg-gray-600">
                    <form onSubmit={submit}>
                        <div className="mb-6">
                            <label
                                htmlFor="title"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                value={data.title}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                // required
                            />
                            <InputError
                                message={errors.title}
                                className="mt-2"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="body"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Body
                            </label>
                            <textarea
                                rows={7}
                                id="body"
                                name="body"
                                onChange={(e) =>
                                    setData("body", e.target.value)
                                }
                                value={data.body}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                // required
                            ></textarea>
                            <InputError
                                message={errors.body}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex items-center justify-end">
                            <Link
                                href={route("posts.index")}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                Cancel
                            </Link>
                            <button
                                disabled={processing}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
