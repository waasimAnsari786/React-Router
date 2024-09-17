import React from "react";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import User from "./User/User";
import GitHub, { fetchData } from "./GitHub/GitHub";
import Layout from "./Layout";

const MyWeb = () => {
  const textContent = [
    "Discover how our platform helps you stay productive and connected from anywhere.",
    "Join a growing community of remote professionals.",
    "Whether you're working from home or traveling the world, we're here to support your journey.",
  ];

  const textContent2 = [
    "At [Your Company Name], we are dedicated to transforming the way people work.",
    "Our platform empowers individuals and teams to collaborate and innovate from anywhere.",
    "Join us in shaping the future of remote work.",
  ];

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Layout />}>
        <Route
          path=""
          element={
            <Home
              ctnr2Class="flex justify-center items-center mt-8"
              heading="Welcome to Our Platform"
              slogan="Empowering Remote Work"
              textContent={textContent}
              firstImage="https://i.ibb.co/5BCcDYB/Remote2.png"
              secondImage="https://i.ibb.co/2M7rtLk/Remote1.png"
            />
          }
        />

        <Route
          path="about-us"
          element={
            <Home
              ctnr2Class="hidden"
              heading="About Us"
              slogan="Innovating the Future of Work"
              textContent={textContent2}
              firstImage="https://i.ibb.co/5BCcDYB/Remote2.png"
              secondImage="https://i.ibb.co/5BCcDYB/Remote2.png"
            />
          }
        />
        <Route path="contact-us" element={<Contact />} />
        <Route path="user/:userID" element={<User />} />
        <Route loader={fetchData} path="github" element={<GitHub />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default MyWeb;
