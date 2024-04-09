import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";
// Pages auth
import Login from "./pages/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/ForgetPassword";
// Pages admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import Chat from "./pages/admin/Chat";
import Error404 from "./pages/Error404";
import Tickets from "./pages/admin/Tickets";
import Historico from "./pages/admin/Historico";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/olvide-password" element={<ForgetPassword />} />
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="/registro" element={<Register />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="historico" element={<Historico />} />
        </Route>
        <Route path="Error404" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
