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


export const loginUser = ({ username, password}) => {
    return (dispatch) => {
        Axios.get(`${API_URL}/users`, {
            params: {
                username,
            }
        })
        .then((result) => {
            // console.log(result.data)

            if(result.data.length){
                if(password === result.data[0].password){
                    delete result.data[0].password

                    localStorage.setItem("userDataEmmerce", JSON.stringify(result.data[0]))

                    dispatch({
                        type: "USER_LOGIN",
                        payload: result.data[0]
                    })
                }else{
                    // Handle Error wrong password
                    dispatch({
                        type: "USER_ERROR",
                        payload: "Wrong Password"
                    })
                }
            }else{
                //Handle Error Username Not Found
                dispatch({
                    type: "USER_ERROR",
                    payload: "Username Not Found"
                })
            }

            
        })
        .catch((err) => {
            alert('Error')
        })
    }
}

export const logoutUser = () => {
    localStorage.removeItem("userDataEmmerce");
    return {
        type: "USER_LOGOUT"
    }
}


export const userKeepLogin = (userData) => {
    return (dispatch) => {
        Axios.get(`${API_URL}/users`, {
            params: {
                id: userData.id
            }
        })
        .then((result) => {
            delete result.data[0].password
            
            localStorage.setItem("userDataEmmerce", JSON.stringify(result.data[0]))

            dispatch({
                type: "USER_LOGIN",
                payload: result.data[0]
            })
        })
        .catch((err) => {
            alert("Server Error")
        })
    }
}

export const checkStorage = () => {
    return{
        type: "CHECK_STORAGE",
    }
}