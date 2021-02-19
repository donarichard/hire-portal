import axios from "../axios";

export const getCandidate = async () => {
  try {
    return await axios.get("/candidate").then(res=>res.data);
  } catch (error) {
    throw error;
  }
};
