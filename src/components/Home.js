import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../shared/components/UIElements/Modal';
import { ReactComponent as TrustImg } from './images/trust.svg';
import { ReactComponent as UptimeImg } from './images/uptime.svg';
import { ReactComponent as FastImg } from './images/fast.svg';
import './Home.scss';

const Home = () => {
  let history = useHistory();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showConfirmHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelConfirmHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmPlanHandler = () => {
    setShowConfirmModal(false);
    history.push('/start-hosting');
  };

  return (
    <Fragment>
      <Modal
        show={showConfirmModal}
        onCancel={cancelConfirmHandler}
        header='Do you want to continue?'
        contentClass='center'
        footerClass='modal__actions'
        footer={
          <React.Fragment>
            <button
              className='modal__action'
              type='button'
              onClick={confirmPlanHandler}
            >
              Yes
            </button>

            <button
              className='modal__action modal__action--negative'
              type='button'
              onClick={cancelConfirmHandler}
            >
              Cancel
            </button>
          </React.Fragment>
        }
      >
        <p>If you want to sign up for this plan, click YES to continue.</p>
      </Modal>

      <main>
        <section id='product-overview'>
          <h1>Get the freedom you deserve.</h1>
        </section>
        <section id='plans'>
          <h1 className='section-title'>Choose Your Plan</h1>
          <div className='plan__list'>
            <article className='plan'>
              <h1 className='plan__title'>FREE</h1>
              <h2 className='plan__price'>$0/month</h2>
              <h3>For hobby projects or small teams.</h3>
              <ul>
                <li>1 Workspace</li>
                <li>Unlimited Traffic</li>
                <li>10GB Storage</li>
                <li>Basic Support</li>
              </ul>
              <div>
                <button className='button' onClick={showConfirmHandler}>
                  CHOOSE PLAN
                </button>
              </div>
            </article>
            <article className='plan plan--highlighted'>
              <h1 className='plan__badge'>RECOMMENDED</h1>
              <h1 className='plan__title'>PLUS</h1>
              <h2 className='plan__price'>$29/month</h2>
              <h3>For ambitious projects.</h3>
              <ul>
                <li>5 Workspaces</li>
                <li>Unlimited Traffic</li>
                <li>100GB Storage</li>
                <li>Plus Support</li>
              </ul>
              <div>
                <button className='button' onClick={showConfirmHandler}>
                  CHOOSE PLAN
                </button>
              </div>
            </article>
            <article className='plan'>
              <h1 className='plan__title'>PREMIUM</h1>
              <h2 className='plan__price'>$99/month</h2>
              <h3>Your enterprise solution.</h3>
              <ul>
                <li>10 Workspaces</li>
                <li>Unlimited Traffic</li>
                <li>Unlimited Storage</li>
                <li>Priority Support</li>
              </ul>
              <div>
                <button className='button' onClick={showConfirmHandler}>
                  CHOOSE PLAN
                </button>
              </div>
            </article>
          </div>
        </section>
        <section id='key-features'>
          <h1 className='section-title'>Many Good Reasons to Stick Around</h1>
          <ul className='key-feature__list'>
            <li className='key-feature__item'>
              <div className='key-feature__image'>
                <TrustImg />
              </div>
              <p className='key-feature__desc'>3,857,000 Trusting Customers</p>
            </li>
            <li className='key-feature__item'>
              <div className='key-feature__image'>
                <UptimeImg />
              </div>
              <p className='key-feature__desc'>99.999% Uptime Guarantee</p>
            </li>
            <li className='key-feature__item'>
              <div className='key-feature__image'>
                <FastImg />
              </div>
              <p className='key-feature__desc'>Lightning Fast CDN</p>
            </li>
          </ul>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
