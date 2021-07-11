
import React from "react";
import tw from "twin.macro";
import Hero from "../components/hero/TwoColumnWithVideo"
import AnimationRevealPage  from "helpers/AnimationRevealPage";
import Cards from "../components/cards/TabCardGrid"

import Footer from "components/footers/MiniCenteredFooter";


export default function product() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
 
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
 
  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Products & Other Things <HighlightedText>More to you</HighlightedText></>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />
      <Cards heading={
          <>
            Checkout our <HighlightedText>options.</HighlightedText>
          </>
        } />
      <Footer />
       </AnimationRevealPage>
  );
}

