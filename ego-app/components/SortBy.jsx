"use client";
import { useState } from "react";
import "../src/app/styles/globals.scss";

export default function SortBy({ setSortOrder }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortChange = (order) => {
    setSortOrder(order); 
    setIsOpen(false); 
  };

  return (
    <div className="filter-item d-flex justify-content-end">
      <button className="btn-filter" onClick={toggleDropdown}>
        Ordenar por
        <img className="arrow-dropdown mx-2" src={isOpen ? "/up-filter-category.svg" : "/down-filter-category.svg"} />
      </button>
      {isOpen && (
        <ul className={`dropdown-menu-filter mt-2 ${isOpen ? 'open' : ''}`}>
          <li onClick={() => handleSortChange('')}>Nada</li>
          <li onClick={() => handleSortChange('priceAsc')}>De <strong>menor</strong> a <strong>mayor</strong> precio</li>
          <li onClick={() => handleSortChange('priceDesc')}>De <strong>mayor</strong> a <strong>menor</strong> precio</li>
          <li onClick={() => handleSortChange('newest')}>Más <strong>nuevos</strong> primero</li>
          <li onClick={() => handleSortChange('oldest')}>Más <strong>viejos</strong> primero</li>
        </ul>
      )}
    </div>
  );
}
