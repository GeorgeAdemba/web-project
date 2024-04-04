import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import NoPage from "./pages/NoPage";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Account" element={<Account />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
