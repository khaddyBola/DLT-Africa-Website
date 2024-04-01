"use client";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" h-[469px] bg-[#EFFFE2] flex flex-col items-center justify-center text-[18px]">
      <div className=" flex flex-row justify-center gap-[50px] mr-[300px] ">
        <div className="w-auto  h-auto min-h-[80px] flex flex-col items-center  ml-[80px]">
          <div className="flex flex-col gap-10 mt-[76px] w-[211px] justify-center items-center">
            <a href="">
              {" "}
              <img
                src="https://dltafrica.io/static/media/dlt-logo.5ab17ff18a5c4ae8adb1df98544f1f69.svg"
                alt="logo"
                className="w-[126px] h-[50.797px] "
              />
            </a>

            <p className="text-neutral-black font-poppins text-[16px] font-normal leading-[120%] w-[211px] h-[19px] text-center">
              Innovating Through web3...
            </p>
          </div>
        </div>

        <div className="w-auto max-w-[800px] h-auto min-h-[244px] inline-flex items-start gap-50  mt-[63px] ml-[150px]">
          <div className="w-[291px] h-[123px]">
            <h1 className=" text-[#C54809] font-sans  text-[24px] font-bold leading-normal mb-[21px] text-[24px]">
              Our Mission
            </h1>
            <p className="text-[#252A24] font-source-sans-pro  font-normal leading-normal w-full h-auto min-h-[69px] text-[18px]">
              To help build Web3 talents from ground zero, through full-stack
              and smart contract developments
            </p>
          </div>
          <div className="w-[264px] h-auto min-h-[244px] ml-[50px]  ">
            <h1 className=" text-[#C54809] font-sans  text-[24px] font-bold leading-normal mb-[21px] text-[24px]">
              Contact Us
            </h1>

            <div>
              <p className="w-full sm:w-[254px] h-auto min-h-[60px] self-stretch mb-[21px] text-[16px]">
                2, Sheikh Zakariyah Adebayo Yusuf Street, PEGAMUT, 102112, Ota,
                Ogun State
              </p>
            </div>
            <div className="mb-[21px]">
              <p className="font-[700] font-[16px] w-[300px]">
                For more info about our Classes
              </p>
              <p>(234)815 650 9701</p>
            </div>

            <div className="mb-[21px]">
              <p className="font-[700]">Email:</p>
              <a href="mailto:info@dltafrica.io">info@dltafrica.io</a>
            </div>
          </div>
          <div className="w-[145px] h-auto min-h-[165px] ml-[50px]">
            <h1 className=" text-[#C54809] font-sans  text-[24px] font-bold leading-normal mb-[21px] text-[24px]">
              Quick Link
            </h1>
            <ul>
              <li className="mb-[21px]">
                <a href="/team">Our Team</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-6 pb-5 justify-center mt-[80px] mb-[42px] ">
        <a href="#">
          <FaFacebook className="w-[35px] h-[35px]" />
        </a>
        <a href="#">
          <FaInstagram className="w-[35px] h-[35px]" />
        </a>
        <a href="#">
          <FaLinkedin className="w-[35px] h-[35px]" />
        </a>
        <a href="#">
          <FaTwitter className="w-[35px] h-[35px]" />
        </a>
        <a href="#">
          <FaGithub className="w-[35px] h-[35px]" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
