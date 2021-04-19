import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";

function Item() {
  const [checked, setChecked] = React.useState(true);
  const [textEdit, setTextEdit] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const handleChangeText = (event) => {
    setTextEdit(event.target.value);
  };

  const handleEnterEdited = (event) => {
    if (event.key === "Enter") {
      setIsEdit(false);
    }
  };

  const onClickDelete = () => {};

  return (
    <div>
      <div className="content-task">
        <div className="control-task">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          {!isEdit && (
            <label className={checked ? "item-completed" : "item-active"}>
              testing
            </label>
          )}
          {isEdit && (
            <TextField
              type="text"
              name="textEdit"
              color="secondary"
              value={textEdit}
              onChange={handleChangeText}
              className="show-edit"
              onKeyPress={handleEnterEdited}
            ></TextField>
          )}
          <EditIcon
            className="control-item control-edit-task"
            onClick={onClickEdit}
          />
          <CloseIcon className="control-item control-cancel-task" />
        </div>
      </div>
      <div className="delete-task"></div>
    </div>
  );
}

export default Item;
