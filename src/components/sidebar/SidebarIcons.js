import { IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const sideOption = [
    { id: 1, icon: InboxIcon, title: "Inbox", number: 54, selected: false },
    { id: 2, icon: StarIcon, title: "Starred", number: 2, selected: false },
    {
         id: 3,
         icon: AccessTimeIcon,
         title: "Snoozed",
         number: 0,
         selected: false,
    },
    {
         id: 4,
         icon: LabelImportantIcon,
         title: "Important",
         number: 15,
         selected: false,
    },
    { id: 5, icon: NearMeIcon, title: "Sent", number: 37, selected: true },
    { id: 6, icon: NoteIcon, title: "Drafts", number: 6, selected: false },
    {
         id: 7,
         icon: ExpandMoreIcon,
         title: "More",
         number: null,
         selected: false,
    },
];

export function SidebarIconsFooter() {
     return (
          <div className='sidebar__footer'>
               <div className='sidebar__footerIcon'>
                    <IconButton>
                         <PersonIcon />
                    </IconButton>
                    <IconButton>
                         <DuoIcon />
                    </IconButton>
                    <IconButton>
                         <PhoneIcon />
                    </IconButton>
               </div>
          </div>
     );
}

