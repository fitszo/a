import Feature from "./component/Feature";
import "./indexpagebook.css";

export default function IndexFeature() {
  return (
    <>
      <div id="features" className="home-feaures-index">
        <div className="home-content11-index">
          <Feature></Feature>
          <Feature icon="/Icons/headset.svg" header="24/7 Support"></Feature>
          <Feature icon="/Icons/person.svg" header="Private Tours"></Feature>
        </div>
      </div>
    </>
  );
}
