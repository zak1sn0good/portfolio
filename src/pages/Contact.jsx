import ContactLayout from "../layouts/ContactLayout";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import Notification from "../components/Notification";
import Modal from "../components/Modal";

const Contact = () => {

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFormSubmit = () => {
    setLoading(true);
    setError(false);
    fetch('https://portfolio-backend-9gmv.onrender.com/contact', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        email : email,
        subject : subject,
        message : message
      })
    })
    .then(async (response) => {
      const data = await response.json();
      setLoading(false);
      if(response.status === 201){
        setSuccess(data.message);
        setEmail('');
        setSubject('');
        setMessage('');
      }
      if(response.status === 400 || response.status === 500){
        setError(data.message);
      }
    })
    .catch((err) => {
      setLoading(false);
      setError(err.message);
    });
  };

  return (
    <ContactLayout>
      <div className="flex flex-col space-y-2">
        <h2 className="text-white text-3xl font-semibold">Contact</h2>
        <div className="w-full bg-pink-700 h-[2px]"/>
      </div>
      <p className="my-2 font-light text-lg">submit the form below or send me an email - zaki97.usma@gmail.com</p>
      <input
        value={subject}
        onChange={(e) => setSubject(e.target.value)} 
        type="text" 
        placeholder="Subject"
        className="w-full max-w-xl mt-2 p-2 bg-[#ccd6f6] text-black outline-none"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        type="email" 
        placeholder="Email"
        className="w-full max-w-xl my-4 p-2 bg-[#ccd6f6] text-black outline-none"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
        rows={10} 
        placeholder="Message"
        className="w-full max-w-xl p-2 bg-[#ccd6f6] text-black outline-none"
      ></textarea>
      <button
        disabled={loading}
        onClick={handleFormSubmit} 
        className="my-4 px-4 py-2 flex items-center text-white text-lg font-medium border-2 border-white rounded-sm hover:border-pink-700 hover:text-pink-700 transition-colors duration-200 disabled:text-gray-400 disabled:border-gray-400">
        {
          loading ?
          <>
            <span className="mr-2">loading...</span>
            <div className="animate-spin">
              <AiOutlineLoading3Quarters size={"18px"}/>
            </div>
          </>
          :
          <>
            <span className="mr-2">Submit</span>
            <RiSendPlaneFill size={"18px"}/>
          </>
        }
      </button>
      <Modal>
        {
          error
          &&
          <Notification
            key={"error"}
            message={error}
            onClose={() => setError(null)}
            type='error'
          />
        }
        {
          success
          &&
          <Notification
            key={"success"}
            message={success}
            onClose={() => setSuccess(null)}
            type='success'
          />
        }
      </Modal>
    </ContactLayout>
  );
}
 
export default Contact;