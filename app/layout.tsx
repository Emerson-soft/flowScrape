import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/components/providers/AppProviders";
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
      afterSignOutUrl={"/sign-in"}
      appearance={{
        elements: {
          formButtonPrimary: "bg-primary hove:bg-primary/90 text-sm !shadow-none"
        }
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <AppProvider>
            {children}
          </AppProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
