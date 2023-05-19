import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import SavedBugs from "../pages/SavedBugs/index";
import AllHistory from "../pages/AllHistory";
import UnsavedEntry from "../pages/UnsavedEntry";
import Tags from "../pages/Tags";
import Settings from "../pages/Settings";
import Popular from "../pages/Popular";
import Recently from "../pages/Recently";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Forgot from "../pages/Forgot";
import Start from "../pages/Start";
import NewPassword from "../pages/NewPassword";
import Verification from "../pages/Verification";

export default function Router() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='Forgot' element={<Forgot />} />
      <Route path='Start' element={<Start />} />
      <Route path='new-password' element={<NewPassword />} />
      <Route path='verification' element={<Verification />} />
      <Route element={<Layout />}>
        <Route path='/' element={<SavedBugs />}>
          <Route path='popular' element={<Popular />} />
          <Route path='recently' element={<Recently />} />
        </Route>
        <Route path='unsaved-bugs' element={<UnsavedEntry />} />
        <Route path='all-history' element={<AllHistory />} />
        <Route path='tags' element={<Tags />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Routes>
  );
}
