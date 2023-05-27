"use client";

import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="font-bold text-7xl mb-4">
        Now this is rendered on the client
      </h1>
      <p className="my-6">
        Because we need{" "}
        <span className="text-orange-500 text-2xl">interactivity</span>, like
        this :
      </p>
      <div className="flex justify-center gap-6">
        <button className="btn btn-blue" onClick={() => setCount(count + 1)}>
          Click me :)
        </button>
        <button className="btn" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      <p className="mt-6 text-2xl">Count : {count}</p>
    </div>
  );
};
