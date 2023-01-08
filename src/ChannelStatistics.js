import React, {useContext} from 'react';
import {ContactContext} from './App';

function ChannelStatistics() {
  // NOTE: use Context to get info about entered contacts

  const channel = useContext(ContactContext);
  const lastChannel = channel.contacts.at(-1).channel;

  return (
    <p data-testid='statistics'>
      count of channels: {channel.contacts.length} <br />
      {lastChannel !== 'none' ? `your last channel is: ${lastChannel}` : ''}
    </p>
  );
}

export default ChannelStatistics;
