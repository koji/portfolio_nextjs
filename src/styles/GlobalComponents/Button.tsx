import React from "react";

import { ButtonBack, ButtonFront } from "./index";

interface Props {
  alt?: boolean;
  form?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const Button = (props: Props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <ButtonFront
      alt={props.alt}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;
