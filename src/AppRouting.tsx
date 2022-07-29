import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/login/Login";
import GuardedRoute from "./guards/AuthGuard";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import Extra from "./pages/extra/Extra";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";

const AppRouting = () => {
    return (
        <Routes>
            <Route index element={<Home />} />

            <Route path="login" element={<Login />} />
            <Route
                path="blogs"
                element={
                    <React.Suspense fallback={<>...</>}>
                        <Blogs />
                    </React.Suspense>
                }
            />
            <Route
                path="products"
                element={
                    <React.Suspense fallback={<>...</>}>
                        <Products />
                    </React.Suspense>
                }
            />
            <Route
                path="contact"
                element={
                    <React.Suspense fallback={<>...</>}>
                        <Contact />
                    </React.Suspense>
                }
            />

            <Route path="/extra" element={
                <GuardedRoute path='/extra'>
                    <Extra />
                </GuardedRoute>
            } />


            <Route path="*" element={
                <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                </main>
            } />
        </Routes>
    );
}

export default AppRouting;