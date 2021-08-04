import "./sendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import firebase from "firebase";
import { db } from "../../utils/firebase";

function SendMail() {
     const dispatch = useDispatch();

     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm();

     const onSubmit = (formData) => {
          console.log(formData);
          // push sth to database
          db.collection("emails").add({
               to: formData.to,
               subject: formData.subject,
               message: formData.message,
               timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });

          dispatch(closeSendMessage());
     };
     //  toye formData harchi ke to input ha neveshtim gharar dare

     return (
          <div className='sendMail'>
               <div className='sendMail__header'>
                    <h3>New Message</h3>
                    <CloseIcon
                         className='SendMail__close'
                         onClick={() => dispatch(closeSendMessage())}
                    />
               </div>

               <form onSubmit={handleSubmit(onSubmit)}>
                    {/* age input haye required khali bashan submit anjam nemishe */}
                    <input
                         name='to'
                         type='email'
                         placeholder='to'
                         {...register("to", { required: true })}
                    />
                    {errors.to && (
                         <p className='sendMail__error'>To is required!</p>
                    )}

                    <input
                         name='subject'
                         type='text'
                         placeholder='subject'
                         {...register("subject", { required: true })}
                    />
                    {errors.subject && (
                         <p className='sendMail__error'>Subject is required!</p>
                    )}

                    <input
                         name='message'
                         type='text'
                         placeholder='message...'
                         className='sendMail__message'
                         {...register("message", { required: true })}
                    />
                    {errors.message && (
                         <p className='sendMail__error'>Message is required!</p>
                    )}

                    <div className='sendMail__options'>
                         <Button
                              className='sendMail__send'
                              variant='contained'
                              color='primary'
                              type='submit'
                         >
                              Send
                         </Button>
                    </div>
               </form>
          </div>
     );
}

export default SendMail;
