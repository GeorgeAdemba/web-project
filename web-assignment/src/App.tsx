import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import NoPage from "./pages/NoPage";
import Account from "./pages/Account";
import Staff from "./pages/Staff";
import User from "./pages/User";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Staff" element={<Staff />} />
          <Route path="/User" element={<User />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Signup" element={<Signup />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
