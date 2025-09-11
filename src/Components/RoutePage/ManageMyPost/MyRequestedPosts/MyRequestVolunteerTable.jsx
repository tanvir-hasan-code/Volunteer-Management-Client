import React, { use, useState } from "react";
import useCancelRequestAPI from "../../../../API/useCancelRequestAPI";
import Swal from "sweetalert2";

const MyRequestVolunteerTable = ({ myRequestVolunteer }) => {
	const requestPost = use(myRequestVolunteer) || [];
	const [request, setRequest] = useState(requestPost);
	const { cancelRequestPromise } = useCancelRequestAPI();

  const handleDeleteReq = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelRequestPromise(_id)
          .then((res) => {
			  if (res?.data?.deletedCount) {
				  const remainder = request.filter(p => p._id !== _id);
				  setRequest(remainder);
              Swal.fire({
                title: "Deleted!",
				  text: "Your Post has been deleted.",
				showConfirmButton: false,
                icon: "success",
              });
            }
          })
          .catch((error) => {
            if (error) {
              Swal.fire({
                title: "Fail!",
                text: "Your Request has been delete Fail!.",
				  icon: "error",
				showConfirmButton: false,
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>INFO</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {request.map((req, i) => (
              <tr key={req._id}>
                <td className="md:font-bold">{i + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={req?.thumbnail}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{req?.title}</div>
                      <div className="text-sm opacity-50">{req?.location}</div>
                    </div>
                  </div>
                </td>
                <td>{req.status}</td>
                <th>
                  <button
                    onClick={() => handleDeleteReq(req._id)}
                    className="btn btn-error btn-xs md:btn-md"
                  >
                    Cancel{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRequestVolunteerTable;
