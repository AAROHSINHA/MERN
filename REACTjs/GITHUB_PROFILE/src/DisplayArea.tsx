import { useContext, useEffect, useState } from "react"
import { ResetContext } from "./App"
import UserDisplayData from "./UserDisplayData"

interface dataSuccessInterface {
    login: string | null,
    type: string | null,
    bio: string | null,
    followers: number | null,
    following: number | null,
    // [key: string]: unknown;
}
interface dataFailureInterface {
    message: string
}

function DisplayArea() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<dataSuccessInterface | dataFailureInterface>({
    message: "Unable To Fetch Data",
  });
  const [success, setSuccess] = useState(false);
  const parentContext = useContext(ResetContext);
  
  useEffect(() => {
    if(parentContext.reset && parentContext.userName!=""){
        setLoading(true);
        const promise = fetch(`https://api.github.com/users/${parentContext.userName}`);
        promise.then(jsonData => {
            jsonData.json().then(userData => {
                const user_data = {
                    login: userData.login,
                    type: userData.type,
                    bio: userData.bio,
                    followers: userData.followers,
                    following: userData.following,
                }
                setUserData(user_data)
                setLoading(false);
                setSuccess(true);
            }).catch(() => setSuccess(false))
        }).catch(() => setSuccess(false))
    }else if(parentContext.reset && parentContext.userName==""){
        setSuccess(false);
        setLoading(false);
    }
  }, [parentContext.reset, parentContext.userName])
  
  return (
    <div style={{paddingTop: '1em', paddingBottom: '1em',  fontFamily: 'sans-serif'}}>
        {parentContext.reset ? 
        loading ? "Fetching Data" : (success ? 'login' in userData?<UserDisplayData data={userData}/>:null : 'message' in userData? userData.message : null) : 
        <div style={{
        color: 'red',
        paddingTop: '1em',
        paddingBottom: '1em',
        fontFamily: 'sans-serif'
    }}>
        Type the username and click Enter!
    </div>
        }
    </div>
  )
}

export default DisplayArea
