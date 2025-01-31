import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UselessFacts } from "./pages/UselessFacts";
import { SillyGenerator } from "./pages/SillyGenerator";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/useless-facts" element={<UselessFacts />} />
    <Route path="/silly-generator" element={<SillyGenerator />} />
  </RouterRoutes>
);

export { Routes };