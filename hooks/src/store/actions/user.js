export default function login(dispatch, nome){
    dispatch({type: 'login', payload: nome})
}