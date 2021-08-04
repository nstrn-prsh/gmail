import "./mail.css";
import { MailIconsLeft, MailIconsRight } from "./MailIcons";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { selectOpenMail } from "../../../features/mailSlice";
import { useSelector } from "react-redux";

function Mail() {
     const selectedMail = useSelector(selectOpenMail);

     return (
          <div className='mail'>
               <div className='mail__tools'>
                    <MailIconsLeft />
                    <MailIconsRight />
               </div>

               <div className='mail__body'>
                    <div className='mail__bodyHeader'>
                         <h2>{selectedMail?.subject}</h2>
                         <LabelImportantIcon className='mail__important' />
                         <p>{selectedMail?.title}</p>
                         <p className='mail__time'>{selectedMail?.time}</p>
                    </div>

                    <div className='mail__message'>
                         <p>{selectedMail?.description}</p>
                    </div>
               </div>
          </div>
     );
}

export default Mail;
