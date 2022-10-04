import { useNavigate } from "react-router-dom";

import { Card } from "components";
import useWorkshop from "pages/workshop/useWorkshop";
import { useQueryWorkshop, useCart } from "utils/hooks";

const Workshop = () => {
  const navigate = useNavigate();
  const { data: workshopsData, isLoading, isError } = useQueryWorkshop();
  const { workshops, loadMore, totalWorkshops } = useWorkshop({
    workshopsData,
  });
  const { addToCart } = useCart();

  if (isLoading) return <h1>Loading</h1>;

  if (isError) return <h1>Error</h1>;

  return (
    <div className="workshops-page">
      <h2 className="workshops-page-title">Workshops</h2>
      <div className="workshops-page-text-view">
        <h6 className="displayed-text">Displayed:</h6>
        <h6 className="displayed-number">{workshops.length}</h6>
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
              btnClick={() => addToCart(workshop)}
            />
          </div>
        ))}
      </div>
      <div
        className={
          totalWorkshops > workshops.length
            ? "workshops-page-load-more-view"
            : "display-none"
        }
        onClick={loadMore}
        onKeyDown={loadMore}
        role="button"
        tabIndex={0}
      >
        <p>Load More</p>
      </div>
    </div>
  );
};

export default Workshop;
