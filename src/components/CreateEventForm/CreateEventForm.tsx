import { FC, useContext } from 'react';
import { dateNormalString } from '../../utils/date/dateFuncs';
import { DateContext } from '../DateContext/Context';

export const CreateEventForm: FC = () => {
  const {
    date,
    handleSetFormVisible
  } = useContext(DateContext);

  const dateToString = dateNormalString(date);
  console.log(dateToString);
  
  return (
    <form action="/" className="event-form">
      <div className="event-form_header">
        <h3 className="event-form_item event-form_title--h3">Add new event</h3>

        <div className="event-form_item event-form_button">
          <button 
            className="event-form_button-item" 
            type='button'
            onClick={() => handleSetFormVisible(false)}
          >x</button>
        </div>
      </div>

      <fieldset className="event-form_item event-form_item--underline">
        <legend className="event-form_legend">Title *</legend>

        <input
          className="event-form_title" 
          type="tegetTime()xt" 
          placeholder='Title goes here'
          required        
        />
      </fieldset>

      <fieldset className="event-form_item  event-form_item--underline">
        <legend className="event-form_legend">Description</legend>

        <textarea 
          rows={4} 
          cols={20} 
          className="event-form_text-area"
        ></textarea>
      </fieldset>

      <div className="event-form_item event-form_item--date">
        <fieldset className="event-form_item  event-form_item--underline">
          <legend className="event-form_legend">Date</legend>

          <input 
            className="event-form_date"
            type="date" 
            value={dateToString} 
            required 
            disabled
          />
        </fieldset>

        <fieldset className="event-form_item  event-form_item--underline event-form_time-box">
          <legend className="event-form_legend">Begin time</legend>

          <input type="time" className="event-form_time"/>
        </fieldset>
      </div>

      <div className="event-form_button--save">
        <button className="event-form_item event-form_button-item" type='submit'>SAVE</button>
      </div>
    </form>
  );
};