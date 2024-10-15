import React, { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useGetJobs from "../hooks/useGetJobs";
import { Jobs } from "../models/models";
import Spinners from '../components/Spinners';
import { FaArrowLeft } from "react-icons/fa";
import useJobService from "../hooks/useJobService";
import { toast } from "react-toastify";


const JobPage = (): React.ReactElement => {
  const {id} = useParams();
  const endpoint = `/jobs/${id}`;
  const params = useMemo(()=> ({
    method : 'GET'
  }), [])
  const navigate = useNavigate();
  const { loading, data } = useGetJobs({ endpoint, params });
  const { makeRequest, error, setData, data:deleteData } = useJobService();
  const job:Jobs = data
  const handleDeleteJob = async () => {
    const confirm = window.confirm('Are yo sure you want to delete this job? ');
    if(!confirm) {
      return;
    }
    await makeRequest({endpoint: `/jobs/${id}`, params: {
      method : 'DELETE'
    }});
  }

  useEffect(()=> {
    return () => {
      setData(null);
    }
  }, [])

  useEffect(()=> {
    if (deleteData) {
      toast.success("Deleted a Job Successfully");
      navigate("/jobs", {replace : true});
    }

    if (error) {
      toast.error("An Error Occurred!");
    }
  }, [deleteData, error])

  return  loading? 
    <Spinners loading={false}/> : 
    <>
      {/* <!-- Go Back --> */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2"/>
            Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job?.type}</div>
                <h1 className="text-3xl font-bold mb-4">
                  {job?.title}
                </h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                  <p className="text-orange-700">{job?.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">
                  {job?.description}
                </p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{job?.salary} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              {/* <!-- Company Info --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job?.company?.name}</h2>

                <p className="my-2">
                 {job?.company?.description}
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                 {job?.company?.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">{job?.company?.contactPhone}</p>
              </div>

              {/* <!-- Manage --> */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link 
                  to={`/edit-job/${id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button onClick={() => handleDeleteJob()} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
};

export default JobPage;
