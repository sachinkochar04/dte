import React from 'react'
import Aux from '../HOC/Aux1'
import Modal from './Modal';


const backdrop = (props) =>{
  return(
    <Aux>

        <div className="Backdrop">
          <Modal { ...props} />
          </div>

    </Aux>
  );
}

export default backdrop ;
