import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.scss';

const ModalOverlay = props => {
  const content = (
    <div className='modal'>
      <header className='modal__header'>
        <h2>{props.header}</h2>
      </header>

      <div className={`modal__content ${props.contentClass}`}>
        {props.children}
      </div>
      <footer className={`modal__footer ${props.footerClass}`}>
        {props.footer}
      </footer>
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
  return (
    <Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </Fragment>
  );
};

export default Modal;
