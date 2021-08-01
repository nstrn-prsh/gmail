import "./app.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Mail from "./components/main/Mail";
import EmailList from "./components/main/EmailList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
     return (
          <Router>
               <div className='App'>
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
               </div>
          </Router>
     );
}

export default App;
