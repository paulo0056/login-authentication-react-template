"use client";
import "../globals.css";
import { Sidebar } from "@/components/global/Sidebar";
import { Container } from "@/components/global/Container";
import { useState } from "react";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="fixed top-0 left-0 h-full">
        <Sidebar onToggle={(expanded) => setIsSidebarExpanded(expanded)} />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarExpanded ? "ml-64" : "ml-20"
        } overflow-auto`}
      >
        <Container>{children}</Container>
      </div>
    </div>
  );
}
