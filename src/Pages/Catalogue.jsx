import "./Pages.css"
export default function Catalogue(){
  const cars = [
    { id: 1, make: 'Audi A1', model: 'S-Line', year: 2021, price: 50,imgSrc:"https://fastly-production.24c.in/hello-ar/dev/1920/18d2f9cc-ced1-438d-ba4f-913c916c498a/e90b75d3-0984-4cc1-ad00-b713abf8fc15/exterior/32.jpg" },
    { id: 2, make: 'Golf 6', model: 'VW', year: 2022, price: 60,imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/VW_Golf_VI_1.4_Comfortline_Deep_Black.JPG/800px-VW_Golf_VI_1.4_Comfortline_Deep_Black.JPG?20100722165328"},
    { id: 3, make: 'Toyota', model: 'Camry', year: 2020, price: 80,imgSrc:"https://w0.peakpx.com/wallpaper/359/173/HD-wallpaper-toyota-camry-2018-toyota-camry-toyota-cars-2018-cars.jpg" },
    { id: 4, make: 'BMW', model: '320', year: 2020, price: 80,imgSrc:"https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/3-Series-2022/9110/1670666288910/front-left-side-47.jpg?tr=w-456" },
    { id: 5, make: 'Mercedes-Benz', model: 'GLK', year: 2020, price: 80,imgSrc:"https://hips.hearstapps.com/hmg-prod/images/2019-mercedes-benz-g550-357-1570533121.jpg?crop=0.635xw:0.777xh;0.0561xw,0.223xh&resize=640:*" },
    { id: 6, make: 'VW', model: 'Passat CC', year: 2020, price: 80,imgSrc:"https://www.automotiveaddicts.com/wp-content/uploads/2018/08/2018-volkswagen-passat-v6-sel-premium.jpg" },
    // Add more car objects as needed
  ];
  return (
    <div className="container">
      <div className="catalogue">
        <h1 className="heading">Car Catalog</h1>
        <div className="catalogue-cars">
        {cars.map((car) => (
          <div key={car.id} className="catalogue-car-item">
            <img src={car.imgSrc} alt="" />
            <div className="catalogue-cars-detail">
              <h2>{car.make}</h2>
              <p>{car.model}: <span>{car.year}</span> </p>
              
              <p>PRICE :<span>${car.price} per day</span> </p>
              <hr />
              <button>NOTIFY WHEN AVAILABLE</button>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  )
}