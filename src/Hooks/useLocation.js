import { useEffect, useState } from "react";
import { getIPAddress } from "../utils/getIP";

const useLocation = () => {
  const [location, setLocation] = useState(null);

  const getLocationDetails = async () => {
    const ip = await getIPAddress();
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${
      import.meta.env.VITE_LOCATION_API_KEY
    }&ip=${ip}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      if (ip) {
        const response = await fetch(url, options);
        const loc = await response.json();
        setLocation(loc);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocationDetails();
  }, []);

  return location;
};

export default useLocation;
