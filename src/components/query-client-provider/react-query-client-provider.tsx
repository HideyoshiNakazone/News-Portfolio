'use client'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {useState} from "react";

export const ReactQueryClientProvider = ({children}: React.PropsWithChildren) => {
    const [client] = useState(new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    }))
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}