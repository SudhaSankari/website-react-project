import { NavLink } from "react-router-dom";

export default function AboutPage() {
    return (
        <>
            <h1>About Page</h1>
            <NavLink to="/about/ceo">CEO</NavLink> | <NavLink to="/about/coo">COO</NavLink>


            <p>Lorem, ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Fuga voluptatibus nam architecto iure,
                 officiis accusantium ea sed sapiente? Rem sapiente magni
                  perferendis libero excepturi atque quam similique
                   debitis autem aperiam.
                   </p>
        </>
    )
}