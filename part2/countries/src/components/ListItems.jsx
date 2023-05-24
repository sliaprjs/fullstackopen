import Country from "./Country";

const ListItems = ({filteredList}) => {

  return (
    <>
      {filteredList.map(item => <Country key={item.name.common} country={item} disabled/>)}
    </>
  )
}

export default ListItems