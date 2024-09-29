const Footer = () => {
  return (
    <footer className="text-center py-4">
      <div className="container mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Twitter
          </a>
          <a href="#" className="hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
