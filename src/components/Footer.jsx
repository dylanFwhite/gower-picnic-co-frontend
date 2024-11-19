import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-sandal-yellow w-full h-fit flex flex-col">
      <h1
        className="text-2xl text-slate-50 font-normal mb-2 tracking-wider mx-auto my-8"
        style={{ fontFamily: "Roboto" }}
      >
        CONNECT WITH US
      </h1>
      <hr className="mx-auto mt-4 w-24 border-slate-50" />
      <div className="flex flex-row space-x-8 mx-auto my-8">
        <a
          href="https://www.facebook.com/thegowerpicniccompany"
          className=" rounded-full bg-white"
        >
          <FaFacebook className="w-10 h-10 text-[#4267B2]" />
        </a>
        <a
          href="https://www.instagram.com/#thegowerpicniccompany"
          className="bg-[#E1306C] rounded-full w-10 h-10 flex items-center justify-center"
        >
          <FaInstagram className="text-white w-7 h-7" />
        </a>
      </div>
      <h1
        className="text-2xl text-slate-50 font-light mb-2 tracking-wider mx-auto m4-8"
        style={{ fontFamily: "Roboto" }}
      >
        The Gower Picnic Company
      </h1>
      <h2
        className="text-md text-slate-50 font-light mb-2 tracking-wider mx-auto my-4 text-center"
        style={{ fontFamily: "Roboto" }}
      >
        21 Eastcliff
        <br />
        Southgate
        <br />
        Swansea
        <br />
        SA3 2AS
        <br />
        United Kingdom
        <br />
      </h2>
      <a
        href="mailto:rebecca@gower-picnic-company.co.uk"
        className="text-md text-slate-50 font-light mb-2 tracking-wider mx-auto my-4 text-center"
        style={{ fontFamily: "Roboto" }}
      >
        rebecca@gower-picnic-company.co.uk
      </a>

      <h3 className="text-sm text-slate-50 font-normal mb-2 tracking-wider mx-auto my-4 text-center">
        Copyright © {new Date().getFullYear()} The Gower Picnic Company - All
        Rights Reserved.
      </h3>
      <div className="h-4"></div>
    </div>
  );
}

export default Footer;
