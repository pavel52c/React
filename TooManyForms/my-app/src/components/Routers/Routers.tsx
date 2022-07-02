import "./Routes.scss"
import {AllUsers} from "../AllUsers/AllUsers";
import {Routes, Route} from "react-router-dom";
import routesProps from "./routesProps";
import {UserProfile} from "../UserProfile/UserProfile";

export const Routers = (props: routesProps) => {
    const {filter} = props;

    return (
        <Routes>
            <Route path="/allUsers" element={<AllUsers filter={filter}/>}/>
            <Route path="/" element={<AllUsers filter={filter}/>}/>
            <Route path="/profileUser" element={<UserProfile/>}/>
        </Routes>
    )
}