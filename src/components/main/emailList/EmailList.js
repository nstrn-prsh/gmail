import "./emailList.css";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailListIcons from "./EmailListIcons";
import Section from "./../section/Section";
import EmailRow from "./../emailRow/EmailRow";
import { useState, useEffect } from "react";
import { db } from "./../../../utils/firebase";

function EmailList() {
     const [emails, setEmails] = useState([]);

     useEffect(() => {
          db.collection("emails")
               .orderBy("timestamp", "desc")
               // har taghiti to db ijad shod setEmails anjam beshe dobare
               .onSnapshot((snapshot) =>
                    setEmails(
                         snapshot.docs.map((doc) => ({
                              id: doc.id,
                              data: doc.data(),
                         }))
                    )
               );
     }, []);

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
                    {emails.map(
                         ({
                              id,
                              data: { to, subject, message, timestamp },
                         }) => (
                              <EmailRow
                                   key={id}
                                   id={id}
                                   title={to}
                                   subject={subject}
                                   description={message}
                                   time={new Date(
                                        timestamp?.seconds * 1000
                                   ).toUTCString()}
                              />
                         )
                    )}
               </div>
          </div>
     );
}

export default EmailList;
