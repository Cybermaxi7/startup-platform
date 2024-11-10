import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
    return new Date(date).toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export function formatViews(totalViews: number): string {
    if (totalViews === 0) {
        return "No views yet!";
    }
    return totalViews === 1 ? "1 view" : `${totalViews} views`;
}

export function parseServerActionResponse<T>(response: T) {
    return JSON.parse(JSON.stringify(response));
}
