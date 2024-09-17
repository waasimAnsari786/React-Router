import React from "react";
import { useLoaderData } from "react-router-dom";
import GitDetails from "./GitDetails";

const GitHub = () => {
  const data = useLoaderData();

  const desiredValues = [
    ["Name", "name"],
    ["Followers", "followers"],
    ["Following", "following"],
    ["Repositories", "repos_url"],
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col justify-center items-center">
        <img src={data.avatar_url} className="git-img" />
        <div className="my-3 flex justify-between items-center flex-col">
          {desiredValues.map((curElem, i) => {
            return (
              <GitDetails myKey={curElem[0]} myVal={data[curElem[1]]} key={i} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GitHub;

export const fetchData = async () => {
  const response = await fetch("https://api.github.com/users/waasimAnsari786");
  let newData = await response.json();
  return newData;
};
