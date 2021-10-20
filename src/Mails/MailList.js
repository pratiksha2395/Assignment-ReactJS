import React from "react";
import './MailList.css'
import Mail from "../Mails/Mail";
class MailList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container heading" >
        <div className="bg-light text-dark text-start">
          <h5 className="mt-3 p-3">Last Month</h5>
        </div>
        {this.props.MailList.map((mail) => {
          return (
            <Mail
              key={mail.id}
              removeMail={this.props.removeMail}
              flagMail={this.props.flagMail}
              mail={mail}
            />
          );
        })}
      </div>
    );
  }
}

export default MailList;
