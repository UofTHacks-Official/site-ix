import React from "react";
import Divider from "../../Shared/Divider/Divider";
import { Wrapper, Tier, SponsorContainer } from "./SponsorsStyles";
import Image from "next/image";

const Sponsors = () => {
  return (
    <Wrapper>
      <Divider />
      <h2>Our sponsors</h2>
      <Tier>
        <SponsorContainer></SponsorContainer>
        <SponsorContainer></SponsorContainer>
      </Tier>
    </Wrapper>
  );
};
export default Sponsors;
