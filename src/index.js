import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import Movies from "./views/Movies";
import TVSeries from "./views/TVSeries";
import Upcoming from "./views/Upcoming";
import Results from "./views/Results";
import NotFound from "./views/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/movies/:id" element={<Movies />} />
      <Route path="/tvseries" element={<TVSeries />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
