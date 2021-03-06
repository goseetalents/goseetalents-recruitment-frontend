import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';


const Textarea = (props) => (
  <TextareaAutosize
    onBlur={
      (event) => props.updateApplicantField(
        props.applicant.id,
        event.target.name,
        event.target.value
      )
    }
    onChange={
      (event) => props.handleTextAreValueChange(
        event.target.name,
        event.target.value
      )
    }
    spellCheck="false"
    placeholder="-"
    name={props.name}
    defaultValue={props.applicant[props.name]}
    className={`applicant-${props.name}`}>
  </TextareaAutosize>
);

export default Textarea;
