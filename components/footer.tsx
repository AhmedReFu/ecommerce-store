const Footer = () => {
    let date = new Date()
    return (
      <div className="bg-white border-t">
        <div className="mx-auto py-10">
          <p className="text-center text-sm text-black">
            &copy; {date.getFullYear()} Today Is First, Inc. All rights reserved
          </p>
        </div>
      </div>
    );
}

export default Footer;