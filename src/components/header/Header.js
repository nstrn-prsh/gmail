import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { IconButton, Avatar } from "@material-ui/core";
import gmaiLogo from "./../../assets/gmail-logo.png";

function Header() {
     return (
          <div className='header'>
               <div className='header__left'>
                    <IconButton>
                         <MenuIcon />
                    </IconButton>
                    <img src={gmaiLogo} alt='gmail-logo' />
               </div>

               <div className='header__middle'>
                    <SearchIcon />
                    <input type='text' placeholder='search mail' />
                    <ArrowDropDownIcon className='header__inputCaret' />
               </div>

               <div className='header__right'>
                    <IconButton>
                         <AppsIcon />
                    </IconButton>
                    <IconButton>
                         <NotificationsIcon />
                    </IconButton>
                    <Avatar />
               </div>
          </div>
     );
}

export default Header;
