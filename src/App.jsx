import { Route, Routes } from "react-router-dom";
import home from "./pages/home";
import ImageDetails from "./pages/ImageDetails";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={home} />
        <Route exact path="/image/:id" Component={ImageDetails} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/signup" Component={Signup} />
      </Routes>
    </div>
  );
}

export default App;
