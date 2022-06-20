import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLeadersAction } from "../../redux/actions/leaders";
import { fetchPositionsAction } from "../../redux/actions/positions";

const ChurchLeadership = () => {
    const { leaders } = useSelector((state) => state.leadersState);
    const { positions } = useSelector((state) => state.positionsState);

    const [showAllPositions, setShowAllPositions] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLeadersAction("admin"));
        dispatch(fetchPositionsAction("admin"));
    }, [dispatch]);
    return (
        <div className="px-2 sm:px-0">
            <div className="">
                <div className="my-6 p-4 bg-white _shadow">
                    <div className="flex gap-5 items-center">
                        <h2 className="font-bold text-lg">
                            Leadership Positions
                        </h2>

                        {/* <div
                            className="flex items-center space-x-2 py-2 cursor-pointer px-6 rounded-md text-seagreen  text-sm hover:opacity-75"
                        >
                            <HiPlusCircle />
                            <span>New Department</span>
                        </div> */}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 my-5">
                        {[...positions]
                            .slice(0, showAllPositions ? -1 : 10)
                            .map((position) => (
                                <Link
                                    to={`/admin/leaders/position/${position._id}`}
                                    key={position._id}
                                    className="_shadow px-6 py-3 flex items-center justify-center text-seagreen rounded-md hover:scale-[1.02] 
                                transition-all duration-150 ease-linear cursor-pointer
                                hover:opacity-80 hover:bg-slate-50"
                                >
                                    <span>{position?.title}</span>
                                </Link>
                            ))}
                        <Link
                            to="/admin/leaders/position/new"
                            className="_shadow bg-steelblue bg-opacity-20 text-steelblue rounded-md px-6 py-3 flex items-center justify-center 
                                hover:scale-[1.02] transition-all duration-150 ease-linear cursor-pointer hover:bg-opacity-40"
                        >
                            <span>Add Position</span>
                        </Link>
                    </div>

                    <div className="my-2">
                        <button onClick={()=>setShowAllPositions(!showAllPositions)} className="rounded bg-dodge-blue text-white text-sm px-2 py-1">
                            Show {showAllPositions?"Few":"All"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-5 sm:gap-10 items-start sm:items-center">
                <h2 className="text-2xl text-dodge-blue font-bold">
                    Church Committee
                </h2>
                <Link
                    to="/admin/leaders/new"
                    className="p-2 bg-steelblue py-1 px-4 text-white font-normal rounded-md"
                >
                    Add Leader
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5_ gap-4 my-6">
                {leaders
                    ?.filter((leader) => leader.churchCommittee === true)
                    ?.map((leader) => (
                        <div
                            key={leader._id}
                            className="flex flex-col _shadow border-2 items-center py-4 rounded-lg"
                        >
                            <img
                                src={leader?.image}
                                alt=""
                                className="rounded-full h-[150px] w-[150px] "
                            />
                            <h4 className="mt-2 text-lg font-bold">
                                {leader?.name}
                            </h4>

                            <h4 className="mb-2 text-lg font-bold opacity-60">
                                {leader?.title?.title ?? "-"}
                            </h4>
                            <blockquote className="text-sm px-5 tracking-wide font-medium text-center italic">
                                {leader?.description}
                            </blockquote>

                            <Link
                                to={`/admin/leaders/${leader._id}/edit`}
                                className="bg-transparent px-8 py-1 border-dodge-blue border-2 text-dodge-blue hover:text-white hover:bg-dodge-blue mt-4 rounded-full  items-center justify-center"
                            >
                                Update
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ChurchLeadership;
