import React from "react";

export default function GitDetails({ myKey, myVal }) {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-1">
        <span className="font-bold">{myKey}:</span>
        <span>{myVal}</span>
      </div>
    </>
  );
}
