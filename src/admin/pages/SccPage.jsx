import React, { useEffect } from "react";
import { FaChevronLeft, FaEdit, FaSpinner } from "react-icons/fa";
import {HiPlusCircle} from 'react-icons/hi'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSccAction } from "../../redux/actions/admin/sccs";

const SccPage = () => {
    const { scc, isLoadingScc } = useSelector((state) => state.sccsState);

    const { key } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSccAction(key));
    }, [dispatch, key]);

    if (isLoadingScc) {
        return (
            <div className="my-5 flex items-center justify-cdenter">
                <div className="animate-spin">
                    <FaSpinner className="w-8 h-8" />
                </div>
            </div>
        );
    }

    return (
        <div className="px-2 sm:px-0">
            <Link
                to="/admin/sccs"
                className="my-5 flex items-center text-sm space-x-3 cursor-pointer"
            >
                <FaChevronLeft /> <span>Go Back</span>
            </Link>
            <div className="max-w-2xl mx-auto">
                <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            About Group
                        </h2>

                        <Link
                            className="text-dodge-blue flex items-center space-x-2"
                            to={`/admin/sccs/${key}/edit`}
                        >
                            <FaEdit />
                            <span>Edit Scc</span>
                        </Link>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />
                    {scc.key ? (
                        <>
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl text-dodge-blue">
                                    {scc.name}
                                </h2>
                                <h3 className="opacity-70">Name</h3>
                            </div>

                            <div className="my-4 w-full overflow-hidden rounded-lg flex gap-3">
                                <img
                                    className="w-full sm:w-1/2 rounded-lg h-52 object-cover object-center cursor-pointer"
                                    src={
                                        process.env.REACT_APP_UPLOADS_URL +
                                        scc.image
                                    }
                                    alt=""
                                />
                            </div>
                            <button className="bg-dodge-blue px-5 py-1 text-white text-sm">
                                Add Image | Cancel Add Image
                            </button>
                            <div className="my-5">
                                <div className="w-full h-[1px] bg-gray-500 opacity-25 mb-5" />
                                <label
                                    htmlFor="image_select"
                                    className="border border-dashed inline-block border-dodge-blue py-1 px-5 text-sm rounded-md text-dodge-blue"
                                >
                                    Select Another Image
                                </label>
                                <input
                                    type="file"
                                    name=""
                                    id="image_select"
                                    className="hidden"
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-3 my-4 gap-4">
                                    {[1, 2, 3, 4].map((image) => (
                                        <div>
                                            <img
                                                className="w-full h-40"
                                                src="http://localhost:5500/static/cab49314e5d9792b000006e611060ce5_stangelus.jpg"
                                                alt=""
                                            />
                                            <div className="cursor-pointer text-red-700 text-center">
                                                Remove
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="bg-dodge-blue self-end px-5 py-1 text-white text-sm">
                                    Submit
                                </button>
                            </div>

                            <div className="w-full h-[1px] bg-gray-500 opacity-25 my-3" />

                            <h3 className="opacity-70">description</h3>
                            <div className="my-4 w-full">
                                <p>{scc.description}</p>
                            </div>
                        </>
                    ) : (
                        <div>
                            <h4 className="font-mono text-dodge-blue font-bold">
                                Scc not Added yet
                            </h4>
                        </div>
                    )}
                </div>

                <div className="bg-white p-6 mt-3">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            Scc Events
                        </h2>

                        <Link
                            className="text-dodge-blue flex items-center space-x-2"
                            to={`/admin/sccs/${key}/events/add`}
                        >
                            <HiPlusCircle />
                            <span>Add Event</span>
                        </Link>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};

export default SccPage;
