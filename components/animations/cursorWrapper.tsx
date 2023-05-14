"use client";

import { useEffect, useState } from "react";

const CustomCursorWrapper: React.FC = () => {
  const [CustomCursor, setCustomCursor] = useState<React.FC | null>(null);

  useEffect(() => {
    async function loadCustomCursor() {
      const { default: CustomCursor } = await import("./cursor");
      setCustomCursor(() => CustomCursor);
    }

    loadCustomCursor();
  }, []);

  return CustomCursor ? <CustomCursor /> : null;
};

export default CustomCursorWrapper;
