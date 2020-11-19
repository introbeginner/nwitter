import React, {useEffect, useState} from 'react';
import AppRouter from 'components/Router';
import {authService} from "fbase";

function App() {
  const [init, setInit] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  //모든 요소 위, autho 전부를 다룸. 우리가 누구인지 알려준다. 페이지 변경시 유용
  const [userObj, setUserObj] = useState(null);
  
  useEffect(() => {
    authService.onAuthStateChanged( (user) => {
      if (user) {
        //setIsLoggedIn(true);
        //너무 크면 바뀌었는지 비교하질 못함. 그래서 안함.
        setUserObj({
          displayName:user.displayName,
          uid:user.uid,
          updateProfile:(args)=>user.updateProfile(args),
          }
          

        );
      } else {
        setUserObj(null);
        //setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName:user.displayName,
      uid:user.uid,
      updateProfile:(args)=>user.updateProfile(args),
    });
    //Object.assign({}, user)
  };
  //const auth = authService.currentUser
  
  return (
    <>
    {init ? <AppRouter refreshUser={refreshUser} isLoggedIn= {Boolean(userObj)} userObj={userObj}/> : "Initializing..."}
    <footer>&copy;  {new Date().getFullYear()} Nwitter </footer>
    </>
  );
}

export default App;
