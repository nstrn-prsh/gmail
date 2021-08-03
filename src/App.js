import "./app.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Mail from "./components/main/mail/Mail";
import EmailList from "./components/main/emailList/EmailList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SendMail from "./components/compose/SendMail";
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
     const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

     return (
          <Router>
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
          </Router>
     );
}

export default App;
