import CompaniesLogo from "./logo";
import { CardDescription } from "./ui/card";

function FotterComponent() {
  return (
    <div className=" flex flex-col gap-5 w-full p-7 bg-slate-400 text-black">
      <div className="flex flex-row justify-evenly items-start gap-5 max-sm:flex-col max-sm:items-center">
        <CompaniesLogo />
        <div className="flex flex-col items-start text-slate-900 font-sans text-lg">
          <h4 className="text-slate-300 underline">Contact Us</h4>
          <div className="flex flex-col gap-0 items-start text-white text-base">
            <span>+4048900083</span>
            {/* <span>cars@carsLoader.com</span>
            <span>27d Lawrence villa st</span> */}
          </div>
        </div>
      </div>
      <CardDescription>
        © 2024 GA Cash For Cars - All Right Reserved
      </CardDescription>
    </div>
  );
}

export default FotterComponent;
