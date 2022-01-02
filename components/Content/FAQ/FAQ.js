import React from "react";
import { Wrapper, Header, Link, FAQList, ImageWrapper } from "./FAQStyles";
import Card from "./Card/Card";
import Image from "next/image";
import Divider from "/public/static/Divider.svg";

const FAQ = (props) => {
  const faqs = require("./faqs.json");

  const faqList = faqs.map((faq, i) => (
    <Card key={i} title={faq.question} paragraph={faq.answer} />
  ));

  // If you want to add a hyperlink, you need to manually add a card component below.
  const manualCards = (
    <>
      <Card
        title="I still have a question..."
        paragraph={
          <span>
            We’d be happy to help! Send the inquiry over to
            <Link href="mailto:contact@uofthacks.com">
              {" "}
              contact@uofthacks.com
            </Link>{" "}
            and we’ll get back to you as soon as possible.
          </span>
        }
      />
    </>
  );

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={Divider} layout="responsive" sizes="101vw" priority />
      </ImageWrapper>
      <Header>Frequently Asked Questions Test</Header>
      <FAQList>
        {faqList}
        {manualCards}
      </FAQList>
    </Wrapper>
  );
};

export default FAQ;
