import React from "react";

class Mail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, date, id, isRead } = this.props.mail;
    return (
      <div
        className="mb-5 card p-2 mt-5"
        style={{ borderLeft: "5px solid #ad0c0c" }}
      >
        <div className="d-md-flex justify-content-between align-items-center">
          <h5 className="fw-bold">{title}</h5>

          <p>
            {" "}
            {isRead ? (
              <span style={{ width: "4px", height: "4rem" }}>
                {" "}
                <span className="badge bg-primary">1</span>{" "}
              </span>
            ) : null}{" "}
            {date}
          </p>
        </div>
        <div className="d-md-flex justify-content-between align-items-center">
          <h6 className="text-start">
            <i className="bi bi-chat"></i> {description}
          </h6>
          <p className="d-flex">
            <button className="btn " onClick={() => this.props.removeMail(id)}>
              <i className="bi bi-trash fw-bold"></i>
            </button>
            <button className="btn" onClick={(e) => this.props.flagMail(e, id)}>
              <i className="bi bi-flag fw-bold"></i>
            </button>
            <button className="btn" onClick={() => console.log("clicked")}>
              <i className="bi bi-exclamation-triangle fw-bold"></i>
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Mail;
