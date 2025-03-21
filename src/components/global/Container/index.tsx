"use client";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="card bg-base-100 mx-6 px-6 my-6 py-6">{children}</div>;
}
