import { useEffect, useState } from "react";
import "../styles/banner.css";


function Banner() {
    const imagenes = [ 
        "/images/img1.jpg", 
        "/images/img2.jpg", 
        "/images/img3.jpg",
        "/images/img4.jpg"
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
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Aperiam officiis a id maxime. 
                    Ut ea maiores iure, neque dolorum pariatur minus 
                    nobis rerum inventore dolorem officia a quae quis voluptas.
                </p>
                <div className="banner-boton">
                    <button >
                        Explorar
                    </button>
                    <button>
                        Crear
                    </button>
            </div>
            </div>
            
        </div>
    );
}
export default Banner;