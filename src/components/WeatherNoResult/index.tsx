import { NoResult } from "./StyledNoResult";

interface IProps{
  message:string;
}
const WeatherNoResult = ({message}:IProps) => {
  return (
    <NoResult className='no-results'>{message}</NoResult>
  )
}

export default WeatherNoResult