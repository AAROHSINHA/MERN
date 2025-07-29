import {  useState } from "react";
import { createContext } from "react";
import SearchBar from "./SearchBar";
import DisplayArea from "./DisplayArea";
import Reset from "./Reset";

interface ResetContextType {
  reset : boolean,
  userName: string,
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

export const ResetContext = createContext<ResetContextType>({
  reset: false,
  userName: "",
  setReset: () => {},
  setUserName: () => {}
});
function App() {

  const [reset, setReset] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <div>
      <ResetContext.Provider value={{reset, userName, setReset, setUserName}}>
      <SearchBar />
       <DisplayArea />
      {reset ? <Reset /> : null}
      </ResetContext.Provider>
    </div>
  )
}

export default App
