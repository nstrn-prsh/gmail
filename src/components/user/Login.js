import "./login.css";
import GLogo from "./../../assets/gmail-logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSLice";

function Login() {
     const dispatch = useDispatch();

     const signIn = () => {
          auth.signInWithPopup(provider)
               .then(({ user }) => {
                    dispatch(
                         login({
                              displayName: user.displayName,
                              email: user.email,
                              photoUrl: user.photoURL,
                         })
                    );
               })
               .catch((error) => alert(error.message));
     };

     return (
          <div className='login'>
               <div className='login__container'>
                    <img src={GLogo} alt='login' />
                    <Button
                         variant='contained'
                         color='primary'
                         onCLick={signIn}
                    >
                         LOGIN
                    </Button>
               </div>
          </div>
     );
}

export default Login;
