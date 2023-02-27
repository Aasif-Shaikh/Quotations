import { LoadingOverlay, MantineProvider, Text } from "@mantine/core";
import { NavbarMinimal } from "./components/NavbarMinimal";
import { SearchBar } from "./components/SearchBar";
import NavHeader from "./components/NavHeader";
import { Outlet, Router, Routes, Route, BrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
// Pages
/* const Login = React.lazy(() => import("./components/LoginForm"));
const Register = React.lazy(() => import("./components/SignupForm"));
export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NavHeader />
    </MantineProvider>
  );
} */

// Navbar
const AddQuote = lazy(() => import("./components/AddQuote"));
const Home = lazy(() => import("./components/NavHeader"));

// Auth
const Login = lazy(() => import("./components/LoginForm"));
const Registration = lazy(() => import("./components/SignupForm"));
// Components
/* const LoginSettings = lazy(() => import("@components/LoginSettings")); */

function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="forget-password" element={<Forget />} /> */}
          {/*  <Route path="verification" element={<Verification />} /> */}
          <Route path="registration" element={<Registration />} />
          <Route path="add-quote" element={<AddQuote />} />
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
}
export default App;
