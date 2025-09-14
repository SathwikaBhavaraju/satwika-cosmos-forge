import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { FuturisticCursor } from "../ui/futuristic-cursor";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background bg-particles relative">
      <div className="bg-grid absolute inset-0" />
      <FuturisticCursor />
      <Navbar />
      <main className="pt-24">
        {children}
      </main>
    </div>
  );
};