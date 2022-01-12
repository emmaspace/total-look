/* import React from 'react'
import styled from 'styled-components'

export const ModalCategories = ({showModal, setShowModal}) => {
    return (
        <div>
            {showModal ? <p>Modal</p>: null }
        </div>
    )
}
 */
import React from 'react'
import styled from 'styled-components'

export const ModalCategories = ({children, showModal, setShowModal}) => {
    return (
        <>
         {showModal ?
        <Overlay>            
        <Modal>
            <TitleModal>
                <p>   BACK TO CATEGORY LIST</p>
            </TitleModal>
            <BtnOut onClick={() => setShowModal(false)}>
                X
            </BtnOut>
            {children}
        </Modal>      
        </Overlay>: null }  
        </>


    )
}

const Overlay = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.5);
padding: 4px;
display: flex;
align-items: center;
justify-content: center;
`

const Modal = styled.div`
width: 40%;
min-height: 50vh;
background: white;
position: relative; 
border-radius: 5px;
box-shadow: rgba(100, 100, 111, 0.2) 0px, 7px, 29px, 0px;
padding: 20px;
`
const TitleModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
`
const BtnOut = styled.div`
    position: absolute;
    top: 30px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 5px;
    color: gray;

` 