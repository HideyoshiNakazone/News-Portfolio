import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ReactQueryClientProvider} from "@/components/query-client-provider/react-query-client-provider";
import Header from "@/components/header/header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "News Portfolio",
    description: "Simple news portfolio written in Next.js",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ReactQueryClientProvider>
            <Header></Header>
            <div className="h-[85vh]">{children}</div>
        </ReactQueryClientProvider>
        </body>
        </html>
    );
}
