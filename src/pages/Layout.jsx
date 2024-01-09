import FooterComponent from "../components/Footer/FooterComp";
import HeaderComponent from "../components/Header/HeaderComp";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
          <HeaderComponent/>
          <h2>Layout of the react project</h2>
            <Outlet/>
          <FooterComponent/> 
        </>
    )
}