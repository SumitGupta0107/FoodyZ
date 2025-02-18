const Footer = () => {

  const todayDate = new Date();
  return (
    <div className="footer">
      Crafted With ❤️ By 
      <a href="https://www.linkedin.com/in/sumit-gupta-1571102b3/" target="_blank" title="Let's connect on LinkedIn">
          - Sumit Gupta
          </a>
          <i className="fa-solid fa-copyright"></i>
        {todayDate.getFullYear()}
        <strong>
          FoodyZ <span> All Rights Reserved </span>
        </strong>
    </div>
  );
};
  export default Footer;