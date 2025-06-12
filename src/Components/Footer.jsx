import { Link } from "react-router-dom";
import footerlogo from "../assets/logo.webp";

function Footer() {
  return (
    <div class="font-lexend bg-[#111]">
      <div class="container w-full max-w-6xl mx-auto px-4 py-4 lg:px-0 lg:py-6">
        <div className="grid lg:grid-cols-3 items-center gap-4 py-16 text-white">
          <div className="col">            
            <h3 className="text-[14px] text-white text-center">COMPANY</h3>
            <ul className="font-semibold text-center mt-5">
              <li className="bg-dark hover:bg-primary duration-500 p-3 mb-2 text-[17px]">
               <a href="https://dashboardanalytix.com/client-terms-and-policies/?v=13b5bfe96f3e" target="_blank" >Terms of Use</a></li>
              <li className="bg-dark hover:bg-primary duration-500 p-3 mb-2 text-[17px]">
                <Link to='/contact-us'>Contact Us</Link>
              </li>              
            </ul>
          </div>
          <div className="col">            
            <h3 className="text-[14px] text-white text-center">COMMUNITY</h3>
            <ul className="font-semibold text-center mt-5">
              <li className="bg-dark hover:bg-primary duration-500 p-3 mb-2 text-[17px]">
                <Link to='/who-we-are'>About Us</Link>
              </li>
              <li className="bg-dark hover:bg-primary duration-500 p-3 mb-2 text-[17px]">
                <a href="#">Brand Kit</a>
              </li>
            </ul>
          </div>
          <div className="col">            
            <h3 className="text-[14px] text-white text-center">LEGAL</h3>
            <ul className="font-semibold text-center mt-5">
              <li className="bg-dark hover:bg-primary duration-500 p-3 mb-2 text-[17px]">
                <a href="https://dashboardanalytix.com/client-terms-and-policies" target="_blank" >Terms and Conditions</a> 
              </li>
              <li className="bg-dark hover:bg-primary duration-500 p-3 mb-2 text-[17px]">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerEndCol flex flex-col items-center justify-start">
          <Link to="/"><img src={footerlogo} /></Link>
          <span></span>
          <ul className="social-icons flex justify-center items-center gap-8 mt-10 mb-4">
            <a href="https://discord.gg/swe94fVp" target="_blank"><li className="size-6"><a href="#"></a>
              <svg
                class="e-font-icon-svg e-fab-discord"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full hover:fill-primary duration-200"
                fill="#fff"
              >
                <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
              </svg>
            </li></a>
            <a href="#" target="_blank"><li className="size-6">
              <svg
                fill="#fff"
                class="e-font-icon-svg e-fab-facebook"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full hover:fill-primary duration-200"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </li></a>
            <a href="https://www.instagram.com/fundedlake/" target="_blank"><li className="size-6">
              <svg
                fill="#fff"
                class="e-font-icon-svg e-fab-instagram"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full hover:fill-primary duration-200"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </li></a>
            <a href="http://www.linkedin.com/in/funded-lake-686999359" target="_blank"><li className="size-6">
              <svg
                fill="#fff"
                class="e-font-icon-svg e-fab-linkedin"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full hover:fill-primary duration-200"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </li></a>
            <a href="https://www.youtube.com/@Fundedlake" target="_blank"><li className="size-6">
              <svg
                fill="#fff"
                class="e-font-icon-svg e-fab-youtube"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full hover:fill-primary duration-200"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </li></a>
            <a href="https://x.com/Fundedlake" target="_blank"><li className="size-6">
              <svg
                fill="#fff"
                class="e-font-icon-svg e-fab-x-twitter-square"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full hover:fill-primary duration-200"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path>
              </svg>
            </li></a>
          </ul>
          <h3 className="text-lg font-bold text-white my-6">DISCLAIMER</h3>
          <p className="text-base text-white text-center">
            FUNDEDLAKE is provided by Forest Park FX LTD. Forest Park FX LTD
            offers fee-based simulated trading assessments for Potential
            Traders.
            <br />
            All funding assessments are provided by Forest Park FX LTD and all
            assessment fees are paid to Forest Park FX LTD.
            <br />
            If you qualify for a Funded Account, you will be required to enter
            into a Trader Agreement with Forest Park FX LTD. Forest Park FX LTD
            does not provide any trading education or other services.
          </p>
          <p className="text-base text-white text-center mt-10">
            &copy; {new Date().getFullYear()} FundedLake. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
