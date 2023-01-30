import { FC, useContext, useState } from 'react';
import { dateNormalString } from '../../utils/date/dateFuncs';
import { DateContext } from '../DateContext/Context';

export const EventForm: FC = () => {
  const {
    date,
    handleSetFormVisible
  } = useContext(DateContext);

  const storage = localStorage.getItem(dateNormalString(date));
  const event = storage ? JSON.parse(storage) : {};

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(event.description);
  const [time, setTime] = useState(event.time);
  
  const handleSetTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSetDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleSetTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lastWorked = `Created at: ${dateNormalString(new Date())} ${new Date().toTimeString().slice(0, 5)}`;
    const eventForLocalStor = {
      title,
      description,
      time,
      lastWorked
    };

    localStorage.setItem(dateNormalString(date), JSON.stringify(eventForLocalStor));
    handleSetFormVisible(false);
  };

  const removeEventFromLocalStor = () => {
    localStorage.removeItem(dateNormalString(date));
    handleSetFormVisible(false);
  };

  const updateEventDescription = () => {
    const lastWorked = `Updated at: ${dateNormalString(new Date())} ${new Date().toTimeString().slice(0, 5)}`;
    const eventForLocalStor = {
      ...event, 
      description,
      lastWorked
    };

    localStorage.setItem(dateNormalString(date), JSON.stringify(eventForLocalStor));
  };
  
  return (
    <form 
      action="/" 
      className="event-form"
      onSubmit={handleFormSubmit}
    >
      <div className="event-form_header">
        <h3 className="event-form_item event-form_title--h3">
          {event.title || 'Add new event'}
        </h3>

        <div className="event-form_item event-form_button">
          <span
            className="event-form_button-item" 
            onClick={() => handleSetFormVisible(false)}
          >❎</span>
        </div>
      </div>

      <fieldset className="event-form_item event-form_item--underline">
        <legend className="event-form_legend">Title *</legend>

        <input
          className="event-form_title" 
          type="tegetTime()xt" 
          placeholder='Title goes here'
          value={title}
          onChange={handleSetTitle}
          required        
        />
      </fieldset>

      <fieldset className="event-form_item event-form_item--description event-form_item--underline">
        <legend className="event-form_legend">Description</legend>

        <textarea 
          rows={4} 
          cols={20} 
          className="event-form_text-area"
          value={description}
          onChange={handleSetDescription}
        ></textarea>

        {event.description && (
          <button 
            className="event-form_button-item" 
            type="button"
            onClick={updateEventDescription}
          >
            🔄
          </button> 
        )}
      </fieldset>

      <div className="event-form_item event-form_item--date">
        <fieldset className="event-form_item  event-form_item--underline">
          <legend className="event-form_legend">Date</legend>

          <input 
            className="event-form_date"
            type="date" 
            value={dateNormalString(date)} 
            required 
            disabled
          />
        </fieldset>

        <fieldset className="event-form_item  event-form_item--underline event-form_time-box">
          <legend className="event-form_legend">Begin time</legend>

          <input 
            type="time" 
            className="event-form_time"
            value={time}
            onChange={handleSetTime}
            />
        </fieldset>
      </div>

      <div className="event-form_bottom">
        <span className="event-form_create-date"> 
          {event.lastWorked}
        </span>

        <div className="event-form_button-box">
          {event.title && (
            <button 
              className="event-form_button-item" 
              type="button"
              onClick={removeEventFromLocalStor}
            >
              🗑
            </button> 
          )}

          <button 
            className="event-form_item event-form_button-item" 
            type='submit'
          >
            save
          </button>
        </div>
      </div>
    </form>
  );
};