import { useDispatch } from "react-redux";

import { addWorkshopsToCart } from "slices/cartSlice";

import { AppDispatch } from "store";
import { WorkshopData } from "types";

const useAddCart = () => {
  const dispatch: AppDispatch = useDispatch();
  const addToCart = (args: WorkshopData) => {
    dispatch(addWorkshopsToCart(args));
  };

  return { addToCart };
};

export default useAddCart;
