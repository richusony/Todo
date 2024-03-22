import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useLocation from "../../Hooks/useLocation";

const Location = () => {
  const location = useLocation();

  return (
    location ? <div className="transition delay-150 ease-linear flex justify-center items-center px-3 py-2 rounded text-center text-gray-500 font-semibold bg-[#DFF5FF] absolute left-5 top-10 shadow-xl">
      <FontAwesomeIcon className="mr-1" icon={faLocation} />{" "}
      {location?.state_prov + ", " + location?.country_name}
      <img
        className="mx-2 w-6"
        src={location?.country_flag}
        alt="country-flag"
      />
    </div> : null
  );
};

export default Location;
