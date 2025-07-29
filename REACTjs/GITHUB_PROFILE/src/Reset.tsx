import { useContext } from "react"
import { ResetContext } from "./App"
function Reset() {
    const resetContext = useContext(ResetContext);
    const handleClick = () => {
        resetContext.setReset(false);
    }
  return (
    <div>
        <button onClick={handleClick}>RESET</button>
    </div>
  )
}

export default Reset
