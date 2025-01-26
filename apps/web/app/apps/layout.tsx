import "@repo/ui/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Total Mini & BMW",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function AppsRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main>{children}</main>
    </div>
  );
}
