interface IProps{
  message:string;
}
const WeatherNoResult = ({message}:IProps) => {
  return (
    <p className='no-results'>{message}</p>
  )
}

export default WeatherNoResult