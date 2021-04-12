export const CardView = (data) => {
  const {type,company,location,created_at,title,company_logo} = data.data;

  const calculateDays = (date) => {
    const currentDate = new Date();
    date = new Date(date);
    const difference = currentDate.getTime() - date.getTime();
    return Math.ceil(difference / (1000 * 3600 * 24));
  };

  return (
    <div className="bg-white p-5 rounded-md tracking-wide shadow-2xl">
      <div id="header" className="flex">
        <img
          alt="mountain"
          className="w-40 bg-gray-600 bg-opacity-10 rounded-md"
          src={company_logo}
        />
        <div id="body" className="flex flex-col ml-5 w-full">
          <h4 id="name" className="text-sm font-semibold mb-2">
            {company}
          </h4>
          <p id="job" className="py-3 text-xl text-gray-800 mt-2">
            {title}
          </p>
          <div className="flex mt-2  flex-col md:flex-row	 md:justify-between md:items-end">
            <button className="h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
              {type}
            </button>
            <div className="flex mt-5 justify-center pr-2 text-gray-400">
              <span className="text-xs text-gray text-opacity-4">
                <svg
                  className="w-5 h-5 m-2 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {location}
              </span>
              <span className="text-xs text-gray text-opacity-4">
                <svg
                  className="w-5 h-5 m-2 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {calculateDays(created_at)} days ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
