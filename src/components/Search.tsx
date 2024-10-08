
interface IProps{
  search:string;
  handleSearch:(e:React.ChangeEvent<HTMLInputElement>)=> void;
  type:string;
  placeholder:string;
  name:string;
  className:string;
}

const Search = ({search,handleSearch,type,placeholder,name,className}:IProps) => {
  return (
      <input type={type} value={search} name={name} onChange={handleSearch} placeholder={placeholder} className={className}/>
  )
}

export default Search