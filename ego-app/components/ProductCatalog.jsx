"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchData } from "./api"; 
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";

export default function ProductCatalog() {
  const [data, setData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); // Estado para los productos filtrados
  const [category, setCategory] = useState('todos'); // Estado para la categoría seleccionada
  const [sortOrder, setSortOrder] = useState(''); // Estado para el filtro de ordenación

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result); 
      setFilteredData(result); // Inicialmente mostramos todos los productos
    };
    getData(); 
  }, []); 

  // Filtrar productos en base a la categoría seleccionada y aplicar el orden
  useEffect(() => {
    let filtered = [...data];

    // Filtrar por categoría solo si no es 'todos'
    if (category === 'Pickups y Comerciales') {
      filtered = data.filter(item => item.segment === 'Pickups y Comerciales');
    } else if (category === 'SUVs y Crossovers') {
      filtered = data.filter(item => item.segment === 'SUVs' || item.segment === 'Crossover');
    } else if (category === 'autos') {
      filtered = data.filter(item => item.segment !== 'Pickups y Comerciales' && item.segment !== 'SUVs' && item.segment !== 'Crossover');
    }

    // Aplicar la ordenación si se seleccionó un filtro
    if (sortOrder === 'priceAsc') {
      filtered.sort((a, b) => a.price - b.price); // Ordena de menor a mayor precio
    } else if (sortOrder === 'priceDesc') {
      filtered.sort((a, b) => b.price - a.price); // Ordena de mayor a menor precio
    } else if (sortOrder === 'newest') {
      filtered.sort((a, b) => parseInt(b.year) - parseInt(a.year)); // Ordena de más nuevo a más antiguo (mayor año primero)
    } else if (sortOrder === 'oldest') {
      filtered.sort((a, b) => parseInt(a.year) - parseInt(b.year)); // Ordena de más antiguo a más nuevo (menor año primero)
    }

    // Si la categoría es 'todos', no se aplica ningún filtro
    if (category === 'todos') {
      setFilteredData(filtered);
    } else {
      setFilteredData(filtered); // Actualizamos los productos filtrados con la categoría
    }
  }, [category, sortOrder, data]); // Dependencias: Filtra y ordena cuando cambian 'category' o 'sortOrder'

  return (
    <>
      <div className="d-flex justify-content-between border-bottom pb-3">
        <FilterBy setCategory={setCategory} category={category}/> {/* Pasar la categoría actual como prop */}
        <SortBy setSortOrder={setSortOrder} /> {/* Pasar la función setSortOrder al componente SortBy */}
      </div>

      <div className="catalog-container mt-5">
        {filteredData.map((item) => (
          <Link className="catalog-item text-center" key={item.id} href={`/modelos/${item.name.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className="text-center">
              <h3 className="m-0">{item.name}</h3>
              <div className="d-flex justify-content-center align-items-center mt-1">
                <span>{item.year}</span>
                <span className="mx-2"> | </span>
                <span>{item.price.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 })}</span>
              </div>
            </div>
            <img className="img-catalog" src={item.photo} alt={item.name} />
            <span className="see-product">Ver modelo</span>
          </Link>
        ))}
      </div>
    </>
  );
}
