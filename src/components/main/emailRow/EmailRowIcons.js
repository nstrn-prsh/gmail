import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { Checkbox, IconButton } from "@material-ui/core";

function EmailRowIcons() {
     return (
          <div className='emailRow__options'>
               <Checkbox />
               <IconButton>
                    <StarBorderOutlinedIcon />
               </IconButton>
               <IconButton>
                    <LabelImportantOutlinedIcon />
               </IconButton>
          </div>
     );
}

export default EmailRowIcons;
