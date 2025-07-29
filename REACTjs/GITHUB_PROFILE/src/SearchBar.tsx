import { useContext, useEffect } from "react";
import { useRef } from "react";
import { ResetContext } from "./App";
function SearchBar() {
    const parentContext = useContext(ResetContext);
    const searchBar = useRef<HTMLInputElement>(null);

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        if(searchBar.current && searchBar.current?.value!=""){
            parentContext.setUserName(searchBar.current.value);
        }
        parentContext.setReset(true);
    }

    useEffect(() => {
        if(!parentContext.reset && searchBar.current && searchBar.current?.value!=""){
            searchBar.current.value = "";
        }
    }, [parentContext.reset])

  return (
    <div>
        <form action="" onSubmit={handleClick}>
            <input type="text" placeholder="Enter Username" ref={searchBar}/>
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchBar
