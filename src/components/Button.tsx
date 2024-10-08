import React from "react";

interface IProps{
  children:React.ReactNode;
  handleSearchBtn:()=>void;
  className:string;
}

const Button = ({children,handleSearchBtn,className}:IProps) => {
  return (
    
    <button className={className} onClick={handleSearchBtn}>{children}</button>
  )
}

export default Button