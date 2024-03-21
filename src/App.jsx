import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Todo from "./components/Todo/Todo";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import useActive from "./Hooks/useActive";

function App() {
  const isOnline = useActive();

  return (
    <>
      <div
        className={`min-h-screen bg-[#7BD5F5] flex justify-center items-center`}
      >
        {!isOnline ? (
          <div className="transition delay-150 ease-linear px-3 py-2 rounded text-center text-white font-semibold bg-gray-600 absolute top-20">
            Your are now Offline <FontAwesomeIcon icon={faWifi} />
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
