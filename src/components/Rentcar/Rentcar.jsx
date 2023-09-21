import { useState } from "react";
import Cars from "../CarsAvailable/Cars"
import CarDetails from "./CarDetails";
import "./Rentcar.css";


export default function Rentcar(){
  const [carType,setCarType]=useState('');
  const [startDate,setStartDate]=useState('');
  const [endDate,setEndDate]=useState('');
  const [errorMessage,setErrorMessage]=useState(null);
  const [showModal,setShowModal]=useState(false);
  const [selectedCarObject, setSelectedCarObject] = useState(null);

  function handleCarname(carname){
    const selectedCarObject = Cars.find((car) => {
      return car.name === carname;
    });
    setSelectedCarObject(selectedCarObject);
  }

  function handleCarType(e){
    setCarType(e.target.value)
    
  }

  function handleStartDate(e){
    const toDate=e.target.value;
    setStartDate(toDate)
  }

  function handleEndDate(e){
    const EndDate=e.target.value;
    setEndDate(EndDate)
  }
  function handleSearch(e){
    e.preventDefault()
    if(!carType || !startDate || !endDate ){
      setErrorMessage("please fill out all the required fields")
    }
    else{
      setErrorMessage("")
      setShowModal(true);
    }
    console.log(carType)
    console.log(startDate)
    console.log(endDate)
    
  }
  function handleCLose(){
    setShowModal(false)
  }

  return (
    <div className="container">
      <div className="rentcar">
        <div className="details">
          <h1>Rent a Car</h1>
            <p>Select your car type and dates:</p>
        </div>
          <div className="choose-inputs">
            <label htmlFor="carType">Car Type:</label>
            <select id="carType" onChange={handleCarType} style={{height:"29px",fontSize:"12px"}}>
              <option value="">- Select Car Type -</option>
              {Cars.map((car) => (<option value={car.name} key={car.id}>{car.name}</option>))}
              
            </select>
          </div>
          <div className="choose-inputs">
            <label htmlFor="startDate">Start Date:</label>
            <input 
                type="date" 
                id="startDate" 
                value={startDate} 
                onChange={handleStartDate}
                onClick={() => handleCarname(carType)}
            />
          </div>
          <div className="choose-inputs">
            <label htmlFor="endDate">End Date:</label>
            <input 
                type="date" 
                id="endDate" 
                onChange={handleEndDate} 
                value={endDate} 
            />
          </div>
          <button id="search-button" onClick={handleSearch}>Search</button>
        </div>
        {errorMessage && <p id="error">{errorMessage}</p> }
        {showModal&& (
        <CarDetails 
        carType={carType}
        startDate={startDate}
        endDate={endDate}
        onClose={handleCLose}
        carimg={selectedCarObject.imgSrc}
        />)}
    </div>
  )
}