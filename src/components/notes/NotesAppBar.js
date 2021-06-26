import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment';

export const NotesAppBar = () => {
  const {active} = useSelector( state => state.notes );
  const noteDate =  moment(active.date)
  return (
    <div className="notes__appbar">
      <span>{noteDate.format('dddd[,] D [de] MMMM YYYY')}</span>
      <div>
        <button className="btn">
          Picture
        </button>
        <button className="btn">
          save
        </button>
      </div>
    </div>
  )
}
