import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import { IconButton, Checkbox } from "@material-ui/core";

function EmailListIcons() {
     return (
          <div className='emailList__settings'>
               <div className='emailList_settingsLeft'>
                    <Checkbox />

                    <IconButton>
                         <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                         <RedoIcon />
                    </IconButton>
                    <IconButton>
                         <MoreVertIcon />
                    </IconButton>
               </div>

               <div className='emailList__settingRight'>
                    <IconButton>
                         <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                         <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                         <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                         <SettingsIcon />
                    </IconButton>
               </div>
          </div>
     );
}

export default EmailListIcons;
