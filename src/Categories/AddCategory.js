import React, { useState } from 'react'
import './Listcategories.css'
import { ModalCategories } from './ModalCategories';


export const AddCategory = () => {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }


    return (
        <>
            <button onClick={openModal} className='btn-addcat'>
                <p> + Add new category</p>
            </button>
            <ModalCategories
                showModal={showModal}
                setShowModal={setShowModal}
            >
                <section className='addCatg'>
                    <p>Category</p>
                    <input type="text" />
                    <p>Image</p>
                    <input />
                    <p>Description</p>
                    <input type="text" />                    
                </section>
                <div className='bttnSubCancel'>
                    <button className='bttn-cancel'>Cancel</button> 
                    <button className='bttn-submit'>Submit</button>                     
                </div>
                

            </ModalCategories>
        </>

    )
}


/* import React, { useState } from 'react'
import './Listcategories.css'
import { ModalCategories } from './ModalCategories';


export const AddCategory = () => {
 const [showModal, setShowModal] = useState(false);

 const openModal = ()=>{
     setShowModal(prev => !prev)
 }

 

    return (
        <>
        <button onClick={openModal} className='btn-addcat'>
            <p> + Add new category</p>
        </button>
        <ModalCategories showModal={showModal} setShowModal={setShowModal} />        
        </>
        
    )
}
 */