import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { IconButton, Avatar } from "@material-ui/core";
import gmaiLogo from "./../../assets/gmail-logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "./../../features/userSlice";
import { auth } from "../../utils/firebase";

function Header() {
     const user = useSelector(selectUser);
     const dispatch = useDispatch();

     const signOut = () => {
          auth.signOut().then(() => {
               dispatch(logout());
          });
     };

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
                    <Avatar src={user?.photoUrl} onClick={signOut} />
               </div>
          </div>
     );
}

export default Header;
