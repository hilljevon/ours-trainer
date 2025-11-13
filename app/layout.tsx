import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "./client-layout";
import ClientAuth from "./client-auth";

export const metadata: Metadata = {
  title: "Training Portal",
  description: "Interactive training and workflow reference for staff.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientAuth>
          <ClientLayout>{children}</ClientLayout>
        </ClientAuth>
      </body>
    </html>
  );
}
