import React from "react";

const UsersTable = () => {
  return (
    // <div className="flex flex-col">
    //   <div className="-my-2 sm:-mx-6 lg:-mx-8">
    <div className="align-middle inline-block min-w-full mt-6">
      <div className="p-4 flex">
        <h4 className=" text-2xl font-bold">Users List</h4>
        <button className="p-2 ml-auto bg-sea-green py-1 px-4 text-white uppercase font-normal rounded-md">
          Add User
        </button>
      </div>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Leadership
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
              <th scope="col" className="relative px-5 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[1, 2, 3, 4, 5, 6].map((person) => (
              <tr key={person}>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={`https://randomuser.me/api/portraits/men/${person}.jpg`}
                      alt=""
                    />
                  </div>
                </td>

                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Persons Name</div>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">Person Email</div>
                </td>

                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Chairman</div>
                  <div className="text-sm text-gray-500">Church Committee</div>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                  User
                </td>
                <td className="pr-8 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default UsersTable;
