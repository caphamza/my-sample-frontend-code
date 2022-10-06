import moment from "moment";

import CalenderIcon from "assets/icons/calender-outline.png";
import ClockIcon from "assets/icons/clock-outline.png";
import { Button } from "components/common";

type Props = {
  title: string;
  img: string;
  date: string;
  price: number;
  onClick: () => void;
  btnText: string;
  btnClick: () => void;
};

export default function card({
  title,
  img,
  date,
  price,
  onClick,
  btnText,
  btnClick,
}: Props) {
  return (
    <div className="workshop-card">
      <div onClick={onClick} onKeyDown={onClick} role="button" tabIndex={0}>
        <img className="workshop-card-img" alt={title} src={img} />
      </div>
      <div className="workshop-card-info">
        <div className="workshop-card-info-date-time-view">
          <div className="workshop-card-info-date-view">
            <img alt="CalenderIcon" src={CalenderIcon} />
            <p>{moment(date).format("DD.MM.YYYY.")}</p>
          </div>
          <div className="workshop-card-info-time-view">
            <img alt="ClockIcon" src={ClockIcon} />
            <p>{`${moment(date).format("HH:mm")}h`}</p>
          </div>
        </div>
        <div onClick={onClick} onKeyDown={onClick} role="button" tabIndex={0}>
          <h4>{title}</h4>
        </div>
        <div className="card-course-price">
          <span className="card-course-price-amount">{price}</span>
          <span className="card-course-price-currency">EUR</span>
        </div>
        <Button color="primary" btnText={btnText} onClick={btnClick} />
      </div>
    </div>
  );
}
