import { Button, DropdownOutlinedButton } from "components/common";

type Props = {
  btnClick: () => void;
};

const TicketCard = ({ btnClick }: Props) => {
  return (
    <div className="ticket-card">
      <h5 className="ticket-card-heading">Buy Your Ticket</h5>
      <div className="card-course-price">
        <span className="card-course-price-amount">495,00</span>
        <span className="card-course-price-currency">EUR</span>
      </div>
      <div className="ticket-card-btn-view">
        <DropdownOutlinedButton />
        <Button
          btnText="Add to Cart"
          color="primary"
          size="lg"
          onClick={btnClick}
        />
      </div>
    </div>
  );
};

export default TicketCard;
