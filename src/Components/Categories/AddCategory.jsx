import React, { useState } from 'react'
import { EachCategory } from './EachCategory';
import './Listcategories.css'
import { ModalCategories } from './ModalCategories';


export const AddCategory = () => {
    const [showModal, setShowModal] = useState(false)

    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('')
    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("A new category has been added");
      };


    return (
        <>
            <button onClick={openModal} className='btn-addcat'>
                <p> + Add new category</p>
            </button>
            <ModalCategories
                showModal={showModal}
                setShowModal={setShowModal}
            >
                <form className='addCateg' onSubmit={handleSubmit}>
                    <p className='lab-Categ'>Category:</p>
                    <input className='inp-Categ'                     
                    type="text"                                         
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    />                    
                    <p className='lab-Categ'>Image:</p>
                    <input className='inp-Categ' 
                    type="text"
                    name='image'
                    alt='an image represents a category'
                    value={image}                    
                    onChange={(e) => setImage(e.target.value)}
                    />                    
                    <p className='lab-Categ'>Description:</p>
                    <textarea className='inp-Categ' id='descrip-categ'                    
                    type="text"
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                     />                    
                </form>
                    <EachCategory  ></EachCategory>

                <div className='bttnSubCancel'>
                    <button className='bttn-cancel'>Cancel</button> 
                    <button className='bttn-submit' >Submit</button>                     
                </div>
                

            </ModalCategories>
        </>

    )
}

