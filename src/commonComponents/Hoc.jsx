import React from "react";

function Hoc(props) {
  console.log("props :", props);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mb-4">Hoc</h1>
      <div className="grid grid-cols-4 gap-4">
        <p className="bg-red-300 p-4 rounded">{props.com()}</p>
        <p className="bg-blue-300 p-4 rounded">{props.com()}</p>
        <p className="bg-green-300 p-4 rounded">{props.com()}</p>
        <p className="bg-yellow-300 p-4 rounded">{props.com()}</p>
        <p className="bg-purple-300 p-4 rounded">{props.com()}</p>
        <p className="bg-pink-300 p-4 rounded">{props.com()}</p>
        <p className="bg-indigo-300 p-4 rounded">{props.com()}</p>
        <p className="bg-teal-300 p-4 rounded">{props.com()}</p>
        <p className="bg-orange-300 p-4 rounded">{props.com()}</p>
        <p className="bg-lime-300 p-4 rounded">{props.com()}</p>
        <p className="bg-gray-300 p-4 rounded">{props.com()}</p>
        <p className="bg-emerald-300 p-4 rounded">{props.com()}</p>
      </div>
    </div>
  );
}

export default Hoc;
