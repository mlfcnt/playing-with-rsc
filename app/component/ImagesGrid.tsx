import Image from "next/image";
import React from "react";

export const ImagesGrid = ({ srcs }: { srcs: string[] }) => {
  return (
    <div className="flex gap-2 flex-wrap flex-row">
      {srcs.map((src) => (
        <Image key={src} src={src} alt="blabla" width={200} height={200} />
      ))}
    </div>
  );
};
