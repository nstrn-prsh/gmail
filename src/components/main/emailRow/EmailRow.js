import { useHistory } from "react-router";
import "./emailRow.css";
import EmailRowIcons from "./EmailRowIcons";
import { useDispatch } from "react-redux";
import { selectMail } from "../../../features/mailSlice";

function EmailRow({ title, subject, time, id, description }) {
     const dispatch = useDispatch();
     const history = useHistory();

     const openMail = () => {
          dispatch(selectMail({ title, subject, time, id, description }));
          history.push("/mail");
     };

     return (
          <div className='emailRow' onClick={openMail}>
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
