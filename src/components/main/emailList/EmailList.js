import "./emailList.css";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailListIcons from "./EmailListIcons";
import Section from './../section/Section';
import EmailRow from './../emailRow/EmailRow';

function EmailList() {
     return (
          <div className='emailList'> 
               {/* top section hiding */}
               <EmailListIcons />

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
