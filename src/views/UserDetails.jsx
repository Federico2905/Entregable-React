//importaciones de hooks
import { useContext, useEffect } from 'react'
//importaciones del Router
import {useParams} from 'react-router-dom'
//importacion de un context
import { userContext } from '../contexts/userContext'

const UserDetails = () =>{
    const {CurrentUser}=useContext(userContext)
    useEffect(()=>{
        console.log(CurrentUser)
    },[])
    const {username} = useParams()
    return(
        <p>{username}</p>
    )
}
export default UserDetails