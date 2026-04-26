import { useEffect, useState } from "react";
import "../styles/banner.css";
import { NavLink } from "react-router-dom";


function Banner() {
    const imagenes = [ 
        "/images/img1.png", 
        "/images/img2.png", 
        "/images/img3.png"
    ]; // contenedor de imágenes en public/images

    const [indice, setIndice] = useState(0); // el indice va cambiando y muestra otra imagen

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndice((prev) => (prev +1) % imagenes.length); // el indice se incrementa 
        }, 3000); // cambia de imagen cada 3 segundos

        return () => clearInterval(intervalo);
    }, []); // el efecto se ejecuta una vez al montar el componente

    return (
        <div className="banner">
            <div className="carrusel">
                <img src={imagenes[indice]} alt={"Imagen del carrusel"} />
            </div>
            
            <div className="overlay"></div>

            <div className="banner-contenido">
                <h2 className="banner-titulo">
                    Tus historias, tu mundo.
                </h2>
                <p className="banner-parrafo"> 
                    Miles de mundos esperan entre estas páginas.
                </p>
                <p className="banner-parrafo">
                    Deja que la lectura te encuentre.
                </p>
                <div className="banner-boton">
                    <NavLink to="/results" className="btn-explorar">
                      Explorar
                    </NavLink>
                    <NavLink to="/results" className="btn-explorar">
                      Crear
                    </NavLink>
                </div>
            </div>
            
        </div>
    );
}
export default Banner;