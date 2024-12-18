"use client";
import React from "react";
import Link from "next/link";

export const ButtonsCard = ({
  children,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link href={"/"}
    >
      <div className="relative z-40 py-5">{children}</div>
    </Link>
  );
};
