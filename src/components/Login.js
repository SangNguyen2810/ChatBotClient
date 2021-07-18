import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import * as apiUtils from '../utils/api/api';
import './Login.scss'
import dbError from "../static/DbError";
import {INPUT_BOX_TYPE} from "../constant/InputBoxType"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from "react-router-dom";
import {logIn,logOut} from "../redux-store/features/userReducer";


export default function Login() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [didClickLogin, setDidClickLogin] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch()


  const userInfo = useSelector((state) => {
    console.log("Sang dep trai state:",state);
    return state.userInfo
  });


  function handleError(err) {
    notify(err)
  }

  function changePage() {
    setIsRegister(!isRegister);
  }

  function login(e) {
    e && e.preventDefault();
    setDidClickLogin(true);

    apiUtils.login({username, password})
      .then((data) => {
        if (data) {
          dispatch(logIn(data))
          if (data.err) {
            handleError(data.err);
          } else {
            history.push('/dashboard');
          }
        }
      })
      .catch((err) => {
        if (err)
          console.log("Sang dep trai err: ", err);
      })
  }

  function register(e) {
    e && e.preventDefault();
    apiUtils.register({username, password, email, firstName, lastName, dateOfBirth})
      .then((data) => {
        if (data) {
          if (data.err) {
            handleError(data.err);
          } else {
            changePage();
          }
        } else {
          notify("There was something wrong!!!")
        }
      })
      .catch((err) => {
        if (err)
          console.log("Sang dep trai err: ", err);
      })
  }

  function handleOnChangeInput(e, type) {
    const value = e.target.value;
    switch (type) {
      case INPUT_BOX_TYPE.USERNAME: {
        setUsername(value);
        break;
      }
      case INPUT_BOX_TYPE.PASSWORD: {
        setPassword(value);
        break;
      }
      case INPUT_BOX_TYPE.CONFIRM_PASSWORD: {
        setConfirmPassword(value);
        break;
      }
      case INPUT_BOX_TYPE.EMAIL: {
        setEmail(value);
        break;
      }
      case INPUT_BOX_TYPE.FIRST_NAME: {
        setFirstName(value);
        break;
      }
      case INPUT_BOX_TYPE.LAST_NAME: {
        setLastName(value);
        break;
      }
      case INPUT_BOX_TYPE.DATE_OF_BIRTH: {
        setDateOfBirth(value);
        break;
      }
      default:
        break;

    }
  }

  function notify(err) {
    toast.error(JSON.stringify(err));
  }

  if (isRegister) {
    return (
      <div className="Login">
        <div className="Login__Form">
          <div className="Login__Form__Container">
            <div className="Login__Form__Container--username">
              <input type="text" placeholder={INPUT_BOX_TYPE.USERNAME}
                     onChange={(e) => {
                       handleOnChangeInput(e, INPUT_BOX_TYPE.USERNAME)
                     }}/>
            </div>
            <div className="Login__Form__Container--username">
              <input type="text" placeholder={INPUT_BOX_TYPE.PASSWORD}
                     onChange={(e) => {
                       handleOnChangeInput(e, INPUT_BOX_TYPE.PASSWORD)
                     }}/>
            </div>
            <div className="Login__Form__Container--username">
              <input type="text" placeholder={INPUT_BOX_TYPE.EMAIL}
                     onChange={(e) => {
                       handleOnChangeInput(e, INPUT_BOX_TYPE.EMAIL)
                     }}/>
            </div>
            <div className="Login__Form__Container--username">
              <input type="text" placeholder={INPUT_BOX_TYPE.FIRST_NAME}
                     onChange={(e) => {
                       handleOnChangeInput(e, INPUT_BOX_TYPE.FIRST_NAME)
                     }}/>
            </div>
            <div className="Login__Form__Container--username">
              <input type="text" placeholder={INPUT_BOX_TYPE.LAST_NAME}
                     onChange={(e) => {
                       handleOnChangeInput(e, INPUT_BOX_TYPE.LAST_NAME)
                     }}/>
            </div>
            <div className="Login__Form__Container--username">
              <input type="text" placeholder={INPUT_BOX_TYPE.DATE_OF_BIRTH}
                     onChange={(e) => {
                       handleOnChangeInput(e, INPUT_BOX_TYPE.DATE_OF_BIRTH)
                     }}/>
            </div>
            <div className="Login__Form__Container--button--register">
              <button onClick={(e) => register(e)}>Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Login">
        <div>
          <ToastContainer/>
        </div>
        <div className="Login__Form">
          <div className="Login__Form__Container">
            <div className="Login__Form__Container--username">
              <input type="text" placeholder={INPUT_BOX_TYPE.USERNAME}
                     onChange={(e) => {
                       handleOnChangeInput(e, INPUT_BOX_TYPE.USERNAME)
                     }}/>
            </div>
            <div className="Login__Form__Container--username">
              <input type="text" placeholder={INPUT_BOX_TYPE.PASSWORD}
                     onChange={(e) => {
                       handleOnChangeInput(e, INPUT_BOX_TYPE.PASSWORD)
                     }}/>
            </div>

            <div className="Login__Form__Container--button--login">
              <button
                onClick={(e) => {
                  login(e)
                }}
                disabled={didClickLogin}
                style={{backgroundColor: didClickLogin ? '#020629' : '#2f334d'}}>
                Log In
              </button>
            </div>
            <div className="Login__Form__Container--button--register">
              <button
                onClick={(e) => {
                  changePage(e)
                }}
                disabled={didClickLogin}
                style={{backgroundColor: didClickLogin ? '#020629' : '#2f334d'}}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }


}