import Feature from "./component/Feature";
import "./indexpagebook.css";

export default function IndexPageBook() {
        return (
          <>
            <div className="home-container1-index">
              <section className="home-hero-index">
                <div className="home-main1-index">
                  <div className="home-video1-index">
                    <video
                      src
                      poster="/Videos/hero-cover1-1500h.jpg"
                      className="home-video2-index"
                    ></video>
                    <div className="home-tint1-index"></div>
                  </div>
                  <div className="home-content10-index">
                    <div className="home-center-index">
                      <div className="home-heading10-index">
                        <h1 className="home-header11-index">
                          #AabFitnessKahinBhiKabhiBhi
                        </h1>
                        <p className="home-caption10-index">Find Gym Near Me</p>
                      </div>
                      <div className="home-border-index">
                        <div className="home-filter-index">
                          <div className="home-hover-coming-index">
                            Booking Coming Soon
                          </div>
                          <div className="home-form-main-index">
                            <img
                              alt="image"
                              src="/Icons/location.svg"
                              className="home-image1-index"
                            />
                            <input
                              type="text"
                              placeholder="Destination"
                              className="home-textinput1-index input-index"
                            />
                            <input
                              type="date"
                              placeholder="Date"
                              className="home-textinput2-index input-index"
                            />
                            <input
                              type="number"
                              placeholder="Group size"
                              className="home-textinput3-index input-index"
                            />
                            <div className="home-search-index">
                              <img
                                alt="image"
                                src="/Icons/search.svg"
                                className="home-icon10-index"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="features" className="home-feaures-index">
                  <div className="home-content11-index">
                    <Feature></Feature>
                    <Feature
                      icon="/Icons/headset.svg"
                      header="24/7 Support"
                    ></Feature>
                    <Feature
                      icon="/Icons/person.svg"
                      header="Private Tours"
                    ></Feature>
                  </div>
                </div>
              </section>
            </div>
            <div>hi</div>
          </>
        );
}