import logoImage from "../assets/logo.json";
import Lottie from "lottie-react";
function CompaniesLogo() {
  return (
    <div className="flex flex-row items-center justify-start gap-1 cursor-pointer">
      <Lottie
        animationData={logoImage}
        loop={false}
        className="w-[50px] h-[50px]"
      />
      <span className=" text-sm font-semibold italic text-slate-200">
        Cash for car
      </span>
    </div>
  );
}

export default CompaniesLogo;
