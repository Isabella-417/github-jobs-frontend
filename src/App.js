import { useState, useEffect } from "react";

import "./assets/index.css";
import {
  getJobs,
  updateLocations,
  searchByFilter,
  getStacks,
} from "./services/jobs";
import { ListCardHolder, SearchComponent, FilterComponent } from "./components";

const App = (props) => {
  const [jobs, setJobs] = useState({
    info: { count: 0, pages: 0, next: null, prev: null },
    results: [],
  });
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState({
    title: "Type of Job",
    posibilities: ["Full Time", "Part Time"],
    selected: [],
  });

  const [locations, setLocations] = useState({
    title: "Locations",
    posibilities: [],
    selected: [],
  });

  const [stacks, setStacks] = useState({
    title: "Stacks",
    posibilities: [],
    selected: [],
  });

  const updateJobsList = (searchedText) => {
    setSearch(searchedText);
  };

  const filterData = (filterSelected) => {
    const name = Object.keys(filterSelected)[0];
    const value = filterSelected[name];

    const obj = {
      jobType: [jobType, setJobType],
      locations: [locations, setLocations],
      stacks: [stacks, setStacks],
    };

    const { title, posibilities, selected } = obj[name][0];
    const duplicatedValue = selected.includes(value);

    const newSelection = duplicatedValue
      ? selected.filter((element) => element !== value)
      : selected.concat(value);

    obj[name][1]({
      title: title,
      posibilities: posibilities,
      selected: newSelection,
    });
  };

  useEffect(() => {
    searchByFilter({
      keywords: search,
      locations: locations.selected,
      types: jobType.selected,
      stacks: stacks.selected,
    }).then((list) => {
      setJobs(list);
    });
  }, [jobType, locations, stacks, search]);

  useEffect(() => {
    getJobs().then((jobsData) => {
      setJobs(jobsData);
    });
    getStacks().then((stackData) => {
      setStacks({
        title: "Stacks",
        posibilities: stackData,
        selected: [],
      });
    });

    updateLocations().then((locationsData) => {
      setLocations({
        title: "Locations",
        posibilities: locationsData,
        selected: [],
      });
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
        <ul className="flex justify-center py-9 mx-3.5 bg-gradient-to-t from-blue-400 to-indigo-600 rounded-md">
          <li className="w-4/6">
            <SearchComponent
              onSearch={search}
              updateJobsList={updateJobsList}
            />
          </li>
        </ul>
      </nav>
      <div className="flex flex-col md:flex-row">
        <aside className="md:w-3/12">
          <FilterComponent
            filters={jobType}
            type="jobType"
            filterData={filterData}
          />
          <FilterComponent
            filters={stacks}
            type="stacks"
            filterData={filterData}
          />
          <FilterComponent
            filters={locations}
            type="locations"
            filterData={filterData}
          />
        </aside>
        <section className="md:w-8/12">
          <ListCardHolder cards={jobs} />
        </section>
      </div>
    </main>
  );
};
export default App;
