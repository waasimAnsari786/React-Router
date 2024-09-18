import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userID } = useParams();

  return (
    <div className="container mx-auto bg-blue-950 text-white p-4">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <p className="text-3xl font-bold">
          User: <span className="font-normal">{userID}</span>
        </p>
      </div>
    </div>
  );
};

export default User;
