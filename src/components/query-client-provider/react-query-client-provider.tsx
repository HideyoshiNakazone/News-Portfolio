'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {useState} from "react";

export const ReactQueryClientProvider = ({children}: React.PropsWithChildren) => {
    const CACHE_DURATION = process.env.NEXT_PUBLIC_CACHE_DURATION !== undefined
        ? Number(process.env.NEXT_PUBLIC_CACHE_DURATION) : 60 * 1000;

    const [client] = useState(new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: CACHE_DURATION,
            },
        },
    }))
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}