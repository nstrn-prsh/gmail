import "./mail.css";
import MailIconsLeft from "./MailIconsLeft";
import MailIconsRight from "./MailIconsRight";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

function Mail() {
     return (
          <div className='mail'>
               <div className='mail__tools'>
                    <MailIconsLeft />
                    <MailIconsRight />
               </div>

               <div className='mail__body'>
                    <div className='mail__bodyHeader'>
                         <h2>subject</h2>
                         <LabelImportantIcon className='mail__important' />
                         <p>Title</p>
                         <p className='mail__time'>10pm</p>
                    </div>

                    <div className='mail__message'>
                         <p>helooooooooooooooo</p>
                    </div>
               </div>
          </div>
     );
}

export default Mail;
