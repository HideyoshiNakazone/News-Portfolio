"use client";


import Header from "@/components/header/header";

const Error = ({
                   error,
                   reset,
               }: {
    error: Error & { digest?: string }
    reset: () => void
}) => {
    return (
        <div className="h-[85vh] w=[100vw] flex items-center justify-center">
            <div className="w-[420px] align-middle">
                <h1 className="text-4xl">Something went wrong</h1>
                <p className="text-xl mt-6">{error.message}. Please try again later.</p>
                <div className="flex justify-center mt-12">
                    <button onClick={reset}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                        Try again
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Error;