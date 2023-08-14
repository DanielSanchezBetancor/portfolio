import "../styles/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel Sanchez Betancor - Front End Specialist",
  description: "Welcome to the portfolio of Daniel Sanchez Betancor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
