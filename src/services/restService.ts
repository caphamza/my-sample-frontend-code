import axios from "axios";

const baseURL = process.env.REACT_APP_DB_BASE_URL;

export const get = async <T>(url: string): Promise<T> => {
  try {
    const res = await axios.get(baseURL + url);
    return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    throw new Error(e);
  }
};
