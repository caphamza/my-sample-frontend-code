import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { get } from "services/restService";
import { useQueryWorkshop } from "utils/hooks";

import { WorkshopData, UserData } from "types";
import { RootState } from "store";

type UseQueryResponse = {
  data: UserData | undefined;
  isLoading: boolean;
  isError: boolean;
};

const useWorkshopDetails = ({ id }: { id: string }) => {
  const { workshops } = useSelector((state: RootState) => state.workshops);
  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
  }: UseQueryResponse = useQuery(["user"], () => get(`/users/${id}`));
  const {
    data: workshopData,
    isLoading: workshopLoader,
    isError: workshopError,
  } = useQueryWorkshop(workshops.length === 0, id);

  const [workshop, setWorkshop] = useState({} as WorkshopData);

  useEffect(() => {
    if (workshops.length > 0) {
      const findWorkshop = workshops.filter((item) => item.id === Number(id));
      setWorkshop(findWorkshop[0]);
    } else if (workshopData) setWorkshop(workshopData);
  }, [id, workshops, workshopData]);

  return {
    workshop,
    user: userData,
    isLoading: userLoading || workshopLoader,
    isError: userError || workshopError,
  };
};

export default useWorkshopDetails;
