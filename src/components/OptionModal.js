import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>(
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleModalButton}
        contentLabel="Selected Option"
        className="modal"
    >
        <h2 className='modal__title'>Selected Option: </h2>
        {props.selectedOption && <p className='modal__body'><i>{props.selectedOption}</i></p>}
        <button className='button' onClick={props.handleModalButton}>Okay!</button>
    </Modal>
);

export default OptionModal;