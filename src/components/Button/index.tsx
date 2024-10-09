import React from "react";
import StyledButton from "./StyledBtn";

interface IProps{
  children:React.ReactNode;
  handleSearchBtn:()=>void;
  disabled:boolean;
}

const Button = ({children,handleSearchBtn,disabled}:IProps) => {
  return (
    
    <StyledButton  onClick={handleSearchBtn} disabled={disabled}>{children}</StyledButton>
  )
}

export default Button