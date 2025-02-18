import {useState} from "react";
import ContactUs from "../static/contactUs.avif";

const Contact = () =>
{
    const [query,setQuery] = useState(false);

    const handleQuery = (e) => {
        e.preventDefault();
        setQuery(true);
    }

    return (
        <div className="contact-container">
            <div className="contact-left">
                <img src={ContactUs} alt="Contact US"/>
                </div>
                <div className="contact-right">
                    <h1>Contact Us</h1>
                    <form onSubmit={handleQuery}>
                        <input type="text" placeholder="Enter your name"
                        required/>
                        <input type="email"
                         placeholder="Enter your email"
                        required/>
                        <textarea type="text" placeholder="Enter your Message" required></textarea>
                        <button type="submit">Submit</button>

                        {query && <span>Thanks for contacting, We will get back to you Shortly!!</span>}
                    </form>
        </div>
        </div>
    );
};

export default Contact;