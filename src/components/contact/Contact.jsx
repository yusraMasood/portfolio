import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
    const onSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_edgv36f', 'template_f819yoo', e.target, 'user_Xxt81R8wSD3WvuxmHwYEb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <div className="contact" id="contact">
        <div className="left">
            <img src="https://static.mbshosting.co.uk/eis-bw/media/rebranding%20headers/Approved%20illustration%20deck_Student%20wellbeing%20support%20CROPPED-%20copy%203.png" alt=""/>
        </div>
        <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={onSubmit}>
        <input type="text" placeholder="name" name="name"/>
            <input type="text" placeholder="Email" name="email"/>
            <input type="text" placeholder="subject" name="subject"/>
            <textarea placeholder="Message" name="message"></textarea>
            <button type="submit" value="send">Send</button>
        </form>
            
        </div>
            
        </div>
    )
}
