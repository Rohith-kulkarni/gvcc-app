import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enquiries from "./components/Enquiries";

import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoute />}>
        <Route path="/enquiries" element={<Enquiries />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
