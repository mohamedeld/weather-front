import React from 'react';
import { Headers } from './StyledHeader';
interface IProps{
  title:string;
}
const Header = ({title}:IProps) => {
  return (
    <Headers>{title}</Headers>
  )
}

export default React.memo(Header)