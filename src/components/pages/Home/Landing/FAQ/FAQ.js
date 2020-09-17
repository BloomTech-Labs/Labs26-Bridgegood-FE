import React from 'react';
import classes from './FAQ.module.css';

const FAQ = props => {
  return (
    <section className={classes.FAQ}>
      <h3>FREQUENTLY ASKED QUESTIONS</h3>
      <div>
        <h2>How do I come to do work at this awesome space?</h2>
        <p>
          Sign up for an account with your BRIDGEGOOD creative username then
          click “Reserve a spot” to find a date and time that works for you. You
          can also just show up to our Creative Studio located in Jack London
          Square of Oakland to find out more.
        </p>
      </div>
      <div>
        <h2>
          I’m a student and don’t currently have a job. Do I have to pay to come
          here?
        </h2>
        <p>
          Don’t worry! Everyone is welcomed at the Studio and won’t be turned
          away for lack of funds. Our Studio operates on pay-what-you-want
          donation basis and you can always choose to give back once you get a
          job :)
        </p>
      </div>
      <div>
        <h2>
          Do I have to be a full-time student to come here? How do you verify my
          student identity?{' '}
        </h2>
        <p>
          While we verify your student identify via your student ID at the door
          and .edu email address, we also welcome recent graduates or bootcamp
          students to use our space for collaboration and networking
          opportunities. Feel free to email us directly for more information.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
