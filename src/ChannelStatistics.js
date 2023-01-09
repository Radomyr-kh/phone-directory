import React, {useContext} from 'react';
import {ContactContext} from './App';

function ChannelStatistics() {
  const channel = useContext(ContactContext);
  const lastChannel = channel.contacts[channel.contacts.length - 1].channel;

  return (
    <p data-testid='statistics'>
      Count of channels: {channel.contacts.length} <br />
      {lastChannel !== 'none' ? `your last channel is: ${lastChannel}` : ''}
    </p>
  );
}

export default ChannelStatistics;
