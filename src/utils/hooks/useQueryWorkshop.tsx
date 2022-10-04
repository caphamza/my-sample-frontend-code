import { useQuery } from "@tanstack/react-query";

import { get } from "services/restService";

import { WorkshopData } from "types";

type UseQueryResponse = {
  data: WorkshopData | undefined;
  isLoading: boolean;
  isError: boolean;
};

const useQueryWorkshop = () => {
  const { data, isLoading, isError }: UseQueryResponse = useQuery(
    ["workshops"],
    () => get("/workshops"),
  );

  return { data, isLoading, isError };
};

export default useQueryWorkshop;
