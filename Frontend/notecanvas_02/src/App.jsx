import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import CanvasPage from "./pages/CanvasPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Playground from "./pages/Playground";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <div>404 not found</div>,
    },
    {
        path: "/canvas",
        element: <CanvasPage />,
    },
    {
        path: "/payground",
        element: <Playground />,
    },
]);

function App() {
    // return <RouterProvider router={router} />;
    return (
        <DndProvider backend={HTML5Backend}>
            <Playground />;
        </DndProvider>
    );
    // return <CanvasPage />;
}

export default App;
