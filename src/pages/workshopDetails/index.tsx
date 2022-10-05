import { useParams } from "react-router-dom";
import moment from "moment";

import BrushLogo from "assets/icons/design.svg";
import CalenderIcon from "assets/icons/calender-outline.png";
import ClockIcon from "assets/icons/clock-outline.png";
import { TicketCard } from "components";
import useWorkshopDetails from "pages/workshopDetails/useWorkshopDetails";
import { useCart } from "utils/hooks";

const WorkshopDetails = () => {
  const { id = "" } = useParams();
  const { workshop, user, isLoading, isError } = useWorkshopDetails({ id });
  const { addToCart } = useCart();

  if (isLoading) return <h1>Loading</h1>;

  if (isError) return <h1>Error</h1>;

  return (
    <div className="workshop-details">
      <img className="workshop-details-img" alt="" src={workshop?.imageUrl} />
      <div className="workshop-details-view">
        <div className="workshop-details-description">
          <div className="workshop-details-date-time-view">
            <img className="brushLogo" alt="Brush.png" src={BrushLogo} />
            <div className="workshop-details-date-time">
              <img alt="Calender-icon" src={CalenderIcon} />
              <p>{moment(workshop?.date).format("DD.MM.YYYY.")}</p>
            </div>
            <div className="workshop-details-date-time">
              <img alt="ClockIcon" src={ClockIcon} />
              <p>{`${moment(workshop?.date).format("HH:mm")}h`}</p>
            </div>
          </div>
          <h1>{workshop?.title}</h1>
          <div className="author-view">
            <p>with</p>
            <h4>{user?.name}</h4>
          </div>
          <p>{workshop?.desc}</p>
        </div>
        <div className="workshop-details-card-view">
          <TicketCard btnClick={() => addToCart(workshop)} />
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetails;
