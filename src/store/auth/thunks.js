import { singInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => async (dispatch) => {
    dispatch(checkingCredentials())
}

export const startGoogleSignIn = () => async (dispatch) => {
    dispatch(checkingCredentials())

    const result = await singInWithGoogle()
    if (!result.ok) return dispatch(logout(result.errorMessage))

    dispatch(login(result))


}