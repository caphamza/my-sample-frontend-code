import Rectangle from "assets/images/rectangle.png";

import { TicketCard } from "components";

export default function workshopDetails() {
  return (
    <div className="workshop-details">
      <img className="workshop-details-img" alt="" src={Rectangle} />
      <div className="workshop-details-view">
        <div className="workshop-details-view-description"></div>
        <div className="workshop-details-view-card">
          <TicketCard />
        </div>
      </div>
    </div>
  );
}
