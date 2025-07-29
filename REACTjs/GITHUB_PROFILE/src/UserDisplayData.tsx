import type { FC } from "react"

interface dataSuccessInterface {
    login: string | null,
    type: string | null,
    bio: string | null,
    followers: number | null,
    following: number | null,
    // [key: string]: unknown;
}
interface propType {
    data: dataSuccessInterface
}

const UserDisplayData:FC<propType> = ({data}) => {
  return (
    <div>
      <h1>USERNAME - {data.login}</h1>
      <h3>{data.bio}</h3>
      <p>{data.type}</p>
      <h3>FOLLOWERS - {data.followers}</h3>
      <h3>FOLLOWING - {data.following}</h3>
    </div>
  )
}

export default UserDisplayData
