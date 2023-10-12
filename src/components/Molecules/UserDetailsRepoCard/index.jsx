//importacion de los estilos
import {container,repoList} from "./UserDetailsRepoCard.module.css"
//importaciones de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar,faCodeFork,faEye } from "@fortawesome/free-solid-svg-icons"

const UserDetailsRepoCard=({language,name,watchers,forks,stargazers_count })=>{
return(<div className={container}>
    <ul className={repoList}>
        <li><b>Repository name:</b> {name}</li>
        <li><b>Language:</b> {language}</li>
        <li><b>Watchers:</b> {watchers} <FontAwesomeIcon icon={faEye}/></li>
        <li><b>Stars:</b> {stargazers_count} <FontAwesomeIcon icon={faStar}/></li>
        <li><b>Forks:</b> {forks} <FontAwesomeIcon icon={faCodeFork}/></li>
    </ul>
</div>)
}
export default UserDetailsRepoCard