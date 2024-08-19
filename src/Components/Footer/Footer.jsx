const Footer = () => {
  return (
    <div className="bg-gray-200 dark:bg-black py-10">
      <div className="container mx-auto">
        <footer className="footer text-base-content p-10">
          <aside>
            <p className="text-black dark:text-white font-semibold text-2xl">
              Art And Craft
            </p>
            <p className="text-black dark:text-white font-normal text-sm w-64 mt-4">
              Art and craft are forms of creative expression that have been
              integral to human culture for thousands of years.
            </p>
          </aside>
          <nav className="text-black dark:text-white">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="text-black dark:text-white">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="text-black dark:text-white">
            <h6 className="footer-title ">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <p className="text-center mx-auto text-black dark:text-white">
          All copyright reserved @ 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
