import React from 'react';
import './sheet.css';

const Sheet = () =>{
  return(
    <div id = "form">
      <form>
        <div className="form-row">          
          <div className="form-group col-md-6">
            <label htmlFor="inputFullName">Full Name</label>
            <input type="text" className="form-control" id="fullName" placeholder="Full Name" required />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder=" 742 Evergreen Terrace" required />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Just in case the mailman screws up" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" required />
          </div>          
          <div className="form-group col-md-4">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" required />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" required />
            <label className="form-check-label" htmlFor="gridCheck">
              I agree with the Terms and Conditions
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>  
    </div>
  );
}

export default Sheet;