import { useQuery } from "@tanstack/react-query";

import { get } from "services/restService";

import { WorkshopData } from "types";

type UseQueryResponse = {
  data: WorkshopData | undefined;
  isLoading: boolean;
  isError: boolean;
};

const useQueryWorkshop = (isEnabled = true, idParam = "") => {
  const { data, isLoading, isError }: UseQueryResponse = useQuery(
    ["workshops"],
    () => get(`/workshops/${idParam}`),
    { enabled: isEnabled },
  );

  return { data, isLoading, isError };
};

export default useQueryWorkshop;
