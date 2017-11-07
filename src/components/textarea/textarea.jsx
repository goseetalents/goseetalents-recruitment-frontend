import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';


const Textarea = (props) => {
  if(props.applicant !== undefined){
    return (
      <TextareaAutosize
        onBlur={
          (event) => props.updateApplicantField(
            props.applicant.id,
            event.target.name,
            event.target.value
          )
        }
        spellCheck="false"
        name={props.name}
        defaultValue={props.applicant[props.name]}
        className={`applicant-${props.name}`}>
      </TextareaAutosize>
    );
  }
  return null
}

export default Textarea;
