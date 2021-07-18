import {useDispatch,useSelector} from 'react-redux'


export function useUserInfo(){
  const popupManagerState = useSelector((state) => {
    return state.userInfo
  });
  return popupManagerState;
}