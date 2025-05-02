// import { useState } from "react";
// import Countries from "./components/Countries";
// import dark from "./img/dark.svg";
// import crs from "./img/crs.svg";

// export default function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
//       <div className="flex justify-between items-center p-4 shadow-md">
//         <h1 className="text-xl font-bold">Where in the world?</h1>
//         <div className="flex gap-2 items-center cursor-pointer" onClick={toggleDarkMode}>
//           <img src={dark} alt="dark mode icon" className="w-5 h-5" />
//           <h2 className="text-md">Dark Mode</h2>
//         </div>
//       </div>

//       <div className="p-4 flex items-center gap-2">
//         <img src={crs} alt="search icon" className="w-4 h-4" />
//         <input
//           placeholder="Search for a country…"
//           type="text"
//           className="p-2 border rounded-md w-full bg-inherit border-gray-300 dark:border-gray-600"
//         />
//       </div>

//       <Countries />
//     </div>
//   );
// }





import Countries from "./components/Countries";
import dark from "./img/dark.svg"
import crs from "./img/crs.svg"

export default function App() {
  return (
    <>
      <div className="flex ml-10 mt-6">
        <h1 className="font-bold text-2xl">Where in the world?</h1>
        <div className="flex gap-2 ml-[1000px]">
          <img src={dark} alt="#" />
          <h2 className="mt-1">DarkMode</h2>
        </div>
      </div>

      <div className="border border-[1px] border-[#0000000E] mt-6"></div>

      <div className="ml-10 relative w-full max-w-md mt-12">
        <img src={crs} alt="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        <input
          className="w-full border border-gray-300 shadow-md pl-10 py-2 rounded-md"
          placeholder="Search for a country…"
          type="text"
        />
      </div>
      <Countries />
    </>
  );
}
