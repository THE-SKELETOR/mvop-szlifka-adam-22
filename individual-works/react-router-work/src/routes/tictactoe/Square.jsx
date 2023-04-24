import React from "react";

export default function Square({ value, onClick, disabled }) {
  return (
    <button
      className="text-5xl font-bold border-8 border-blue-950 w-screen h-full m-1 text-center box-border mx-10 md:mx-20 bg-blue-200"
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
};
