import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOptions from "./SidebarOptions";
import { SidebarIconsFooter, sideOption } from "./SidebarIcons";
import "./sidebar.css";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";

function Sidebar() {
     const dispatch = useDispatch();

     return (
          <div className='sidebar'>
               <Button
                    onClick={()=>dispatch(openSendMessage())}
                    className='sidebar__compose'
                    startIcon={<AddIcon fontSize='large' />}
               >
                    compose
               </Button>

               {sideOption.map((option) => (
                    <div key={option.id}>
                         <SidebarOptions
                              Icon={option.icon}
                              title={option.title}
                              number={option.number}
                              selected={option.selected}
                         />
                    </div>
               ))}

               <SidebarIconsFooter />
          </div>
     );
}

export default Sidebar;
