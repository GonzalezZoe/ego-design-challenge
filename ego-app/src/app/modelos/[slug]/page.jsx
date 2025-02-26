"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductSlider from '../../../../components/ProductSlider';

export default function ModelSheet() {
  const { slug } = useParams();
  const decodedSlug = decodeURIComponent(slug);
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // 🔹 Estado de carga

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); // Comenzar la carga

      const res = await fetch("https://challenge.egodesign.dev/api/models");
      const modelos = await res.json();

      const foundModel = modelos.find(m =>
        m.name.toLowerCase().replace(/\s+/g, "-") === decodedSlug
      );

      setModel(foundModel);
      setIsLoading(false); // Finalizar la carga
    }

    fetchData();
  }, [decodedSlug]);

  if (isLoading) {
    return <div className='w-100 text-center'> <h5>Cargando...</h5> </div>;
  }

  if (!model) {
    return <h1>Modelo no encontrado</h1>;
  }

  return (
    <div>
      <div className="container d-flex align-items-center justify-content-center flex-wrap-product my-5">
        <img className='image-product' src={model.photo} alt={model.name} />
        <div className="d-flex product-info">
          <h5 className="product-detail-name">{model.name}</h5>
          <h1 className="product-detail-title">Preparada para cualquier desafío</h1>
          <p className="product-detail-desc m-0 mt-3">
          Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. 
          lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <ProductSlider />
    </div>
  );
}
