import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Todo from "./components/Todo/Todo";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import useActive from "./Hooks/useActive";
import Location from "./components/Location/Location";

function App() {
  const isOnline = useActive();

  return (
    <>
      <div
        className={`min-h-screen bg-[#BBE2EC] bg-contain object-cover flex justify-center items-center`}
      >
        <Location />
        {!isOnline ? (
          <div className="transition delay-150 ease-linear my-2 px-3 py-2 rounded text-center text-white font-semibold bg-gray-600 absolute top-20 shadow-xl">
            Your are now Offline{" "}
            <FontAwesomeIcon className="ml-1" icon={faWifi} />
          </div>
        ) : (
          ""
        )}
        <Todo />
      </div>
    </>
  );
}

export default App;
