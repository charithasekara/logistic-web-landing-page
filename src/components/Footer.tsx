const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Best Logistic Shipping Partner. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#privacy" className="hover:text-yellow-500">Privacy Policy</a>
          <a href="#terms" className="hover:text-yellow-500">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;