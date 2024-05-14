import { useState } from "react";
import "./App.css";
import data from "./data"
import Tours from "./components/Tours";

function App() {

  const [tours, setTours] = useState(data);


  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  if (tours.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <h2>No Tours Left</h2>
        <button className="mt-[18px] py-[10px] px-[80px] border-2 rounded-xl border-black bg-red-700 font-bold text-white hover:text-black" onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className='min-h-[100vh]'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
