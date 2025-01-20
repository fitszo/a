import { Link } from "react-router-dom";
import "./IndexPage.css";
import { Helmet } from "react-helmet";
import Feature from "./component/Feature";
import Script from "react-dangerous-html";
import Offer from "./component/Offer";

export default function IndexPage() {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Fitszo India</title>
        <meta property="og:title" content="Fitszo India" />
      </Helmet>
      <section className="home-hero">
        <div className="home-main1">
          <div className="home-video1">
            <video
              src
              poster="/Videos/hero-cover1-1500h.jpg"
              className="home-video2"
            ></video>
            <div className="home-tint1"></div>
          </div>
          <div className="home-content10">
            <div className="home-center">
              <div className="home-heading10">
                <h1 className="home-header11">#AabFitnessKahinBhiKabhiBhi</h1>
                <p className="home-caption10">Find Gym Near Me</p>
              </div>
              <div className="home-border">
                <div className="home-filter">
                  <div className="home-hover-coming">Booking Coming Soon</div>
                  <div className="home-form-main">
                    <img
                      alt="image"
                      src="/Icons/location.svg"
                      className="home-image1"
                    />
                    <input
                      type="text"
                      placeholder="Destination"
                      className="home-textinput1 input"
                    />
                    <input
                      type="date"
                      placeholder="Date"
                      className="home-textinput2 input"
                    />
                    <input
                      type="number"
                      placeholder="Group size"
                      className="home-textinput3 input"
                    />
                    <div className="home-search">
                      <img
                        alt="image"
                        src="/Icons/search.svg"
                        className="home-icon10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="features" className="home-feaures">
          <div className="home-content11">
            <Feature></Feature>
            <Feature icon="/Icons/headset.svg" header="24/7 Support"></Feature>
            <Feature icon="/Icons/person.svg" header="Private Tours"></Feature>
          </div>
        </div>
      </section>
      <section id="tours" className="home-quick-view">
        <div className="home-main2">
          <div className="home-heading11">
            <h2 className="home-header12">See the world like a local</h2>
            <p className="home-caption11">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-sorting">
            <button className="home-option-primary button">All</button>
            <button className="button-option button">Popular</button>
            <button className="button-option button">Featured</button>
            <button className="button-option button">Trending</button>
          </div>
        </div>
        <div className="home-offers">
          <Link to="/">
            <div className="home-offer-container1">
              <Offer image="/Offers/offers-11-1500w.png"></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container2">
              <Offer
                image="/Offers/offers-21-1500w.png"
                guides="54 Local guides"
                location="Barcelona, Spain"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container3">
              <Offer
                image="/Offers/offers-31-1500w.png"
                guides="34 Local Guides"
                location="Machu Picchu, Peru"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container4">
              <Offer
                image="/Offers/offers-41-1500w.png"
                guides="1 Local guide"
                location="Doha, Quatar"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container5">
              <Offer
                image="/Offers/offers-51-1500w.png"
                guides="6 Local guides"
                location="Rhodes, Greece"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container6">
              <Offer
                image="/Offers/offers-61-1500w.png"
                guides="132 Local guides"
                location="New York, USA"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container7">
              <Offer
                image="/Offers/offers-71-1500w.png"
                guides="1 Local guide"
                location="Doha, Quatar"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container8">
              <Offer
                image="/Offers/offers-81-1500w.png"
                guides="6 Local guides"
                location="Rhodes, Greece"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container9">
              <Offer
                image="/Offers/offers-91-1500w.png"
                guides="132 Local guides"
                location="New York, USA"
              ></Offer>
            </div>
          </Link>
        </div>
        <div className="home-pagination">
          <button className="home-previous1 button-option button">
            <svg viewBox="0 0 1024 1024" className="home-icon11">
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
            <span className="home-text10">Previous</span>
          </button>
          <div className="home-pages">
            <div className="home-primary">
              <div className="home-number-current page-current page">
                <span className="home-text11">1</span>
              </div>
              <div className="page">
                <span className="home-text12">2</span>
              </div>
              <div className="page home-number2">
                <span className="home-text13">3</span>
              </div>
            </div>
            <img alt="image" src="/Icons/more.svg" className="home-more" />
            <div className="page">
              <span className="home-text14">12</span>
            </div>
          </div>
          <button className="home-next1 button-option button">
            <span className="home-text15">Next</span>
            <svg viewBox="0 0 1024 1024" className="home-icon13">
              <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
            </svg>
          </button>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-content12">
          <div className="home-heading12">
            <span className="home-title">Customer testimonial</span>
            <p className="home-quote">
              “Weve used Traveler to lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.”
            </p>
          </div>
          <div className="home-details">
            <div className="home-author">
              <img
                alt="image"
                src="/Avatar/quote-200h.png"
                className="home-avatar"
              />
              <span className="home-name">Michael McDonald</span>
            </div>
            <div className="home-controls">
              <div className="page">
                <span className="home-text16">&lt;</span>
              </div>
              <div className="home-next2 page">
                <span className="home-text17">&lt;</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="home-container3">
          <Script
            html={`<script>
  function initAccordion() {
    
    const accordionContainers = document.querySelectorAll(
      '[data-role="accordion-container"]'
    ); // All accordion containers
    const accordionContents = document.querySelectorAll(
      '[data-role="accordion-content"]'
    ); // All accordion content
    const accordionIconsClosed = document.querySelectorAll(
      '[data-role="accordion-icon-closed"]'
    ); // All accordion closed icons
    const accordionIconsOpen = document.querySelectorAll(
      '[data-role="accordion-icon-open"]'
    ); // All accordion open icons

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex";
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none";
    });

    accordionContainers.forEach((accordionContainer, index) => {
      if (accordionContainer.classList.contains("initialised")) {
        return;
      }

      accordionContainer.classList.add("initiased");

      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          // If the accordion is already open, close it
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none";
        } else {
          // If the accordion is closed, open it
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  }

  initAccordion();
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  );
}
