import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { Toaster } from "@/components/ui/toaster";

// const workSans = localFont({
//     src: [
//         { path: "./fonts/WorkSans-Black.ttf", weight: "900", style: "normal" },
//         {
//             path: "./fonts/WorkSans-ExtraBold.ttf",
//             weight: "800",
//             style: "normal",
//         },
//         { path: "./fonts/WorkSans-Bold.ttf", weight: "700", style: "normal" },
//         {
//             path: "./fonts/WorkSans-SemiBold.ttf",
//             weight: "600",
//             style: "normal",
//         },
//         { path: "./fonts/WorkSans-Medium.ttf", weight: "500", style: "normal" },
//         {
//             path: "./fonts/WorkSans-Regular.ttf",
//             weight: "400",
//             style: "normal",
//         },
//         { path: "./fonts/WorkSans-Thin.ttf", weight: "200", style: "normal" },
//         {
//             path: "./fonts/WorkSans-ExtraLight.ttf",
//             weight: "100",
//             style: "normal",
//         },
//     ],
//     variable: "--font-work-sans",
//     weight: "100 900",
// });
const workSans = localFont({
    src: [
        {
            path: "./fonts/AvanttTRIAL-Thin-BF6721a86b0fc0e.otf",
            weight: "100",
            style: "normal",
        },
        {
            path: "./fonts/AvanttTRIAL-ThinItalic-BF6721a86b0f7e0.otf",
            weight: "100",
            style: "italic",
        },
        {
            path: "./fonts/AvanttTRIAL-Light-BF6721a86aa5f5e.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/AvanttTRIAL-LightItalic-BF6721a86ad7d02.otf",
            weight: "300",
            style: "italic",
        },
        {
            path: "./fonts/AvanttTRIAL-Regular-BF6721a86b1a848.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/AvanttTRIAL-RegularItalic-BF6721a86b15544.otf",
            weight: "400",
            style: "italic",
        },
        {
            path: "./fonts/AvanttTRIAL-Medium-BF6721a86adebb3.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/AvanttTRIAL-MediumItalic-BF6721a86b16ec9.otf",
            weight: "500",
            style: "italic",
        },
        {
            path: "./fonts/AvanttTRIAL-SemiBold-BF6721a86b1576e.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/AvanttTRIAL-SemiBoldItalic-BF6721a86b1685f.otf",
            weight: "600",
            style: "italic",
        },
        {
            path: "./fonts/AvanttTRIAL-Bold-BF6721a86b15f0a.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/AvanttTRIAL-BoldItalic-BF6721a86b1a848.otf",
            weight: "700",
            style: "italic",
        },
        {
            path: "./fonts/AvanttTRIAL-ExtraBold-BF6721a86b196a3.otf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./fonts/AvanttTRIAL-ExtraBoldItalic-BF6721a86b19c2a.otf",
            weight: "800",
            style: "italic",
        },
        {
            path: "./fonts/AvanttTRIAL-Heavy-BF6721a86b17e0b.otf",
            weight: "900",
            style: "normal",
        },
        {
            path: "./fonts/AvanttTRIAL-HeavyItalic-BF6721a86b17e69.otf",
            weight: "900",
            style: "italic",
        },
    ],
    variable: "--font-work-sans",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "YC Directory",
    description: "Pitch Vote and Grow",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={workSans.variable}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
