/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Admissions from "./pages/Admissions";
import FAQPage from "./pages/FAQPage";
import Programs from "./pages/Programs";
import About from "./pages/About";
import AIAssistant from "./components/AIAssistant";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
      <AIAssistant />
    </BrowserRouter>
  );
}
