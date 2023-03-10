import React from 'react';
import {IconButton} from '@mui/material';
import stylescenter from './ContactItem.module.css';

const options = [
  {value: 'none', label: ''},
  {value: 'viber', label: 'Viber'},
  {value: 'telegram', label: 'Telegram'},
  {value: 'messenger', label: 'Messenger'},
  {value: 'sms', label: 'SMS'},
];

const ContactItem = ({
  index,
  selectedValue,
  onChangeHandler,
  text,
  remove,
  id,
}) => {
  console.log('child render', index);
  return (
    <div className={stylescenter.fullChannelControll}>
      <div className={stylescenter.channelAndChannel}>
        <p className={stylescenter.channelOfConntection}>Канал зв'язку</p>
        <select
          value={selectedValue}
          onChange={(e) => onChangeHandler(e, id)}
          className={stylescenter.selecterOptions}
          name='optionSelected'
        >
          {options.map((el) => (
            <option key={el.value} value={el.value}>
              {el.label}
            </option>
          ))}
        </select>
      </div>
      <div className={stylescenter.detailsAndInputAndDelete}>
        <p className={stylescenter.channelOfConntection}>Деталі</p>
        <textarea
          value={text}
          onChange={(e) => onChangeHandler(e, id)}
          data-testid='details'
          maxLength='100'
          rows='2'
          className={stylescenter.detailsChannelInput}
          placeholder='введіть телефон або @username'
        />
        <div className={stylescenter.removeButtons}>
          {index !== 0 && (
            <span>
              <IconButton onClick={() => remove(id)}>
                <img src='bin.svg' alt='bin logo' />
                <span className={stylescenter.removeButtonText}>
                  Видалити канал
                </span>
              </IconButton>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ContactItem);
