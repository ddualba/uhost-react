import React from 'react';

import './StartHosting.scss';

const StartHosting = () => {
  return (
    <main className='signup-page'>
      <h1 className='signup-title'>Awesome! Let's dive right in!</h1>
      <form action='index.html' className='signup-form'>
        <label for='title'>Title</label>
        <select id='title'>
          <option value='mr'>Mr.</option>
          <option value='ms'>Ms.</option>
        </select>
        <label for='first-name'>First name</label>
        <input type='text' id='first-name' required />
        <label for='last-name'>Last name</label>
        <input type='text' id='last-name' required />
        <label for='email'>E-Mail</label>
        <input type='email' id='email' />
        <label for='password'>Password</label>
        <input type='password' id='password' />

        <div className='signup-form__checkbox'>
          <input type='checkbox' id='agree-terms' />
          <label for='agree-terms'>
            Agree to
            <a href='/#'> Terms &amp; Conditions</a>
          </label>
        </div>

        <button type='submit' className='button'>
          Sign Up
        </button>
      </form>
    </main>
  );
};

export default StartHosting;
