import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>(
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleModalButton}
        contentLabel="Selected Option"
    >
        <h2>Selected Option: </h2>
        {props.selectedOption && <h2><i>{props.selectedOption}</i></h2>}
        <button onClick={props.handleModalButton}>Okay!</button>
    </Modal>
);

export default OptionModal;