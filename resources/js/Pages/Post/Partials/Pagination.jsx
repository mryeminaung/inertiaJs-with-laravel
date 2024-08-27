import { Link } from "@inertiajs/react";

export default function Pagination({ posts }) {
    return (
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
    );
}
