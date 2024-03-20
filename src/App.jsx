import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import "./App.css";

import styled from "styled-components";
// import { CiMenuFries } from "react-icons/ci";
import MotionLogo from "./assets/logo.json";
import CompaniesLogo from "./components/logo";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaArrowUp } from "react-icons/fa6";
import Lottie from "lottie-react";
import ContactFormComponent from "./components/form";
import BlogComponenet from "./components/ourBlog";
import FotterComponent from "./components/fotter";

function App() {
  const [arrowup, setArrowUp] = useState(false);
  const phoneNumber = " +4042876767";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Define a threshold value based on your navbar height
      const threshold = 180; // Change this value according to your needs

      if (scrollY > threshold) {
        setArrowUp(true);
      } else if (scrollY <= threshold) {
        setArrowUp(false);
      }
    };
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This line makes it scroll smoothly
    });
  }

  return (
    <div className="gap-5 relative flex flex-col items-center justify-center max-w-[1440px] bg-white dark:bg-white mx-auto font-serif ">
      <div className="w-full flex flex-row justify-between items-center bg-slate-400 px-2">
        <CompaniesLogo />
        <div className="flex flex-row gap-10 p-6">
          <span className="text-white cursor-pointer hover:underline">
            Blog
          </span>
          <span className="text-white cursor-pointer hover:underline">
            About Us
          </span>
        </div>
        {/* <CiMenuFries size={30} color="indigo" className="cursor-pointer" /> */}
      </div>
      {arrowup && (
        <div
          className="fixed flex flex-col items-center justify-center bottom-6 right-5 w-10 h-10 bg-indigo-400 rounded-full cursor-pointer"
          onClick={scrollToTop}
        >
          <FaArrowUp size={35} color="black" />
        </div>
      )}
      <Alert className="w-[98%]">
        <Terminal className="h-4 w-4" />
        <AlertTitle className="text-base">Heads up!</AlertTitle>
        <AlertDescription className="text-slate-700 font-bold text-lg">
          We Pay The Most Cash For Running Or Junk Cars
        </AlertDescription>
      </Alert>
      <div className="flex flex-col gap-3 p-6  bg-slate-600 rounded-md w-[98%]">
        <span className="text-3xl font-bold text-white">GA Cash For Cars</span>
        <TopCardStyled className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center justify-start">
            <Lottie
              animationData={MotionLogo}
              loop
              className="w-[350px] h-[350px] flex flex-col items-center justify-center"
            />
            <span className="text-white gap-2">
              Call{" "}
              <a
                className="underline text-blue-500 "
                href={`tel:${phoneNumber}`}
              >
                404-287-6767
              </a>{" "}
              For A Free Quote
            </span>
          </div>
          <div className="flex flex-col gap-5 text-white w-[300px] justify-start items-start">
            <div className="flex flex-col items-center justify-center bg-slate-400 w-[180px] h-10 rounded-sm">
              <a className="" href={`tel:${phoneNumber}`}>
                +404-287-6767
              </a>
            </div>
            <div className="flex  flex-col gap-2 justify-start items-start">
              <span>Cash car buyer</span>
              <span>Junk car buyers</span>
              <span>We buy used cars</span>
              <span>Sell my car for cash</span>
              <span>Used cars buyers</span>
              <span>Cash for cars</span>
            </div>
          </div>
        </TopCardStyled>
      </div>
      <AboutContainer className="flex flex-row w-[98%] p-2 gap-10">
        <ContactFormComponent />
        <div className="flex flex-col gap-7 ">
          <div className="flex flex-col items-center justify-center bg-slate-400 w-[180px] h-10 rounded-sm">
            <a className="" href={`tel:${phoneNumber}`}>
              +404-287-6767
            </a>
          </div>
          <p className="flex flex-col text-justify font-sans font-medium">
            GA Cash for Cars is one of the leading Junk Car buyer in Georgia. We
            have been providing the safest, fastest, and easiest way to sell
            your car for the last 10 years. We buy junk cars in any condition,
            paying the most cash for junk cars. We are dedicated to giving our
            customers a hassle free experience when they use our services. Our
            dedicated staff are always on standby to give you the best quote
            possible for your Car. Looking for a junk car removal company, Give
            us a call or complete our contact form today and receive your FREE
            quote at 404-287-6767. Our Buyers are extensively trained in the act
            of satisfying our customer. We will buy any car, running or not and
            will pay Top Dollar for your junk car. When you think about junk my
            car, junk cars removal service in Georgia is not one thing that we
            do but the only business we do. <br />
            <br />
            Have a question about our Cash for Junk Car Services? Want to see if
            your particular project is one we can help with? Give us a call or
            fill out our contact form and we will get back with as soon as
            possible with a quote. We look forward to serving you.
          </p>
          <div className="flex flex-col text-justify font-sans font-medium gap-3">
            <span className="font-bold">Hour Of Operation</span>
            <span className="font-normal">Mondays Through Sundays, 24/7</span>
            <p>
              Junk car removal is what we do. We Are The Number One Car Buyer In
              Georgia. We Pay Top Dollar. You Get Your Cash Within An Hour. No
              Charge, Pressure Or Obligation To Sell. You Get Paid Cash On The
              Spot. We Buy Cars In Any Condition, Running, Wrecked, Junk Or
              Damaged. Absolutely No Hidden Fees And Hassle Free Paper Work.
            </p>
          </div>
          <BlogComponenet />
        </div>
      </AboutContainer>
      <FotterComponent />
    </div>
  );
}

export default App;

const AboutContainer = styled.div`
  @media screen and (max-width: 907px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const TopCardStyled = styled.div`
  @media screen and (max-width: 728px) {
    display: flex;
    gap: 20px;
    width: 100%;
    flex-direction: column;
  }
`;
