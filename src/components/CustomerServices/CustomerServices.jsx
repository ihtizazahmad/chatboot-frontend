import React from "react";
import "./Customerservices.css";
import backgroundview from "../../images/background-view.png";
import bag from "../../images/bags.png";
import horseimg from "../../images/horse.jpg";
import { Carousel } from "react-bootstrap";

import melissa from "../../images/melissa-j.webp";
import chat from "../../images/chat.gif";
import livChat from "../../images/livechat.webp";
import Cimage from "../../images/cardcarol.webp";
import Ai from "../../images/Ai.webp";
import sales from "../../images/sales.webp";
import messenger from "../../images/messenger.webp";
import closed from "../../images/closed.webp";
import DiscoverSlides from "../discoverSlides/DiscoverSlides";
import PricingModel from "../pricingmodel/PricingModel";
import Footer from "./../footer/Footer";
import { useNavigate } from "react-router-dom";
import SimpleInstallation from "../simpleInstalation/SimpleInstallation";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaForumbee, FaShopify, FaWordpress } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { useSelector } from "react-redux";

function CustomerServices() {
  const loginUser = useSelector((state) => state.User.activeUser);
  const handlesignup = () => {};
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row mt-4 pb-4">
            <div className="col-sm-12 text-center mt-4">
              <h1 className="customer_service">
                Customer service is great, but it's even better when it's
                combined with higher sales
              </h1>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          {!loginUser && (
            <div className="col-sm-12 mt-3 text-center">
              <button
                className="btn btn-primary btn-lg get_started"
                onClick={handlesignup}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
        <div className="row tidio_section_margin  bg_tidio py-4">
          <div className=" col-md-6 d-flex align-items-center">
            <div className="">
              <p className="tidio_combines text-center">
                Tidio combines live chat and chatbot tools to help you provide
                superb customer service and generate more sales.
              </p>
            </div>
          </div>
          <div className=" col-md-6 chatimage">
            <img className="chat_pic" src={chat} alt="chat" />
          </div>
        </div>
        <div className="row " style={{ marginTop: 80 }}>
          <div className="bg-transparent carouseldiv mt-4 ">
            <Carousel>
              <Carousel.Item>
                <div className="carouselinformationduv d-flex ">
                  <div className="carousellineimagediv">
                    <img
                      src={Cimage}
                      className="img-fluid carolimagemain"
                      alt="C_chat"
                    />
                  </div>
                  <div className="informationofcard">
                    <div className="whiskerbagdiv">
                      <div className=" ">
                        <p className="whiskerName">Whisker Bag </p>
                        <h3 className="textparagraph">
                          Whisker Bag installed Tidio chat to get closer to
                          their website visitors and collect data about their
                          needs and expectations.
                        </h3>
                      </div>
                      <div className="d-flex cardlinetextdiv">
                        <div className="line"></div>
                        <div className="customerinfo p-2 ml-2 mt-2 ">
                          <div className="d-flex ">
                            <img
                              src={horseimg}
                              className=" horseimgage img-fluid"
                              alt="horseimage"
                            />
                            <div className="p-2  h-50">
                              <h6 className="m-0">jano le Rpoux</h6>
                              <a href="">whiskerbag.com</a>
                            </div>
                          </div>
                          <p className="fs-5 m-2 w-50">
                            “Tidio is the ultimate customer-relationship
                            building platform. It also helped us handle
                            difficult clients, which wouldn’t be possible via
                            mail”
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carouselinformationduv d-flex">
                  <div className="carousellineimagediv">
                    <img
                      src={Cimage}
                      className="img-fluid carolimagemain"
                      alt="C_image"
                    />
                  </div>
                  <div className="informationofcard">
                    <div className="whiskerbagdiv">
                      <div className=" ">
                        <p className="whiskerName">Whisker Bag </p>
                        <h3 className="textparagraph">
                          The company set up bots to segment their website’s
                          visitors and capture leads.
                        </h3>
                      </div>
                      <div className="d-flex cardlinetextdiv">
                        <div className="line"></div>
                        <div className="customerinfo p-2 ml-2 mt-2 ">
                          <div className="d-flex ">
                            <img
                              src={horseimg}
                              className=" horseimgage img-fluid"
                              alt="horseimage"
                            />
                            <div className="p-2  h-50">
                              <h6 className="m-0">jano le Rpoux</h6>
                              <a href="">whiskerbag.com</a>
                            </div>
                          </div>
                          <p className="fs-5 m-2 w-50">
                            “Tidio’s bots have helped us qualify the traffic in
                            a way that was never possible before”
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carouselinformationduv d-flex">
                  <div className="carousellineimagediv">
                    <img
                      src={Cimage}
                      className="img-fluid carolimagemain"
                      alt="horse_image"
                    />
                  </div>
                  <div className="informationofcard">
                    <div className="whiskerbagdiv">
                      <div className=" ">
                        <p className="whiskerName">Whisker Bag </p>
                        <h3 className="textparagraph">
                          By using the combination of Tidio live chat and
                          chatbots, Whisker Bag managed to collect 4x more leads
                          within two months of Tidio installation.
                        </h3>
                      </div>
                      <div className="d-flex cardlinetextdiv">
                        <div className="line"></div>
                        <div className="customerinfo p-2 ml-2 mt-2 ">
                          <div className="d-flex ">
                            <img
                              src={horseimg}
                              className=" horseimgage img-fluid"
                              alt="horse_img"
                            />
                            <div className="p-2  h-50">
                              <h6 className="m-0">jano le Rpoux</h6>
                              <a href="">whiskerbag.com</a>
                            </div>
                          </div>
                          <p className="fs-5 m-2 w-50">
                            “Tidio changed everything about the changed
                            everything about the way we way we collect leads”
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-sm-4  mt-4 imgsldie">
            <img
              className="imgview img-fluid"
              src={backgroundview}
              alt="image_view"
            />
          </div>
        </div>
        <div className="row">
          <div className="mt-5">
            <h1 className="text-center">
              Excellence confirmed by 1961+ reviews
            </h1>
          </div>
          <div className="excellenceicon">
            <div className="icondif">
              <RiSendPlaneFill /> Capterra
            </div>
            <div className="icondif">
              {" "}
              <FaShopify /> Shopify
            </div>
            <div className="icondif">
              <FaWordpress /> Wordpress
            </div>
            <div className="icondif">
              {" "}
              <BsGoogle /> Google
            </div>
            <div className="icondif">
              <FaForumbee /> GetApp
            </div>
          </div>
        </div>
        {/* card section */}
        <div className="row px-4 cards_row">
          <div className="col-md-6 col-sm-12 col-lg-4 cardmaindivmarque">
            <div className="card_shadow">
              <div className="display_img">
                <img className="card_img" src={melissa} alt="card_img" />
                <p className="name_card ">
                  Farzan A
                  <br /> Web Designer
                </p>
              </div>
              <div className="text-left mt-2">
                <p className="service"> Excellent service and product</p>
              </div>
              <div>
                <p>
                  The automation - hands down. I use Tidio all the time and
                  suggest it to my clients for its ease of use and excellent
                  support. I've not used it yet with shopping carts but I can
                  really imagine it being awesome - will definately test it
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4 cardmaindivmarque">
            <div className="card_shadow">
              <div className="display_img">
                <img className="card_img" src={melissa} alt="mellisa" />
                <p className="name_card ">
                  SMelissa J
                  <br /> Consultant Telecommunications
                </p>
              </div>
              <div className="text-left mt-2">
                <p className="service"> Excellent service and product</p>
              </div>
              <div>
                <p>
                  The automation - hands down. I use Tidio all the time and
                  suggest it to my clients for its ease of use and excellent
                  support. I've not I've not used it yet with shopping carts but
                  I can really imagineused it yet with shopping carts but I can
                  really imagine it being awesome - will definately test it
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4 cardmaindivmarque">
            <div className="card_shadow">
              <div className="display_img">
                <img className="card_img" src={melissa} alt="mellisa" />
                <p className="name_card ">
                  Finn R
                  <br />
                  Consultant{" "}
                </p>
              </div>
              <div className="text-left mt-2">
                <p className="service"> Excellent service and product</p>
              </div>
              <div>
                <p>
                  The automation - hands down. I use Tidio all the time and
                  suggest it to my clients for its ease of use and excellent
                  support. I've not used it yet with shopping carts but I can
                  really imagine it being awesome - will definately test it
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4 cardmaindivmarque">
            <div className="card_shadow">
              <div className="display_img">
                <img className="card_img" src={melissa} alt="melisa" />
                <p className="name_card ">
                  Donna T
                  <br /> Co-Founder
                </p>
              </div>
              <div className="text-left mt-2">
                <p className="service"> Excellent service and product</p>
              </div>
              <div>
                <p>
                  The automation - hands down. I use Tidio all the time and
                  suggest it to my clients for its ease of use and excellent
                  support. I've not used it yet with shopping carts but I can
                  really imagine it being awesome - will definately test it
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4 cardmaindivmarque">
            <div className="card_shadow">
              <div className="display_img">
                <img className="card_img" src={melissa} alt="melisa" />
                <p className="name_card ">
                  Baylen M
                  <br /> Marketing Consultant
                </p>
              </div>
              <div className="text-left mt-2">
                <p className="service"> Excellent service and product</p>
              </div>
              <div>
                <p>
                  The automation - hands down. I use Tidio all the time and
                  suggest it to my clients for its ease of use and excellent
                  support. I've not used it yet with shopping carts but I can
                  really imagine it being awesome - will definately test it
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4 cardmaindivmarque">
            <div className="card_shadow">
              <div className="display_img">
                <img className="card_img" src={melissa} alt="melisa" />
                <p className="name_card ">
                  Guilherme F
                  <br />
                  Owner
                </p>
              </div>
              <div className="text-left mt-2">
                <p className="service"> Excellent service and product</p>
              </div>
              <div>
                <p>
                  The automation - hands down. I use Tidio all the time and
                  suggest it to my clients for its ease of use and excellent
                  support. I've not used it yet with shopping carts but I can
                  really imagine it being awesome - will definately test it
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4 cardmaindivmarque">
            <div className="card_shadow">
              <div className="display_img">
                <img className="card_img" src={melissa} alt="melisa" />
                <p className="name_card ">
                  Bobby H
                  <br />
                  Consultant
                </p>
              </div>
              <div className="text-left mt-2">
                <p className="service"> Excellent service and product</p>
              </div>
              <div>
                <p>
                  The automation - hands down. I use Tidio all the time and
                  suggest it to my clients for its ease of use and excellent
                  support. I've not used it yet with shopping carts but I can
                  really imagine it being a t used it yet with shopping carts
                  but I can really imagine it being awesome - will definately
                  test it
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4 cardmaindivmarque">
            <div className="card_shadow">
              <div className="display_img">
                <img className="card_img" src={melissa} alt="melisa" />
                <p className="name_card ">
                  Davis E
                  <br />
                  Sales Executive{" "}
                </p>
              </div>
              <div className="text-left mt-2">
                <p className="service"> Excellent service and product</p>
              </div>
              <div>
                <p>
                  The automation - hands down. I use Tidio all the time and
                  suggest it to my clients for its ease of use and excellent
                  support. I've not used it yet with shopping carts but I can
                  really imagine it being awesome - will definately test it
                </p>
              </div>
            </div>
          </div>
        </div>

        <DiscoverSlides />

        {/* customer service section */}
        <div className="row cards_row">
          <div className="col-sm-12 text-center">
            <h2 className="A_power">
              A powerful, all-in-one customer service tool
            </h2>
            <p className="one_p">
              One compact solution can delight your customers and fuel your
              sales.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row live_chat_padding">
            <div className="col-sm-12 col-md-6 liv_col">
              <h3 className="live_chat">Live Chat</h3>
              <p className="half_of">
                Half of all online customers prefer live chat over any other
                communicationchannel.
              </p>
              <ul className="ul_padding">
                <li className="connect_li">
                  Connect Tidio to ALL websites and platforms via dedicated
                  plugins, withoutcoding
                </li>
                <li className="connect_li">
                  The Tidio live chat widget adjusts to yourcustomers’ screens,
                  so they can write toyou on mobile and tablet
                </li>
                <li className="connect_li">
                  Our live chat widget is customizable: you can change its
                  placement and color, so it fits with your website aesthetics
                </li>
                <li className="connect_li">
                  You can adjust the positioning of the live chat button in a
                  mobile version of the widget
                </li>
              </ul>
              <a className="discover_live">Discover Tidio live chat</a>
              <i className="bi bi-arrow-right-short"></i>
            </div>
            <div className="col-sm-12 col-md-6 img_live_chat_padd">
              <img className="img img-fluid" src={livChat} alt="live_chat" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row rowreverse">
            <div className="col-sm-12 col-md-6 live_chat_padding">
              <img className="img img-fluid" src={Ai} alt="Ai" />
            </div>
            <div className="col-sm-12 col-md-6">
              <h3 className="live_chat virtual_padd">
                Your virtual AI supporter
              </h3>
              <p className="half_of">
                Use one of our 20+ templates or easily build your own chatbot
                flow to automate 40% of your customer service conversations.
              </p>
              <ul className="ul_padding">
                <li className="connect_li">
                  Connect Tidio to ALL websites and platforms via dedicated
                  plugins, without coding
                </li>
                <li className="connect_li">
                  The Tidio live chat widget adjusts to your customers’ screens,
                  so they can write to you on mobile and tablet
                </li>
                <li className="connect_li">
                  Our live chat widget is customizable: you can change its
                  placement and color, so it fits with your website aesthetics
                </li>
              </ul>
              <a className="discover_live">Discover Tidio Chatbots</a>
              <i className="bi bi-arrow-right-short"></i>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row live_chat_padding">
            <div className="col-sm-12 col-md-6 liv_col">
              <h3 className="live_chat more_sales">Generate more sales</h3>
              <p className="half_of">
                Did you know that 3M businesses generated 20M leads and $400M in
                sales after they started using our chatbots?
              </p>
              <ul className="ul_padding">
                <li className="connect_li">
                  Stop 60% of your clients from abandoning their carts by
                  offering a discount
                </li>
                <li className="connect_li">
                  Automatically qualify leads and reach out to them at the right
                  time
                </li>
                <li className="connect_li">
                  Easily gather your visitors’ emails and phone numbers
                </li>
              </ul>
              <a className="discover_live">Discover Tidio live chat</a>
              <i className="bi bi-arrow-right-short"></i>
            </div>
            <div className="col-sm-12 col-md-6 img_live_chat_padd">
              <img className="img img-fluid" src={sales} alt="sales" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row rowreverse">
            <div className="col-sm-12 col-md-6 live_chat_padding">
              <img className="img img-fluid" src={messenger} alt="messanger" />
            </div>
            <div className="col-sm-12 col-md-6">
              <h3 className="live_chat virtual_padd">
                Answer any channel from one place
              </h3>
              <p className="half_of">
                As many as 75% of online customers said they expect help within
                five minutes. Connect all your channels to Tidio and answer your
                customers in an instant!
              </p>
              <ul className="ul_padding">
                <li className="connect_li">
                  Integrate your live chat, email inbox, Messenger, and
                  Instagram into one multichannel communicator
                </li>
                <li className="connect_li">
                  Talk to your customers on all devices: desktop, mobile, and
                  tablet
                </li>
                <li className="connect_li">
                  Never lose a potential customer because they contacted you on
                  a channel you rarely use
                </li>
              </ul>
              <a className="discover_live">Discover Tidio Chatbots</a>
              <i className="bi bi-arrow-right-short"></i>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row rowreverse live_chat_padding">
            <div className="col-sm-12 col-md-6 img_live_chat_padd">
              <img className="img img-fluid" src={closed} alt="closed" />
            </div>
            <div className="col-sm-12 col-md-6 liv_col">
              <h3 className="live_chat more_sales">
                Empower your customer support team
              </h3>
              <p className="half_of">
                Did you know that 3M businesses generated 20M leads and $400M in
                sales after they started using our chatbots?
              </p>
              <ul className="ul_padding">
                <li className="connect_li">
                  Stop 60% of your clients from abandoning their carts by
                  offering a discount
                </li>
                <li className="connect_li">
                  Automatically qualify leads and reach out to them at the right
                  time
                </li>
                <li className="connect_li">
                  Easily gather your visitors’ emails and phone numbers
                </li>
              </ul>
              <a className="discover_live">Try for free now!</a>
              <i className="bi bi-arrow-right-short"></i>
            </div>
          </div>
        </div>
        <SimpleInstallation />
        <PricingModel />
      </div>
    </>
  );
}

export default CustomerServices;
