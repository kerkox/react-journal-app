import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const noteDate = moment(note.date);
  const handleSave = () => {
    dispatch(startSaveNote(note));
  };
  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = ({target}) => {
    const file = target.files[0];
    if(file) {
      dispatch(startUploading (file))
    }
  };

  return (
    <div className="notes__appbar">
      <span>{noteDate.format("dddd[,] D [de] MMMM YYYY")}</span>
      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
