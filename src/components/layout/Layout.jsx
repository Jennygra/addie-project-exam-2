import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import Container from "react-bootstrap/Container";
import Landingsite from "../landingsite/Landingsite";
import Login from "../login/Login";
import Register from "../register/Register";
import Home from "../home/Home";
import Navigation from "./Navigation";

function Layout() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />

        <Container>
          <Routes>
            <Route path="/" exact element={<Landingsite />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" exact element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default Layout;
