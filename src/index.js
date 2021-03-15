import React from "react";
import { useState, useEffect } from "react";

import "./assets/index.css";
import ReactDOM from "react-dom";
import { getJobs } from "./services/jobs";

import { ListCardHolder } from "./components/ListCardHolder";
import { SearchComponent } from "./components/SearchComponent";
import { FilterComponent } from "./components/FilterComponent";

const App = (props) => {
  const [jobs, setJobs] = useState([]);
  const [locations, setLocations] = useState({
    title: "Locations",
    posibilities: [],
  });

  const times = {
    title: "Type of Job",
    posibilities: ["Full Time", "Part Time"],
  };

  useEffect(() => {
    getJobs().then((jobsData) => {
      setJobs(jobsData.data);
      setLocations({ title: "Locations", posibilities: jobsData.locations });
    });
  }, []);

  return (
    <main className="bg-blue-500 bg-opacity-10">
      <nav>
        <ul className="p-8">
          <li>
            <span className="text-xl font-bold">Github </span>
            <span className="text-xl">Jobs</span>
          </li>
        </ul>
        <ul className="flex justify-center py-9 mx-3.5 bg-gradient-to-t from-blue-400 to-indigo-600 rounded-md	">
          <li className="w-4/6">
            <SearchComponent />{" "}
          </li>
        </ul>
      </nav>
      <div className="flex flex-col md:flex-row">
        <aside className="md:w-3/12">
          <FilterComponent filters={times} />
          <FilterComponent filters={locations} />
        </aside>
        <section className="md:w-8/12">
          <ListCardHolder cards={jobs} />
        </section>
      </div>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
