import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import "./App.css";
import image1 from "./assets/parts-2.png";
import styled from "styled-components";
import CompaniesLogo from "./components/logo";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaArrowUp } from "react-icons/fa6";
// import Lottie from "lottie-react";
import ContactFormComponent from "./components/form";
// import BlogComponenet from "./components/ourBlog";
import FotterComponent from "./components/fotter";
import { Card, CardTitle } from "./components/ui/card";
import ExperienceComponent from "./components/experience";

function App() {
  const [arrowup, setArrowUp] = useState(false);
  const phoneNumber = " +4048900083";

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
        <div className="flex flex-row gap-5 p-4">
          {/* <span className="text-white cursor-pointer hover:underline">
            Blog
          </span> */}
          <a
            href="#about"
            className="text-white cursor-pointer hover:underline"
          >
            About Us
          </a>
        </div>
        {/* <CiMenuFries size={30} color="indigo" className="cursor-pointer" /> */}
      </div>
      {arrowup && (
        <div
          className="fixed flex flex-col items-center justify-center bottom-6 right-5 w-10 h-10 bg-indigo-400 rounded-full cursor-pointer z-50  opacity-65"
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
      <div className="flex flex-col gap-3 p-5  bg-slate-600 rounded-md w-[98%]">
        <span className="text-lg font-bold text-white">
          {" "}
          ARI CASH FOR JUNK CARS - FREE TOWING
        </span>
        <TopCardStyled className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center justify-start">
            {/* <Lottie
              animationData={MotionLogo}
              loop
              className="w-[350px] h-[350px] flex flex-col items-center justify-center"
            /> */}
            <img src={image1} alt="woman with cash " />
            <span className="text-white gap-2">
              Call{" "}
              <a
                className="underline text-blue-500 "
                href={`tel:${phoneNumber}`}
              >
                +4048900083
              </a>{" "}
              For A Free Quote
            </span>
          </div>
          <div className="flex flex-col gap-5 text-white w-[300px] justify-end items-end max-md:items-center lg:items-start">
            <div className="flex flex-col items-center justify-center bg-slate-400 w-[180px] h-10 rounded-sm">
              <a className="" href={`tel:${phoneNumber}`}>
                +4048900083
              </a>
            </div>
            <div className="flex  flex-col gap-2 justify-end items-center">
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
      <Card className="flex flex-col w-[98%] mx-auto justify-start items-start p-1">
        <CardTitle className="w-full flex flex-col items-center justify-center font-bold text-slate-700 text-2xl">
          Cars we Purchase
        </CardTitle>
        <p className="w-[98%] mx-auto mt-2 mb-4">
          We purchase junk cars and offer cash on the spot, along with free
          towing! Additionally, we buy running cars based on their condition,
          and if it&apos;s in good shape, you can simply drive it to us and
          receive good compensation.
        </p>
        <div className="flex flex-row gap-7 items-center justify-start w-full overflow-x-scroll p-4">
          <div className="w-[250px]">
            <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/1-19590_mazda-car-png-hd-car-images-hd-png.png" />
          </div>{" "}
          <div className="w-[250px]">
            <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/64-648183_pontiac-usa-wreck-dare-corrosion-old-car-png.png" />
          </div>{" "}
          <div className="w-[250px]">
            <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/922-9226272_enterprise-rental-car-luxury-cars-bmw-x5-car.png" />
          </div>{" "}
          <div className="w-[250px]">
            <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/12-129321_recherche-google-recortes-para-photoshop-cut-out-cars.png" />
          </div>{" "}
          <div className="w-[250px]">
            <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/1005-10053780_2019-red-toyota-rav4-toyota-rav-4.png" />
          </div>{" "}
          <div className="w-[250px]">
            <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/250-2506978_new-2019-toyota-corolla-le-toyota-corolla-le.png" />
          </div>{" "}
          <div className="w-[250px]">
            <HeaderContainer backgroundimagemobile="https://www.pngkey.com/png/detail/367-3674078_2013-audi-a6-3-0-t-quattro-tiptronic.png" />
          </div>
        </div>
      </Card>
      <AboutContainer id="about" className="flex flex-row w-[98%] p-2 gap-10">
        <ContactFormComponent />
        <div className="flex flex-col gap-7 ">
          <div className="flex flex-col items-center justify-center bg-slate-400 w-[180px] h-10 rounded-sm">
            <a className="" href={`tel:${phoneNumber}`}>
              +4048900083
            </a>
          </div>
          <p className="flex flex-col text-justify font-sans font-medium">
            Ari-cash for Cars stands as a premier junk car buyer in Georgia,
            distinguished for our longstanding commitment to exceptional
            service. With years of expertise, we offer a secure, expedited, and
            seamless process for selling your vehicle. <br /> <br />
            We specialize in purchasing junk cars in any condition, offering top
            dollar for your vehicle. Our priority is to provide customers with a
            hassle-free experience. Our dedicated team is readily available to
            offer the best possible quote for your car. Whether you&apos;re
            seeking junk car removal services, simply give us a call or fill out
            our contact form to receive your FREE quote at +4048900083. Our
            buyers undergo extensive training to ensure customer satisfaction.
            We accept cars in any condition, running or not, and pay in the
            currency of your choice. At Ari-cash for Cars, junk car removal
            isn&apos;t just a service we offer—it&apos;s our sole focus. <br />
            <br />
            Do you have any questions about our Cash for Junk Car Services?
            Curious if we can assist with your specific project? Feel free to
            reach out to us by phone or through our contact form, and we&apos;ll
            promptly provide you with a quote. We&apos;re eager to serve you!
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
          {/* <BlogComponenet /> */}
          <p className="flex flex-col text-justify font-sans font-medium">
            For a hassle-free selling experience of your junk car to a trusted
            cash car buyer, look no further than Ari-cash For Cars. As the
            premier auto buyer, we are committed to offering the highest cash
            for cars. Whether your car is used, running, or not, we&apos; re
            here to provide top dollar for it. As the leading used car buyer in
            Georgia, we always ensure our customers receive the best cash offer.
            Have questions about selling your car for cash? Wondering who buys
            cars for cash? Simply give us a call at+4048900083, and we&apos;ll
            address all your inquiries.
          </p>
          <div className="flex flex-col w-full text-slate-600 gap-5">
            <h4 className="text-2xl text-slate-900 font-bold underline">
              We purchase Car Parts
            </h4>
            <img src={image1} alt="woman with cash " />
            <p>We purchase car parts at a friendly price </p>
          </div>
        </div>
      </AboutContainer>
      <ExperienceComponent />
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
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 250px;
  height: 10rem;
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  cursor: pointer;
  background-image: url(${props => props.backgroundimagemobile});
  background-repeat: no-repeat;
  /* background-size: cover; */
  /* background-position: 100%; */
  background-repeat: no-repeat;
  object-fit: contain;
  transition: all 1s ease;
  background-size: contain; /* Adjust this property to change how the image fits */
  background-position: center;

  &:hover {
    transform: scale(1.1); /* You can adjust the scale factor as needed */
  }
`;
