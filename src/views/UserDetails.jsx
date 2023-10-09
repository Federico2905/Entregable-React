import {useParams} from 'react-router-dom'

const UserDetails = () =>{
    const {username} = useParams()
    console.log(username)
    return(
        <p>{username}</p>
    )
}
export default UserDetails