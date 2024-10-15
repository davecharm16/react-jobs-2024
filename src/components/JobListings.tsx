import React, { useMemo } from "react";
import { Jobs } from "../models/models";
import JobListing from "./JobListing";
import useGetJobs from "../hooks/useGetJobs";
import Spinners from "./Spinners";

type Props = {
  isHome?: boolean;
};


const JobListings = ({ isHome = false }: Props): React.ReactNode => {

  const endpoint = isHome ? "/jobs?_limit=3": "/jobs" ;

  const params = useMemo(
    () => ({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }),
    []
  );

  const { loading, data } = useGetJobs({ endpoint, params });

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinners loading={loading} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {data?.map(
              (job: Jobs): React.ReactNode => (
                <JobListing key={job.id} job={job} />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
