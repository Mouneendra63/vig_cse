import React from 'react';

function Right(props) {
  return (
    <div className="container py-5 block" id={props.id} style={{ fontFamily: "'DM Serif Display', serif" }}>
      <div className="row align-items-center mb-5">
        {/* Ensure unique animation */}
        <div className="col-md-6 order-md-2">
          <img
            src={props.imgurl}
            className="img-fluid rounded shadow"
            alt={props.maintitle}
            style={{ height: "430px", width: "670px" }}
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h2
            className="fs-1 fw-normal"
            style={{
              fontFamily: "DM Serif Display",
              lineHeight: "1.2",
              color: "#000",
            }}
          >
            {props.maintitle}
          </h2>
          <p>{props.mainmatter}</p>
          <span className="learnn">
            <button
              className="learn-more"
              data-bs-toggle="modal"
              data-bs-target={`#modal-${props.id}`}
            >
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Explore More</span>
            </button>
          </span>
        </div>
      </div>

      {/* Modal */}
      <div
  className="modal fade"
  id={`modal-${props.id}`}
  tabIndex="-1"
  aria-labelledby={`label-${props.id}`}
  aria-hidden="true"
  aria-describedby={`modal-desc-${props.id}`}
>
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title fs-3" id={`label-${props.id}`}>
          {props.maintitle}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <div className="container-fluid">
          <div className="row">
            {/* Image Section - 2x2 Grid Layout for images */}
            <div className="col-md-6 mb-3">
              {props.pic1 && (
                <img
                  src={props.pic1}
                  className="w-100"
                  style={{ maxHeight: "200px" }}
                  controls
                />
              )}
            </div>
            <div className="col-md-6 mb-3">
              {props.pic2 && (
                <img
                  src={props.pic2}
                  className="w-100"
                  style={{ maxHeight: "200px" }}
                  controls
                />
              )}
            </div>
            <div className="col-md-6 mb-3">
              {props.pic3 && (
                <img
                  src={props.pic3}
                  className="w-100"
                  style={{ maxHeight: "200px" }}
                  controls
                />
              )}
            </div>
            <div className="col-md-6 mb-3">
              {props.pic4 && (
                <img
                  src={props.pic4}
                  className="w-100"
                  style={{ maxHeight: "200px" }}
                  controls
                />
              )}
            </div>
          </div>
          {/* Scrollable Content Section - Flex layout */}
          <div
            className="col-md-12 d-flex flex-column"
            style={{ maxHeight: "750px", overflowY: "auto" }}
          >
            {props.title1 && (
              <div className="mb-2">
                <h3>{props.title1}</h3>
                {props.para1 && <p>{props.para1}</p>}
                <hr />
              </div>
            )}
            {props.title2 && (
              <div className="mb-2">
                <h2>{props.title2}</h2>
                {props.para2 &&
                  props.para2.split("\n").map((line, index) => (
                    <p key={index}>
                      {line.includes("1. Networking Lab") ||
                      line.includes("3. Network Simulation Lab") ||
                      line.includes("4. Cloud Computing Lab") ||
                       line.includes("2. Big Data Analytics Lab")? (
                        <strong>{line.trim()}</strong>
                      ) : (
                        line.trim()
                      )}
                    </p>
                  ))}
                <hr />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-danger"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>
<div>
      </div>
    </div>
  );
}

export default Right;