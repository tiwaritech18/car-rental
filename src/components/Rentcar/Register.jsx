export default function Register(){
  return (
    <div className="container form-details">
      <h1>PERSONAL INFORMATION</h1>
      <form className="form">
        <div className="top-2">
          <span className="first-name">
            <label>First Name <sup>*</sup> </label>
            <input type="text" placeholder="Enter your first name" required/>
          </span>
          <span className="last-name">
            <label>Last Name <sup>*</sup> </label>
            <input type="text" placeholder="Enter your last name" required/>
          </span>
        
          <span className="contact-no">
            <label>Phone Number <sup>*</sup> </label>
            <input type="text" placeholder="Enter your Phone Number" required/>
          </span>
          <span className="age-sec">
            <label>Age <sup>*</sup> </label>
            <input type="text" placeholder="18" required/>
          </span>
         
        <span className="email-sec">
          <label>Email <sup>*</sup> </label>
            <input type="Email" placeholder="Enter your email address" required/>
        </span>
          <span className="address-sec">
            <label>Address <sup>*</sup> </label>
            <input type="text" placeholder="Enter your street address" required/>
          </span>
        <span className="city-sec">
          <label>City <sup>*</sup> </label>
            <input type="text" placeholder="Enter your city" required/>
        </span>
          <span className="zipcode-sec">
            <label>Zip code <sup>*</sup> </label>
            <input type="text" placeholder="Enter your zip code" required/>
          </span> </div>
         <div className="terms">
          <input type="checkbox" name="" id="" required/> <p>Please send me latest news and updates</p>
          </div>
      </form>
      <button class="sub-button">Reserve Now</button>
    </div>

  )
}