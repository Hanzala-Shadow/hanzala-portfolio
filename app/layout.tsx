import type { Metadata } from "next";
import "./globals.css";

const title = "Syed Muhammad Hanzala — AI Systems Engineer";
const description = "AI systems engineer building measurable RAG, cloud, multimodal ML, backend, and full-stack products.";
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(vercelHost ? `https://${vercelHost}` : "https://hanzala-portfolio.shadowxoxo.chatgpt.site"),
  title,
  description,
  authors: [{ name: "Syed Muhammad Hanzala" }],
  keywords: ["AI Engineer", "RAG", "LLM", "Full-Stack Engineer", "Python", "Next.js", "AWS"],
  openGraph: { title, description, type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
