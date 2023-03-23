import React from "react";
import { StyledInput } from "./style";

const FormItem = ({ name, placeholder, type, onChange, value, onBlur }) => {
  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
    </>
  );
};

export default FormItem;
