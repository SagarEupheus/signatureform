import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import TextField from '@mui/material/TextField';

const Form = () => {
  return (
    <>
     <section class="intro ">
  <div className="mask d-flex align-items-center h-100 gradient-custom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card">
            <div className="card-body p-4 p-md-5">
                <img src="https://www.eupheus.in/static/media/logo.f9fd97ff89ac44ae2b1f.png" className="img-fluid w-25" alt="eupheus" />
              <div className="row">
              <div className="col-md-12 mb-3">
              <h5 className="mb-4 mt-4 pb-2 rounded text-center">
                <span className="w-50  rounded p-2 ">
                     DOWNLOAD SIGN
                    </span>
                     </h5>
              </div>
              </div>

              <form >

                <div className="row">
                  <div className="col-md-12 mb-3">

                    <div className="form-outline">
                  <TextField id="standard-basic"type="number" label="Phone Number" variant="standard" />
                    </div>

                  </div>
                  <div className="col-md-12 mb-4">

                    {/* <div class="form-outline mb-5">
                  <TextField id="standard-basic" label="Standard" variant="standard" />
                    </div> */}
                    <button type="button" className="btn w-25 btn-primary">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Form;
