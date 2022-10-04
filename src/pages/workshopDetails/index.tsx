import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import moment from "moment";

import { get } from "services/restService";
import BrushLogo from "assets/icons/brush.png";
import CalenderIcon from "assets/icons/calender-outline.png";
import ClockIcon from "assets/icons/clock-outline.png";
import { TicketCard } from "components";
import useWorkshopDetails from "pages/workshopDetails/useWorkshopDetails";
import { useCart } from "utils/hooks";

import { WorkshopData, UserData } from "types";

type UseQueryResponse = {
  data: UserData | undefined;
  isLoading: boolean;
  isError: boolean;
};

const WorkshopDetails = () => {
  const { id = "" } = useParams();
  const { data, isLoading, isError }: UseQueryResponse = useQuery(
    ["workshops"],
    () => get(`/users/${id}`),
  );
  const { workshopInfo = {} as WorkshopData } = useWorkshopDetails({ id });
  const { addToCart } = useCart();

  if (isLoading) return <h1>Loading</h1>;

  if (isError) return <h1>Error</h1>;

  return (
    <div className="workshop-details">
      <img
        className="workshop-details-img"
        alt=""
        src={workshopInfo?.imageUrl}
      />
      <div className="workshop-details-view">
        <div className="workshop-details-description">
          <div className="workshop-details-date-time-view">
            <img className="brushLogo" alt="Brush.png" src={BrushLogo} />
            <div className="workshop-details-date-time">
              <img alt="Calender-icon" src={CalenderIcon} />
              <p>{moment(workshopInfo?.date).format("DD.MM.YYYY.")}</p>
            </div>
            <div className="workshop-details-date-time">
              <img alt="ClockIcon" src={ClockIcon} />
              <p>{`${moment(workshopInfo?.date).format("HH:mm")}h`}</p>
            </div>
          </div>
          <h1>{workshopInfo?.title}</h1>
          <div className="author-view">
            <p>with</p>
            <h4>{data?.name}</h4>
          </div>
          <p>{workshopInfo?.desc}</p>
        </div>
        <div className="workshop-details-card-view">
          <TicketCard btnClick={() => addToCart(workshopInfo)} />
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetails;
