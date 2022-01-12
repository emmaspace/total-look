import React from 'react'
import { AddCategory } from './AddCategory'
import '../../Styles/Listcategories.css'

export const ListCategories = () => {
    return (
        <div className='list-categories'>
            <div className='head-categories' >
                <AddCategory/>
                
                <p>Botón buscar</p>
            </div>
            <section  className='categories'>

            </section>
    </div>
    )
}
