import React from "react";

export default function GitDetails({ myKey, myVal }) {
  return (
    <>
      <p className="font-bold">
        {myKey}: <span>{myVal}</span>
      </p>
    </>
  );
}
