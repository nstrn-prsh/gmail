import { useHistory } from "react-router";
import "./emailRow.css";
import EmailRowIcons from "./EmailRowIcons";

function EmailRow({ title, subject, time, id, description }) {
     const history = useHistory();

     return (
          <div className='emailRow' onClick={() => history.push("/mail")}>
               <EmailRowIcons />

               <h3 className='emailRow__title'>{title}</h3>

               <div className='emailRow__message'>
                    <h4>
                         {subject}{" "}
                         <span className='emailRow__description'>
                              - {description}
                         </span>
                    </h4>
               </div>

               <p className='emailRow__time'>{time}</p>
          </div>
     );
}

export default EmailRow;
