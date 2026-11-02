"use client";

import React, { useEffect, useState } from "react";

export default function DynamicYear() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  return <p className="w-full text-center">© {year} Andrew Leevey. All rights reserved.</p>;
}
