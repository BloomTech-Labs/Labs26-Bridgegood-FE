import React, { useEffect, useState } from 'react';
import dropin from 'braintree-web-drop-in';
import braintree from 'braintree';
import { Form, Button } from 'antd';

const useMulti = false;

export default function VenmoPay(props) {
  const [dropinInstance, setDropinInstance] = useState(null);
  const tokenizationKey = 'sandbox_mfwkf3gh_3sn8ykshrthcdgdg';

  function getContainerIdString() {
    return '#dropin-container-' + props.containerId;
  }

  useEffect(() => {
    const dropinUI = dropin
      .create({
        authorization: tokenizationKey,
        container: useMulti
          ? '#' + String(props.containerId)
          : '#dropin-container',
        venmo: {
          //   amount: '10.00',
          //   currency: 'USD',
        },
        // paypal: {
        //   flow: 'vault',
        // },
      })
      .then(instance => {
        instance.setDropinInstance(instance);
      })
      .catch(err => {});
  }, []);

  // braintree.dropin.create({
  //     authorization: tokenizationKey
  //   }).then(function (dropinInstance) {
  //   });

  //   braintree.client.create({
  //     authorization: tokenizationKey
  //   }).then(function (clientInstance) {
  //   });

  function venmoButtonClickHandler() {
    if (dropinInstance) {
      dropinInstance.requestPaymentMethod(
        (requestPaymentMethodErr, payload) => {
          console.log({ payload });
          // Submit payload.nonce to your server
        }
      );
    } else {
      // notify user that dropin hasn't loaded or there was an error
      // the button itself will render conditionally based on the state of dropinInstance
    }
  }

  return (
    <div>
      <Form>
        {/* <div id={'dropin-container-' + props.containerId}></div> */}
        <div id={useMulti ? props.containerId : 'dropin-container'}></div>
        <h2>TokenKey: {tokenizationKey}</h2>
        {/* <h2>ID: {getContainerIdString()}</h2> */}
        {/* <button id="submit-button">Request payment method</button> */}
        <Button onClick={venmoButtonClickHandler}>
          {dropinInstance && 'Request Payment Method'}
          {!dropinInstance && 'Venmo Unavailable'}
        </Button>
      </Form>
    </div>
  );
}
