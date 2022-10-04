import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { get } from "services/restService";

import { WorkshopData, UserData } from "types";
import { RootState } from "store";

type UserQueryResponse = {
  data: UserData | undefined;
  isLoading: boolean;
  isError: boolean;
};

type WorkshopQueryResponse = {
  data: WorkshopData | undefined;
  isLoading: boolean;
  isError: boolean;
};

const useWorkshopDetails = ({ id }: { id: string }) => {
  const { workshops } = useSelector((state: RootState) => state.workshops);
  const {
    data: userData,
    isLoading: userLoader,
    isError: userError,
  }: UserQueryResponse = useQuery(["user"], () => get(`/users/${id}`));
  const {
    data: workshopData,
    isLoading: workshopLoader,
    isError: workshopError,
  }: WorkshopQueryResponse = useQuery(
    ["workshopWithId"],
    () => get(`/workshops/${id}`),
    {
      enabled: workshops.length === 0,
    },
  );
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
    isLoading: userLoader || (workshops.length === 0 && workshopLoader),
    isError: userError || workshopError,
  };
};

export default useWorkshopDetails;
