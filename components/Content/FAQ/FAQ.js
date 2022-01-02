import React from "react";
import {
  Wrapper,
  Header,
  Link,
  FAQList,
  ImageWrapper,
  Img,
  Art,
} from "./FAQStyles";
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
        <Art
          width="1920"
          height="155"
          viewBox="0 0 1920 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H1920V89.3302C1920 89.3302 1717.5 154.519 1405 154.519C1092.5 154.519 878.455 89.3302 520 89.3302C161.545 89.3302 0 155 0 155V0Z"
            fill="#171C28"
          />
        </Art>
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
