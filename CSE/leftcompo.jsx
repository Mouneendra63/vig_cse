import React, { useEffect } from "react";

function Left(props) {
  useEffect(() => {
    const modal = document.getElementById(`modal-${props.id}`);
    const container = document.querySelector(".container");

    // Add event listeners to adjust z-index
    modal.addEventListener("shown.bs.modal", () => {
      container.style.zIndex = "-1";
    });

    modal.addEventListener("hidden.bs.modal", () => {
      container.style.zIndex = "auto";
    });

    // Cleanup event listeners on unmount
    return () => {
      modal.removeEventListener("shown.bs.modal", () => {
        container.style.zIndex = "-1";
      });
      modal.removeEventListener("hidden.bs.modal", () => {
        container.style.zIndex = "auto";
      });
    };
  }, [props.id]);

  return (
    <div
      className="container py-5 block"
      id={props.id}
      style={{
        maxWidth: "1500px",
        background: "#e7f1ff",
        fontFamily: "'DM Serif Display', serif",
      }}
    >
      {/* Left-aligned Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src={props.imgurl}
            className="img-fluid rounded shadow ms-5"
            alt={props.maintitle}
            style={{ width: "630px" }}
          />
        </div>
        <div className="col-md-6">
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

      <div
  className="modal fade"
  id={`modal-${props.id}`}
  tabIndex="-1"
  aria-labelledby={`label-${props.id}`}
  aria-hidden="true"
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
            {/* Image Section - Display 2x2 matrix of images */}
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

          {/* Scrollable Content Section */}
          <div className="col-md-12" style={{ maxHeight: "750px", overflowY: "auto" }}>
            {props.title1 && (
              <div className="row mb-2">
                <h3>{props.title1}</h3>
                {props.para1 && <p>{props.para1}</p>}
                <hr />
              </div>
            )}
            {props.title2 && (
              <div className="row mb-2">
                <h3>{props.title2}</h3>
                {props.para2 &&
                  props.para2.split("\n").map((line, index) => (
                    <p key={index}>
                      {line.includes("1. Digital Board") ||
                      line.includes("2. 70 High-Performance Systems") ||
                      line.includes("3. Network & Internet") ||
                       line.includes("4. Wi-Fi Facilities") ||
                       line.includes("5. Power Backup")? (
                        <strong className="fs-4">{line.trim()}</strong>
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
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
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

export default Left;


