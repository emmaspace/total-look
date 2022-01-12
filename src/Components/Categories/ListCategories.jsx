import React from 'react'
import { AddCategory } from './AddCategory'
import './Listcategories.css'

export const ListCategories = () => {
    return (
        <div className='list-categories'>
            <div className='head-categories' >
                <AddCategory/>
                
                <p>Botón buscar</p>
            </div>
            
    </div>
    )
}
