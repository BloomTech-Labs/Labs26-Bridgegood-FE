import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.less';

import { ReactComponent as Location } from '../../../assets/images/location.svg';
import { ReactComponent as Bus } from '../../../assets/images/bus.svg';
import { ReactComponent as Mask } from '../../../assets/images/mask.svg';
import { ReactComponent as PersonBadge } from '../../../assets/images/personbadge.svg';
import { ReactComponent as SixFeet } from '../../../assets/images/sixfeet.svg';
import { ReactComponent as Sound } from '../../../assets/images/sound.svg';

export default function ConfirmationPage() {
  const [donated] = useState(false);
  return (
    <div className="confirmation__container">
      <p className="confirmation__content">
        {donated && <span>Thanks for your donation! </span>}We’ll see you on{' '}
        <strong>July 8th, 2020</strong> at
        <strong> 2:00PM!</strong> An e-mail reminder has been sent to you. Please
        remember the guidelines before arriving:
      </p>
      <ul className="confirmation__list">
        <Location
          style={{
            width: '36px',
            height: '36px',
          }}
          className="location"
        />
        <p>We’re at 95 Washington St., Oakland, CA 94607</p>
        <PersonBadge
          style={{
            width: '45px',
            height: '33px',
          }}
          className="personbadge"
        />
        <p>Bring an official ID</p>
        <Mask
          style={{
            width: '40px',
            height: '24px',
          }}
          className="mask"
        />
        <p>Wear a face covering</p>
        <SixFeet
          style={{
            width: '96px',
            height: '26px',
          }}
          className="sixfeet"
        />
        <p>Be prepared to social distance</p>
        <Sound
          style={{
            width: '36.28px',
            height: '36.26px',
          }}
          className="sound"
        />
        <p>Be courteous and professional</p>
        <Bus
          style={{
            width: '32px',
            height: '38px',
          }}
          className="bus"
        />
        <p>You are responsible for transportation</p>
      </ul>
      <Link to="/">Click here to take me back to the main page!</Link>
    </div>
  );
}
