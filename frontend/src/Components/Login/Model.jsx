import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { GiCancel } from 'react-icons/gi';
import { UserContext } from '../Context/Context';
import Auth from './Auth';

function Example({ size = 'md', centered = true, backdrop = true, keyboard = true, animation = true }) {
  const { show, SetShow } = useContext(UserContext);

  const handleClose = () => {
    SetShow(false);
  };

  return (
    <React.Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        size={size}
        centered={centered} 
        backdrop={backdrop ? true : 'static'} 
        keyboard={keyboard} 
        animation={animation} 
      >  
        <Modal.Header>
          <div className="d-flex w-100">
            <GiCancel 
              onClick={handleClose} 
              style={{ cursor: 'pointer' }} 
              className="ms-auto"
              size={25}
            />
          </div>
        </Modal.Header>
        <Modal.Body><Auth /></Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default React.memo(Example);
