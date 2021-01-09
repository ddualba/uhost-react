import React, { Fragment } from 'react';
import './Packages.scss';

const Packages = () => {
  return (
    <Fragment>
      <div class='background'></div>
      <main className='pt-0'>
        <section className='plan-box' id='plus'>
          <a href='/#'>
            <h1 className='plan__title'>Our PLUS Plan</h1>
            <h2 className='package__badge'>RECOMMENDED</h2>
            <h2 className='plan__subtitle'>
              The most popular choice of our customers.
            </h2>
            <p className='plan__desc'>
              Benefit from increased storage and faster support to ensure that
              your mission-critical data and applications are always available!
            </p>
          </a>
        </section>
        <section className='plan-box' id='free'>
          <a href='/#'>
            <h1 className='plan__title'>Our FREE Plan</h1>
            <h2 className='plan__subtitle'>
              An extremely solid start into our hosting world.
            </h2>
            <p className='plan__desc free-plan__desc'>
              Get started immediately at zero cost!
            </p>
          </a>
        </section>
        <div className='clearfix'></div>
        <section className='plan-box' id='premium'>
          <a href='/#'>
            <h1 className='plan__title'>Our PREMIUM Plan</h1>
            <h2 className='plan__subtitle'>
              All your enterprise needs. Instant support, guaranteed uptime.
            </h2>
            <p className='plan__desc'>
              The best solution for small to large enterprises. Because hosting
              shouldn't be in the way!
            </p>
          </a>
        </section>
      </main>
    </Fragment>
  );
};

export default Packages;
