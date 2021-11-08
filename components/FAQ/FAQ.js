import React from "react";
import { Wrapper, Header, FAQList } from "./FAQStyles";
import Card from "../Card/Card";

const FAQ = (props) => {
  const faqs = require("./faqs.json");

  const faqList = faqs.map((faq, i) => (
    <Card key={i} title={faq.question} paragraph={faq.answer} />
  ));

  return (
    <Wrapper>
      <Header>Frequently Asked Questions!</Header>
      <FAQList>{faqList}</FAQList>
    </Wrapper>
  );
};

export default FAQ;
