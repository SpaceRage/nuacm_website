const Footer = () => {
    return (
      <footer className="bg-black text-white p-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">Follow us on:</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/company/neu-acm/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tiffany-blue"
            >
              LinkedIn
            </a>
            <a
              href="https://acmnortheaste-ufq4028.slack.com/join/shared_invite/zt-2tvi4bbwl-~iCfzBRxEYW1FfKioWH6ew#/shared-invite/email"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tiffany-blue"
            >
              Slack
            </a>
            <a
              href="https://www.instagram.com/northeasternacm/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tiffany-blue"
            >
              Instagram
            </a>
          </div>
          <br></br>
          <div>
          <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdhdujd33N3DV40SqXa8NKmrvHJCS1CmIBOWGDmnjKR77eonA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tiffany-blue"
            >
              Join our Newletter
            </a>
            </div>
          <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} ACM @ Northeastern</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  