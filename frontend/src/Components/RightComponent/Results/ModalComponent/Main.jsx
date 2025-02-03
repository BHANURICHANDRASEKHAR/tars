import React, { useContext, useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { UserContext } from '../../../Context/Context';
import Header from './Header';
import Body from './Body';
function Example({ size = 'xl', centered = true, backdrop = true, keyboard = true, animation = true }) {
  const { showModal, setShowModal,SelectedIndex,SetSelectedIndex,Results, SetResults } = useContext(UserContext);
      const [isEditable, setIsEditable] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false); 
  const handleClose = () => {
    setShowModal(false);
    setIsFullScreen(false);
  };
  const [SelectedData, SetSelectedData] = useState(null);
  useEffect(() => {
    SetSelectedData(Results[SelectedIndex])
  },[SelectedIndex])
  return (
    <React.Fragment>
      <Modal
        show={showModal} 
        onHide={handleClose}
        size={isFullScreen ? 'fullscreen' : size} 
        centered={centered}
        backdrop={backdrop ? true : 'static'}
        keyboard={keyboard}
        animation={animation}
      >  
        <Modal.Header className={isFullScreen ? "p-0 border-0" : ""}>
        {
          SelectedData &&  <Header handleClose={handleClose} setIsEditable={setIsEditable} isEditable={isEditable} isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} SetSelectedData={SetSelectedData} SelectedData={SelectedData}/>
        }
        </Modal.Header>
        <Modal.Body>
        {
          SelectedData &&<Body SelectedData={SelectedData} SetSelectedData={SetSelectedData} setIsEditable={setIsEditable} isEditable={isEditable}/>
        }
        
        </Modal.Body>
        
      </Modal>
    </React.Fragment>
  );
}

export default React.memo(Example);
