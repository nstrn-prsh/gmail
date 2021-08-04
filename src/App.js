import "./app.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Mail from "./components/main/mail/Mail";
import EmailList from "./components/main/emailList/EmailList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SendMail from "./components/compose/SendMail";
import { useSelector, useDispatch } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./components/user/Login";
import { useEffect } from "react";
import { auth } from "./utils/firebase";

function App() {
     const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
     const user = useSelector(selectUser);
     const dispatch = useDispatch();

     useEffect(() => {
          auth.onAuthStateChanged((user) => {
               // the user is logged in
               if (user) {
                    dispatch(
                         login({
                              displayName: user.displayName,
                              email: user.email,
                              photoUrl: user.photoURL,
                         })
                    );
               }
               // the user is NOT logged in
               else {
               }
          });
     }, []);

     return (
          <Router>
               {!user ? (
                    <Login />
               ) : (
                    <div className='app'>
                         <Header />

                         <div className='app__body'>
                              <Sidebar />

                              <Switch>
                                   <Route path='/mail'>
                                        <Mail />
                                   </Route>
                                   <Route path='/'>
                                        <EmailList />
                                   </Route>
                              </Switch>
                         </div>

                         {sendMessageIsOpen && <SendMail />}
                    </div>
               )}
          </Router>
     );
}

export default App;
