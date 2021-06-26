import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset ] = useForm(note);
  const { title, body } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if ( note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id
    }
  }, [note, reset])

  const handleSave = () => {};

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          onChange={handleInputChange}
          name="title"
          value={title}
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happended today?"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
          name="body"
          id=""
          cols="30"
          rows="10"
        ></textarea>

        {note.url && (
          <div className="notes__image">
            <img
              src="https://media-exp1.licdn.com/dms/image/C561BAQGEbvT3SFyR9Q/company-background_10000/0/1582050035728?e=2159024400&v=beta&t=xwPLRsVBBNXQQS3HN3q7hsYXmt6JxJsH6lpnbh9Y1ko"
              alt="imagen"
            />
          </div>
        )}
      </div>
    </div>
  );
};
