import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

import { get } from "services/restService";
import { TicketCard } from "components";
import BrushLogo from "assets/icons/brush.png";
import CalenderIcon from "assets/icons/calender-outline.png";
import ClockIcon from "assets/icons/clock-outline.png";

import { WorkshopData, UserData } from "types";
import { RootState } from "store";

const WorkshopDetails = () => {
  const { id } = useParams();
  const { workshops } = useSelector((state: RootState) => state.workshops);
  const [workshopInfo, setWorkshopInfo] = useState<WorkshopData>();
  const [workshopUser, setWorkshopUser] = useState<UserData>();

  useEffect(() => {
    const getUser = async () => {
      const res = await get<UserData>(`/users/${id}`);
      setWorkshopUser(res);
    };

    getUser();
  }, []);

  useEffect(() => {
    const workshop = workshops.filter((item) => item.id === Number(id));
    setWorkshopInfo(workshop[0]);
  }, [id]);

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
            <h4>{workshopUser?.name}</h4>
          </div>
          <p>{workshopInfo?.desc}</p>
        </div>
        <div className="workshop-details-card-view">
          <TicketCard />
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetails;
