// App.jsx  —  main router shell
import { useState } from "react";
import GradientCursor from "./components/GradientCursor";
import Navbar         from "./components/Navbar";
import Footer         from "./components/Footer";
import Home           from "./pages/Home";
import About          from "./pages/About";
import Projects       from "./pages/Projects";
import Skills         from "./pages/Skills";
import Certificates   from "./pages/Certificates";
import Contact        from "./pages/Contact";

const PAGES = { Home, About, Projects, Skills, Certificates, Contact };

export default function App() {
  const [active, setActive] = useState("Home");

  const navigate = (page) => {
    setActive(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PageComponent = PAGES[active];

  return (
    <div
      className="min-h-screen text-white selection:bg-violet-500/30 selection:text-white"
      style={{ background: "#080c14", fontFamily: "'DM Sans', sans-serif" }}
    >
      <GradientCursor />
      <Navbar active={active} navigate={navigate} />

      <main
        key={active}
        style={{ animation: "pageFade 0.45s ease" }}
      >
        <PageComponent navigate={navigate} />
      </main>

      <Footer navigate={navigate} />

      <style>{`
        * { cursor: none !important; }

        @keyframes pageFade {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        ::-webkit-scrollbar       { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0e18; }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(#7c3aed, #06b6d4);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
