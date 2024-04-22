import { NativeRouter, Route, Routes } from "react-router-native";
import { Account } from "../pages/Account.jsx";
import { Login } from "../pages/Login.jsx";
import { AppBar } from "../components/AppBar.jsx";

export const PublicRoutes = () => {
    return(
        <NativeRouter>
            <AppBar/>
            <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/account" exact element={<Account/>}/>
            </Routes>
        </NativeRouter>
    )
}