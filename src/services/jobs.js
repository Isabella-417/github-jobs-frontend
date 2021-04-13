import axios from "axios";

const URL_BASE = "http://localhost:8000/api/jobs";

export const getJobs = async (params = "") => {
  const response = await axios.get(`${URL_BASE}${params}`);
  return await response.data;
};

export const updateLocations = async () => {
  const response = await axios.get(`${URL_BASE}/places`);
  return await response.data;
};

export const getStacks = async () => {
  const response = await axios.get(`${URL_BASE}/stacks`);
  return await response.data;
};

const orderParameters = (arrParameters, nameFilter) => {
  const orderedParams = {};
  arrParameters.forEach((element, index) => {
    orderedParams[`${nameFilter}${index + 1}`] = element.toUpperCase();
  });
  return orderedParams;
};

export const searchByFilter = async ({
  keywords,
  locations,
  types,
  stacks,
}) => {
  const typeParameters = orderParameters(types, "type");
  const locationParameters = orderParameters(locations, "location");
  const stackParameters = orderParameters(stacks, "stack");

  const config = {
    params: {
      keyword: keywords,
      ...typeParameters,
      ...locationParameters,
      ...stackParameters,
    },
  };

  const response = await axios.get(`${URL_BASE}/filters`, config);
  return await response.data;
};
