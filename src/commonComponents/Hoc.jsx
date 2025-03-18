import React from "react";

function Hoc(props) {
  console.log("props :", props);

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      {/* <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg"> */}
      <h1 className="text-center font-semibold text-3xl mb-6 text-blue-600">Higher-Order Components (HOC)</h1>

      <div className="mb-6">
        <h2 className="font-semibold text-xl text-gray-700">Most Common Use Cases</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
          <li>A smart use case for HOCs is to handle shared logic such as displaying a <span className="font-bold">loading spinner</span> while data is being fetched.</li>
          <li>Authentication and Authorization</li>
          <li>Theming (Dynamic Styling)</li>
          <li>Conditional Rendering</li>
          <li>Error Handling</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-red-300 p-4 rounded-lg shadow-lg text-center">
          <p className="text-lg font-semibold">{props.com()}</p>
        </div>
        <div className="bg-blue-300 p-4 rounded-lg shadow-lg text-center">
          <p className="text-lg font-semibold">{props.com()}</p>
        </div>
        <div className="bg-green-300 p-4 rounded-lg shadow-lg text-center">
          <p className="text-lg font-semibold">{props.com()}</p>
        </div>
        <div className="bg-yellow-300 p-4 rounded-lg shadow-lg text-center">
          <p className="text-lg font-semibold">{props.com()}</p>
        </div>
      </div>
    </div>
  );
}

export default Hoc;
