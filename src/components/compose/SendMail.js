import "./sendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

function SendMail() {
     const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
     } = useForm();

     const onSubmit = (formData) => console.log(formData);
     //  toye formData harchi ke to input ha neveshtim gharar dare

     return (
          <div className='sendMail'>
               <div className='sendMail__header'>
                    <h3>New Message</h3>
                    <CloseIcon className='SendMail__close' />
               </div>

               <form onSubmit={handleSubmit(onSubmit)}>
                    {/* age input haye required khali bashan submit anjam nemishe */}
                    <input
                         name='to'
                         type='text'
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
