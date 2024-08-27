import { Link } from "@inertiajs/react";

export default function PostCard({ post, submit }) {
    return (
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
            <td className="px-6 py-4">{post.title}</td>
            <td className="hidden px-6 py-4 md:block">{post.body}</td>
            <td className="hidden px-6 py-4">{post.createdAt}</td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    <form onSubmit={(e) => submit(e, post)}>
                        <button
                            type="submit"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                            Delete
                        </button>
                    </form>
                    <Link
                        href={route("posts.edit", post)}
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                    >
                        Edit
                    </Link>
                    <Link
                        href={route("posts.show", post)}
                        className="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-green-900"
                    >
                        View
                    </Link>
                </div>
            </td>
        </tr>
    );
}
