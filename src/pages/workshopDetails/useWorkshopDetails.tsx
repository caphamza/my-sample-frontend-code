import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { WorkshopData } from "types";
import { RootState } from "store";

const useWorkshopDetails = ({ id }: { id: string }) => {
  const { workshops } = useSelector((state: RootState) => state.workshops);
  const [workshopInfo, setWorkshopInfo] = useState<WorkshopData>();

  useEffect(() => {
    const workshop = workshops.filter((item) => item.id === Number(id));
    setWorkshopInfo(workshop[0]);
  }, [id, workshops]);

  return { workshopInfo };
};

export default useWorkshopDetails;
