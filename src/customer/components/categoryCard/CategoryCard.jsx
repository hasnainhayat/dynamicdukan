import React from 'react';
import './CategoryCard.css';
import categoryimg from '../../../graphics/category-1.png';
export default function CategoryCard() {
    return (
        <div className="category-card">
            <img src={categoryimg}/>
            <h2>Meat</h2>
        </div>
    )
}
