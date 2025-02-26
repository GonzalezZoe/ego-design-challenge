"use client";

import React, { useEffect, useRef, useState } from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

export default function ProductSlider() {
  const carouselRef = useRef(null); // 🔹 Referencia al carrusel
  const [isLoaded, setIsLoaded] = useState(false); // 🔹 Estado de carga de las imágenes

  // Función que se ejecuta cuando las imágenes están completamente cargadas
  const handleImageLoad = () => {
    setIsLoaded(true); // Se actualiza el estado a 'true' cuando las imágenes se cargan
  };

  useEffect(() => {
    // Se inicializa Flickity solo si las imágenes están cargadas
    if (isLoaded && carouselRef.current) {
      new Flickity(carouselRef.current, {
        wrapAround: true,
      });
    }
  }, [isLoaded]); // Se ejecuta cuando isLoaded cambia a 'true'

  return (
    <>
    <div ref={carouselRef} className="carousel py-5">
      <div className="carousel-cell px-2 text-left">
        <img className="w-100 carousel-product-img" src="/nuevos-motores.png" onLoad={handleImageLoad} />
        <h4 className="my-3">Nuevos motores Toyota</h4>
        <p>Dos alternativas diesel con turbo de geometría variable, 1GD (2.8 L) y 2GD (2.4 L).</p>
      </div>
      <div className="carousel-cell px-2 text-left">
        <img className="w-100 carousel-product-img" src="/suspension-mejorada.png" onLoad={handleImageLoad} />
        <h4 className="my-3">Suspensión mejorada</h4>
        <p>Mayor confort de marcha, estabilidad y capacidad Off Road.</p>
      </div>
      <div className="carousel-cell px-2 text-left">
        <img className="w-100 carousel-product-img" src="/transmision-mejorada.png" onLoad={handleImageLoad} />
        <h4 className="my-3">Transmisión automática</h4>
        <p>Posibilidad de elección de caja automática de manejo.</p>
      </div>
      <div className="carousel-cell px-2 text-left">
        <img className="w-100 carousel-product-img" src="/transmision-new-manual.png" onLoad={handleImageLoad} />
        <h4 className="my-3">Transmisión manual</h4>
        <p>Posibilidad de elección de caja manual de manejo.</p>
      </div>
      <div className="carousel-cell px-2 text-left">
        <img className="w-100 carousel-product-img" src="/transmision-manual-2.jpg" onLoad={handleImageLoad} />
        <h4 className="my-3">Transmisión manual</h4>
        <p>Posibilidad de elección de caja manual de manejo.</p>
      </div>
    </div>
    <div className='container container-details-product'>
    <div className='d-flex container-details-info'>
    <div className='d-flex flex-column justify-content-center text-product-detail'>
      <h4>Título de 20 px</h4>
      <p>
      Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. 
      lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.
      </p>
    </div>
    <img className="w-100 img-detail" src="/titulo-20px-1.png" onLoad={handleImageLoad} />
    </div>
    <div className='d-flex my-5 container-details-info'>
    <img className="w-100 img-detail" src="/titulo-20px-2.png" onLoad={handleImageLoad} />
    <div className='d-flex flex-column justify-content-center text-product-detail'>
      <h4>Título de 20 px</h4>
      <p>
      Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. 
      lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.
      </p>
    </div>
    </div>
    </div>
    </>
  );
}
