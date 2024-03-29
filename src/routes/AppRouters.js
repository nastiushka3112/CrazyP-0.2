import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Create from "../Pages/Create/StartCreate";
import Blog from "../Pages/Blog/Blog";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/create" element={<Create />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;
