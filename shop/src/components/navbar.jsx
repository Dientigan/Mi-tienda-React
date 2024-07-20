import React from "react"
import CartWidget from "./CartWidget"

const Navbar = () => {
return (
            <>

                <div>

                    <H1>Bienvenido a Sabor de Hogar</H1>

                    <ul>
                        <li>
                            <a href="">Inicio</a>
                            <a href="">Clasicos</a>
                            <a href="">Especiales</a>
                            <a href="">Adiciones</a>
                            <a href="">Bebidas</a>
                            <a href="">Postres</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
        
            </>
        )
}

export default Navbar