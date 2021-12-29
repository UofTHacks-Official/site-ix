import MooseLogo from "/public/static/Logo.svg";
import Image from "next/image";

// TO EDIT SIZE OF LOGO, DO NOT EDIT IMAGE DIMENSIONS DIRECTLY, EDIT CONTAINER WIDTH WRAPPED AROUND

const Logo = (props) => {
  return (
    <>
      <Image src={MooseLogo} layout="intrinsic" priority />
    </>
  );
};
export default Logo;
