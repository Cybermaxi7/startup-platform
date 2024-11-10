import { z } from "zod";

export const formSchema = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(20).max(500),
    category: z.string().min(2).max(20),
    link: z
        .string()
        .url()
        .refine(async (url) => {
            try {
                // Try HEAD request first
                const headRes = await fetch(url, {
                    method: "HEAD",
                    headers: {
                        Accept: "image/*",
                    },
                });

                if (headRes.ok) {
                    const contentType = headRes.headers.get("content-type");
                    if (contentType?.startsWith("image/")) {
                        return true;
                    }
                }

                // If HEAD fails, try GET request
                const getRes = await fetch(url, {
                    method: "GET",
                    headers: {
                        Accept: "image/*",
                    },
                });

                if (getRes.ok) {
                    const contentType = getRes.headers.get("content-type");
                    if (contentType?.startsWith("image/")) {
                        return true;
                    }
                }

                // Check if URL ends with common image extensions
                const imageExtensions = [
                    ".jpg",
                    ".jpeg",
                    ".png",
                    ".gif",
                    ".webp",
                    ".svg",
                    ".bmp",
                ];
                if (
                    imageExtensions.some((ext) =>
                        url.toLowerCase().endsWith(ext),
                    )
                ) {
                    return true;
                }

                // Check if URL contains common image CDN patterns
                const cdnPatterns = [
                    "cloudfront.net",
                    "cloudinary.com",
                    "amazonaws.com",
                    "githubusercontent.com",
                    "imgix.net",
                    "images.unsplash.com",
                ];
                if (
                    cdnPatterns.some((pattern) => url.includes(pattern)) &&
                    url.match(/\.(jpg|jpeg|png|gif|webp|svg|bmp)/i)
                ) {
                    return true;
                }

                return false;
            } catch (error) {
                // If fetch fails, fall back to checking URL patterns
                const imageExtensions = [
                    ".jpg",
                    ".jpeg",
                    ".png",
                    ".gif",
                    ".webp",
                    ".svg",
                    ".bmp",
                ];
                if (
                    imageExtensions.some((ext) =>
                        url.toLowerCase().endsWith(ext),
                    )
                ) {
                    return true;
                }

                const cdnPatterns = [
                    "cloudfront.net",
                    "cloudinary.com",
                    "amazonaws.com",
                    "githubusercontent.com",
                    "imgix.net",
                    "images.unsplash.com",
                ];
                if (
                    cdnPatterns.some((pattern) => url.includes(pattern)) &&
                    url.match(/\.(jpg|jpeg|png|gif|webp|svg|bmp)/i)
                ) {
                    return true;
                }

                return false;
            }
        }, "Please provide a valid image URL"),
    pitch: z.string().min(10),
});
