import axios from "axios";

const URL_BASE = "http://localhost:8000/api/jobs";

let locations = [];

export const getJobs = () => {
  return axios.get(URL_BASE).then((res) => {
    const { data } = res;
    updateLocations(data.slice(1,5));
    return {data: data.slice(1,5), locations: locations};
  });
};

const updateLocations = (jobs) => {
  if (jobs) {
    locations = [...new Set(jobs.map((job) => job.location))].sort();
  }
  return locations;
};
