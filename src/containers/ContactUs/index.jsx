import AppWrapperHOC from "../CommonHOC/AppWrapperHOC";
import StyledContactUs from './StyledContactUs';

const ContactUs = () => {
  return (
    <StyledContactUs>
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </StyledContactUs>
  );
};

export default AppWrapperHOC(ContactUs);