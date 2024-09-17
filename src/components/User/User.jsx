import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userID } = useParams();

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>User: {userID}</p>
      </div>
    </div>
  );
};

export default User;
