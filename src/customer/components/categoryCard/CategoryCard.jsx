import React from 'react';
import './CategoryCard.css';
import categoryimg from '../../../graphics/category-1.png';
import { NavLink } from 'react-router-dom';
export default function CategoryCard(props) {
    return (
        <NavLink to={props.linked} className="category-card-link">
        <div className="category-card">
            <img src={props.image}/>
            <h2>{props.title}</h2>
        </div>
        </NavLink>
    )
}
