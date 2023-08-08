import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTHENTICATED_FAIL,
    AUTHENTICATED_SUCCESS,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,
    LOGIN_FAIL, 
    LOGIN_SUCCESS, 
    LOGOUT_FAIL, 
    LOGOUT_SUCCESS, 
    REMOVE_AUTH_LOADING, 
    SET_AUTH_LOADING, 
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS
} 
from "./types"
import { setAlert } from './alert'


// Load user 
export const load_user = () => async dispatch => {
    try {
        const response = await fetch('/api/accounts/user', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await response.json();

        if (response.status === 200) {
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: LOAD_USER_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: LOAD_USER_FAIL
        });
    }
};


// Authentication check
export const check_auth_status = () => async dispatch => {
    try {
        const response = await fetch('/api/accounts/verify', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (response.status === 200) {
            dispatch({
                type: AUTHENTICATED_SUCCESS
            });
            dispatch(load_user());
        } else {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};


// Activation
export const activation = (uid, token) => async dispatch => {
    const body = JSON.stringify({ uid, token });
    try {
        const response = await fetch('/api/accounts/activate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        });

        if (response.status === 200) {
            dispatch({
                type: ACTIVATION_SUCCESS
            });
            dispatch(setAlert('Активация прошло успешно!', 'success'))
        } else {
            dispatch({
                type: ACTIVATION_FAIL
            });
            dispatch(setAlert('Активация не выполнено!', 'error'))
        }
    } catch(err) {
        dispatch({
            type: ACTIVATION_FAIL
        });
        dispatch(setAlert('Активация не выполнено!', 'error'))
    }
}


// Sign up
export const signup = (first_name, last_name, username, email, password, re_password) => async dispatch => {
    const body = JSON.stringify({ first_name, last_name, username, email, password, re_password });

    dispatch({
        type: SET_AUTH_LOADING
    });

    try {
        const res = await fetch('/api/accounts/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: body
        });

        if (res.status === 201) {
            dispatch({
                type: REGISTER_SUCCESS
            });
            dispatch(setAlert("Регистрация сәтті аяқталды! Жүйеге кірсең болады.", "success"))
        } else {
            dispatch({
                type: REGISTER_FAIL
            });
            dispatch(setAlert("Регистрация жасауда қателік кетті! Мәліметтерді дұрыс енгізгеніңе мән бер.", "error"))
        }
    } catch(err) {
        dispatch({
            type: REGISTER_FAIL
        });
        dispatch(setAlert("Регистрация жасауда қателік кетті! Мәліметтерді дұрыс енгізгеніңе мән бер.", "error"))
    }

    dispatch({
        type: REMOVE_AUTH_LOADING
    });
};


// Login
export const login = (email, password) => async dispatch => {
    const body = JSON.stringify({ email, password })

    dispatch({
        type: SET_AUTH_LOADING
    })
    try {
        const response = await fetch('/api/accounts/login/', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body
        })
        if (response.status === 200) {
            dispatch({
                type: LOGIN_SUCCESS
            })
            dispatch(setAlert('Аккаунт сәтті авторизацияланды!', 'success'))
        } else {
            dispatch({
                type: LOGIN_FAIL
            })
            dispatch(setAlert("Жүйеге кіруде қателік кетті. Email немесе пароль қате енгізілген болуы мүмін!", 'error'))
        }

    } catch(err) {
        dispatch({
            type: LOGIN_FAIL
        })
        dispatch(setAlert("Жүйеге кіруде қателік кетті. Email немесе пароль қате енгізілген болуы мүмін!", "error"))
    }

    dispatch({
        type: REMOVE_AUTH_LOADING
    })
}


// Password reset 
export const passwordReset = (email) => async dispatch => {
    const body = JSON.stringify({ email });
    try {
        const response = await fetch('/api/accounts/reset-password/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        });

        if(response.status === 200) {
            dispatch({ type: PASSWORD_RESET_SUCCESS });
            dispatch(setAlert('Енгізілген поштаға хабарлама кетті!', 'success'))
        } else {
            dispatch({ type: PASSWORD_RESET_FAIL });
            dispatch(setAlert('Қателік кетті!', 'error'))
        }
        
    } catch (err) {
        dispatch({ type: PASSWORD_RESET_FAIL });
        dispatch(setAlert("Қателік кетті!", 'error'))
    }
}


// Reset password confirm
export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const body = JSON.stringify({ uid, token, new_password, re_new_password });
    try {
        const response = await fetch('/api/accounts/reset-password-confirm/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        });

        if(response.status === 200) {
            dispatch({ type: PASSWORD_RESET_CONFIRM_SUCCESS });
            dispatch(setAlert("Жаңа пароль енгізілді!", 'success'))
        } else {
            dispatch({ type: PASSWORD_RESET_CONFIRM_FAIL });
            dispatch(setAlert("Қателік кетті!", 'error'))
        }
        
    } catch (err) {
        dispatch({  type: PASSWORD_RESET_CONFIRM_FAIL });
        dispatch(setAlert("Қателік кетті!", 'error'))
    }
};


// Logout
export const logout = () => async dispatch => {
    try {
        const response = await fetch('/api/accounts/logout', {
            method: "POST",
            headers: {
                "Accept": "application/json",
            }
        })

        if (response.status === 200) {
            dispatch({
                type: LOGOUT_SUCCESS
            })
            dispatch(setAlert("Жүйеден шығарылды!", 'success'))
        } else {
            dispatch({
                type: LOGOUT_FAIL
            })
            dispatch(setAlert("Қателік кетті!", 'error'))
        }
    } catch (err) {
        dispatch({
            type: LOGOUT_FAIL
        })
        dispatch(setAlert("Қателік кетті!", 'error'))
    }
}