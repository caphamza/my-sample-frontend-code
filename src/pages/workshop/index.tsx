import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { get } from "services/restService";
import { addWorkshops } from "slices/workshopSlice";
import { Card } from "components";

import { WorkshopData } from "types";
import { AppDispatch, RootState } from "store";

const Workshop = () => {
  const navigate = useNavigate();
  const { workshops } = useSelector((state: RootState) => state.workshops);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const res = await get<WorkshopData[]>("/workshops");
      await dispatch(addWorkshops(res));
    };

    getData();
  }, []);

  return (
    <div className="workshops-page">
      <h2 className="workshops-page-title">Workshops</h2>
      <div className="workshops-page-text-view">
        <h6 className="displayed-text">Displayed: </h6>
        <h6 className="displayed-number">13</h6>
      </div>
      <div className="workshops-page-cards-view">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="workshop-card-view">
            <Card
              title={workshop.title}
              img={workshop.imageUrl}
              date={workshop.date}
              price={workshop.price}
              onClick={() => navigate(`/workshop/${workshop.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshop;
