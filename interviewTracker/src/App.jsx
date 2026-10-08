import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import DSA from "./pages/DSA";
import GitGithub from "./pages/GitGithub";
import FullStack from "./pages/FullStack";
import MachineCoding from "./pages/MachineCoding";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dsa" element={<DSA />} />
            <Route path="/git" element={<GitGithub />} />
            <Route path="/full-stack" element={<FullStack />} />
            <Route path="/machine-coding" element={<MachineCoding />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;