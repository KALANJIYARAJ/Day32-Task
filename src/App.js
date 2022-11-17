import logo from "./logo.svg";
import "./App.css";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
import "./fontawesome-free/css/all.css";
import Login from "./Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortalLayout from "./PortalLayout";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import Books from "./Books/Books";
import Members from "./Members/Members";
import CreateMember from "./Members/CreateMember";
import EditMember from "./Members/EditMember";
import CreateBook from "./Books/CreateBook";
import EditBook from "./Books/EditBook";
import Forgot from "./Login/Forgot";
import CreateAccount from "./Login/CreateAccount";
import GetBook from "./Books/GetBook";

function App() {
  const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/accout" element={<CreateAccount />}></Route>
        <Route path="/forgot" element={<Forgot />}></Route>
        <Route path="/portal" element={<PortalLayout />}>
          <Route path="/portal" element={<Sidebar />}></Route>
          <Route path="/portal" element={<Topbar />}></Route>
          <Route path="books" element={<Books/>}></Route>
          <Route path="book/create" element={<CreateBook/>}></Route>
          <Route path="book/edit/:id" element={<EditBook/>}></Route>
          <Route path="members" element={<Members/>}></Route>
          <Route path="member/create" element={<CreateMember/>}></Route>
          <Route path="member/edit/:id" element={<EditMember/>}></Route>
          <Route path="forget" element={<Forgot/>}></Route>
          <Route path="getbook/:id" element={<GetBook/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
