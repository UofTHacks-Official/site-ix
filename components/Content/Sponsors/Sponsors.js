import React from "react";
import Divider from "../../Shared/Divider/Divider";
import {
  Wrapper,
  Header,
  Tier,
  GoldSponsor,
  SilverSponsor,
  BronzeSponsor,
  SponsorGrid,
} from "./SponsorsStyles";
import Image from "next/image";
import Amazon from "/public/static/Sponsors/Amazon.svg";
import Ubisoft from "/public/static/Sponsors/Ubisoft.svg";
import FDM from "/public/static/Sponsors/FDM.svg";
import PnG from "/public/static/Sponsors/ProcterAndGamble.svg";
import QuestTrade from "/public/static/Sponsors/QuestTrade.svg";
import WolframLanguage from "/public/static/Sponsors/WolframLanguage.svg";
import Clerky from "/public/static/Sponsors/Clerky.svg";

const Sponsors = () => {
  return (
    <Wrapper>
      <Divider />
      <Header>Our sponsors</Header>
      <SponsorGrid>
        <Tier>
          <GoldSponsor href="https://amazon.com/" target="_blank">
            <Image
              src={Amazon}
              layout="fill"
              objectFit="contain"
              alt="Amazon"
              priority
            />
          </GoldSponsor>
          <GoldSponsor href="https://ubisoft.com" target="_blank">
            <Image
              src={Ubisoft}
              layout="fill"
              objectFit="contain"
              alt="Ubisoft"
              priority
            />
          </GoldSponsor>
        </Tier>
        <Tier>
          <SilverSponsor href="https://www.fdmgroup.com/" target="_blank">
            <Image src={FDM} layout="fill" objectFit="contain" alt="FDM" />
          </SilverSponsor>
          <SilverSponsor>
            <Image
              src={PnG}
              layout="fill"
              objectFit="contain"
              alt="Procter and Gamble"
              priority
            />
          </SilverSponsor>
          <SilverSponsor href="https://www.questrade.com/" target="_blank">
            <Image
              src={QuestTrade}
              layout="fill"
              objectFit="contain"
              alt="QuestTrade"
              priority
            />
          </SilverSponsor>
        </Tier>
        <Tier>
          <BronzeSponsor href="https://www.clerky.com/" target="_blank">
            <Image
              src={Clerky}
              layout="fill"
              objectFit="contain"
              alt="Clerky"
              priority
            />
          </BronzeSponsor>
          <BronzeSponsor href="https://www.echo3d.co/" target="_blank">
            <Image
              src="/echo3D.webp"
              layout="fill"
              objectFit="contain"
              alt="Echo3D"
              priority
            />
          </BronzeSponsor>
          <BronzeSponsor href="https://www.maplesoft.com/" target="_blank">
            <Image
              src="/Maplesoft.webp"
              layout="fill"
              objectFit="contain"
              alt="Maplesoft"
              priority
            />
          </BronzeSponsor>
          <BronzeSponsor href="https://www.wolfram.com/" target="_blank">
            <Image
              src={WolframLanguage}
              layout="fill"
              objectFit="contain"
              alt="Wolfram Language"
              priority
            />
          </BronzeSponsor>
        </Tier>
      </SponsorGrid>
    </Wrapper>
  );
};
export default Sponsors;
