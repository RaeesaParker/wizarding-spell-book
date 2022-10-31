import React from 'react';
import Modal from 'react-modal';
import SpellCardModal from './spellCardModal';


function SpellCard(props){

  Modal.setAppElement('#root');

  // State for modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

  //  ------------- MODAL FUNCTIONS --------------- //
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


    return (
      <div className='spell-card'>
        <h3>{props.name}</h3>
        <button className='button-open-modal' onClick={openModal}>Spell Info</button>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <button className='button-close-modal' onClick={closeModal}>X</button>
        <div>
          <SpellCardModal key={props.id} name={props.name} effect={props.effect} incantation={props.incantation} light={props.light}> </SpellCardModal>
        </div>
      </Modal>


      </div>
      )
  
  }
  
  
  export default SpellCard;