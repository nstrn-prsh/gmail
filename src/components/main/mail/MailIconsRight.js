import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";

function MailIconsRight() {
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

export default MailIconsRight;
