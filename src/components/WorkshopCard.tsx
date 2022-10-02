import CalenderIcon from "assets/icons/calender-outline.png";
import ClockIcon from "assets/icons/clock-outline.png";

import { Button } from "components";

export default function card() {
  return (
    <div className="workshop-card">
      <img className="workshop-card-img" alt="" src="" />
      <div className="workshop-card-info">
        <div className="workshop-card-info-date-time">
          <div className="workshop-card-info-date-time-view">
            <img alt="CalenderIcon" src={CalenderIcon} />
            <p>27.6.2020.</p>
          </div>
          <div className="workshop-card-info-date-time-view">
            <img alt="ClockIcon" src={ClockIcon} />
            <p>09:00h</p>
          </div>
        </div>
        <h4>Interaction Design Workshop</h4>
        <div className="workshop-card-info-price">
          <span className="amount">495,00</span>
          <span className="currency">EUR</span>
        </div>
        <Button color="primary" btnText="Add to cart" />
      </div>
    </div>
  );
}
