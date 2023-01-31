import { FC, memo, useContext, useState } from 'react';
import { ButtonType } from '../../types/ButtonType';
import { Event } from '../../types/Event';
import { dateNormalString } from '../../utils/date/dateFuncs';
import { DateContext } from '../DateContext/Context';
import { FormButton } from '../FormButton';

export const EventForm: FC = memo(() => {
  const { date, handleSetFormVisible, handleSetDate } = useContext(DateContext);
  const { Submit, Button } = ButtonType;

  const dateToString = dateNormalString(date);
  const createDate = `${dateNormalString(new Date())} ${new Date().toTimeString().slice(0, 5)}`;
  const eventStorage = localStorage.getItem(dateToString);
  const eventParse = eventStorage 
    ? JSON.parse(eventStorage) 
    : {
        title: '',
        description: '',
        time: '',
        lastWorked: ''
      };

  const [event, setEvent] = useState<Event>(eventParse);
  
  const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent(prevState => {
      return {...prevState, title: e.target.value};
    });
  };

  const handleSetDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEvent(prevState => {
      return {...prevState, description: e.target.value};
    });
  };

  const handleSetTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent(prevState => {
      return {...prevState, time: e.target.value};
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lastWorked = `Created at: ${createDate}`;
    
    localStorage.setItem(dateToString, JSON.stringify({...event, lastWorked}));
    handleSetFormVisible();
  };

  const removeEventFromLocalStor = () => {
    localStorage.removeItem(dateToString);
    handleSetFormVisible();
  };

  const updateEvent = () => {
    const lastWorked = `Updated at: ${createDate}`;

    localStorage.setItem(dateToString, JSON.stringify({...event, lastWorked}));
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

        <FormButton 
          value='❎' 
          type={Button} 
          action={handleSetFormVisible}
        />
      </div>

      <fieldset className="event-form_item event-form_item--underline">
        <legend className="event-form_legend">Title *</legend>

        <input
          className="event-form_title" 
          type="tegetTime()xt" 
          placeholder="Title goes here"
          value={event.title}
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
          value={event.description}
          onChange={handleSetDescription}
        ></textarea>

        {eventParse.description && (
          <FormButton 
            value='🔄' 
            type={Button} 
            action={updateEvent}
          />
        )}
      </fieldset>

      <div className="event-form_item event-form_item--date">
        <fieldset className="event-form_item  event-form_item--underline">
          <legend className="event-form_legend">Date</legend>

          <input 
            className="event-form--border-off"
            type="date" 
            value={dateToString}
            onChange={(e) => {
              handleSetDate(e);
              handleSetFormVisible();
            }}
            required 
          />
        </fieldset>

        <fieldset className="event-form_item  event-form_item--underline event-form_time-box">
          <legend className="event-form_legend">Begin time</legend>

          <input 
            type="time" 
            className="event-form--border-off"
            value={event.time}
            onChange={handleSetTime}
          />
        </fieldset>
      </div>

      <div className="event-form_footer">
        <span className="event-form_create-date"> 
          {event.lastWorked}
        </span>

        <div className="event-form_button-box">
          {event.title && (
            <FormButton 
              value='🚮' 
              type={Button} 
              action={removeEventFromLocalStor}
            />
          )}

          <FormButton 
            value='✅' 
            type={Submit} 
          />
        </div>
      </div>
    </form>
  );
});
