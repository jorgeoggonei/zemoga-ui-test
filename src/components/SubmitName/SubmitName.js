import React from 'react';
import './submit-name.scss';

function SubmitName() {

  return (
    <section className="submit-name">
      <img className="submit-name__image" src="images/submit-name-section.jpg" alt="submit name" />
      <div className="submit-name__info">
        <p className="submit-name__text">Is there anyone else you would want us to add?</p>
        <button className="submit-name__button">Submit a Name</button>
      </div>
    </section>
  );
}

export default SubmitName;