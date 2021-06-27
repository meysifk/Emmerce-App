import Axios from 'axios'
import {API_URL} from '../../constants/API'

export const registerUser = ({fullName, username, email, password}) =>{
    return(dispatch) => {
        Axios.post(`${API_URL}/users`, {
            fullName,
            username,
            email,
            password,
            role: "user",
        })
        .then((result) => {
            delete result.data.password
            
            dispatch({
                type: "USER_LOGIN",
                payload: result.data
            })
            alert("Berhasil");
        })
        .catch(() => {
            alert('gagal')
        })
    }
}