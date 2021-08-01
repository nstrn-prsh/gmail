import "./emailList.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { IconButton, Checkbox } from "@material-ui/core";
import Section from "./Section";
import EmailRow from "./EmailRow";

function EmailList() {
     return (
          <div className='emailList'>
               {/* top section hiding */}
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

               {/* top section sticking */}
               <div className='emailList__sections'>
                    <Section
                         Icon={InboxIcon}
                         title='Primary'
                         color='red'
                         selected
                    />
                    <Section Icon={PeopleIcon} title='Social' color='#1a79e8' />
                    <Section
                         Icon={LocalOfferIcon}
                         title='Promotions'
                         color='green'
                    />
               </div>

               {/* email rows */}
               <div className='emailList__list'>
                    <EmailRow
                         title='twitch'
                         subject='hey follow a streamer'
                         description='this is a test'
                         time='10pm'
                    />
                    <EmailRow
                         title='twitch'
                         subject='hey follow a streamer'
                         description='this is a test'
                         time='10pm'
                    />
               </div>
          </div>
     );
}

export default EmailList;
