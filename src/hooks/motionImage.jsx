"use client";
import { useEffect, useState } from "react";
// import { SyncLoader } from "react-spinners";
import Lottie from "lottie-react";
import PropTypes from "prop-types";

MotionImage.propTypes = {
  imageJson: PropTypes.any,
  loop: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
};

function MotionImage({ imageJson, loop, height, width }) {
  const [lottieLoaded, setLottieLoaded] = useState(false);

  useEffect(() => {
    if (Lottie) {
      setLottieLoaded(true);
    }
  }, []);

  return (
    <div
      className={`z-30 ${height ? `h-[${height}]` : " "} ${
        width ? `h-[${width}]` : " "
      }`}
    >
      {/* {!lottieLoaded && <SyncLoader />} */}
      {lottieLoaded && (
        <Lottie
          animationData={imageJson}
          loop={loop}
          className={`h-[${height}] w-[${width}]`}
        />
      )}
    </div>
  );
}

export default MotionImage;
