import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addWorkshops } from "slices/workshopSlice";
import { useCart } from "utils/hooks";

import { AppDispatch, RootState } from "store";
import { WorkshopData } from "types";

type Props = {
  workshopsData: WorkshopData | undefined;
};

const useWorkshop = ({ workshopsData }: Props) => {
  const { addToCart } = useCart();
  const dispatch: AppDispatch = useDispatch();
  const { workshops, category } = useSelector(
    (state: RootState) => state.workshops,
  );
  const [filterdWorkshops, setFilterdWorkshops] = useState<WorkshopData[]>([]);

  const loadMore = () => {
    setFilterdWorkshops(workshops.slice(0, filterdWorkshops.length + 9));
  };

  useEffect(() => {
    if (category === "all") {
      setFilterdWorkshops(workshops.slice(0, 9));
    } else {
      const filterd = workshops.filter(
        (workshop) => workshop.category === category,
      );
      setFilterdWorkshops(filterd.slice(0, 9));
    }
  }, [category, workshops]);

  useEffect(() => {
    if (workshopsData) {
      dispatch(addWorkshops(workshopsData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workshopsData]);

  return {
    workshops: filterdWorkshops,
    addToCart,
    loadMore,
    totalWorkshops: workshops.length,
  };
};

export default useWorkshop;
