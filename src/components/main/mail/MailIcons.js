import { useHistory } from "react-router";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";

 export function MailIconsLeft() {
     const history = useHistory();

     return (
          <div className='mail__toolsLeft'>
               <IconButton onClick={() => history.push("/")}>
                    <ArrowBackIcon />
               </IconButton>
               <IconButton>
                    <MoveToInboxIcon />
               </IconButton>
               <IconButton>
                    <ErrorIcon />
               </IconButton>
               <IconButton>
                    <DeleteIcon />
               </IconButton>
               <IconButton>
                    <EmailIcon />
               </IconButton>
               <IconButton>
                    <WatchLaterIcon />
               </IconButton>
               <IconButton>
                    <CheckCircleIcon />
               </IconButton>
               <IconButton>
                    <MoreVertIcon />
               </IconButton>
          </div>
     );
}

export function MailIconsRight() {
     return (
          <div className='mail__toolsRight'>
               <IconButton>
                    <UnfoldMoreIcon />
               </IconButton>
               <IconButton>
                    <PrintIcon />
               </IconButton>
               <IconButton>
                    <ExitToAppIcon />
               </IconButton>
          </div>
     );
}
