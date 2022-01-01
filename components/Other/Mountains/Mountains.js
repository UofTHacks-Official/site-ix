import Image from "next/image";

import {
  Layer0,
  Layer1,
  Layer2,
  Layer3,
  Layer4,
  Layer1Cover,
  Layer2Cover,
  Layer3Cover,
  Layer4Cover,
} from "./MountainsStyles";

import Art0 from "/public/static/New0.svg";
import Art1 from "/public/static/New1.svg";
import Art2 from "/public/static/New2.svg";
import Art3 from "/public/static/New3.svg";
import Art4 from "/public/static/New4.svg";

const Mountains = () => {
  return (
    <>
      <Layer0>
        <Image src={Art0} layout="responsive" priority />
      </Layer0>
      <Layer1>
        <Image src={Art1} layout="responsive" priority />
        <Layer1Cover />
      </Layer1>
      <Layer2>
        <Image src={Art2} layout="responsive" priority />
        <Layer2Cover />
      </Layer2>
      <Layer3>
        <Image src={Art3} layout="responsive" priority />
        <Layer3Cover />
      </Layer3>
      <Layer4>
        <Image src={Art4} layout="responsive" priority />
        <Layer4Cover />
      </Layer4>
    </>
  );
};

export default Mountains;
