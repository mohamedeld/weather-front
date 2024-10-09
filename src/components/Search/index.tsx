import StyledInput from "./StyledInput";

interface IProps{
  search:string;
  handleSearch:(e:React.ChangeEvent<HTMLInputElement>)=> void;
  type:string;
  placeholder:string;
  name:string;
}

const Search = ({search,handleSearch,type,placeholder,name}:IProps) => {
  return (
      <StyledInput type={type} value={search} name={name} onChange={handleSearch} placeholder={placeholder} />
  )
}

export default Search