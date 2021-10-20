import React from "react";
import MailList from "../Mails/MailList";
import SideNav from "../SideNav/SideNav";
import { mailListdata } from "../data/mailList";

class Inbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MailList: [],
      flagedCount: 0,
      search: "",
      isFlagged: true,
      flaggedId: [],
    };
  }
  componentDidMount() {
    this.setState({ MailList: mailListdata });
  }
  flagMail = (e, id) => {
    if (this.state.flagedCount === 0 && this.state.flaggedId.includes(id)) {
      this.setState({ flaggedId: [] });
    } else if (!this.state.flaggedId.includes(id)) {
      this.state.flaggedId.push(id);
      this.setState({ flagedCount: this.state.flagedCount + 1 });
    } else {
      this.setState({
        flagedCount:
          this.state.flagedCount === 0
            ? this.state.flagedCount + 1
            : this.state.flagedCount - 1,
      });
      this.setState({
        flaggedId: this.state.flaggedId.filter((item) => item !== id),
      });
      console.log("else", this.state.flaggedId);
    }
  };
  removeMail = (id) => {
    let result = window.confirm(
      "Are you sure you want to delete this message ?"
    );
    if (result) {
      this.setState({
        MailList: this.state.MailList.filter((item) => item.id !== id),
      });
    }
    if (this.state.flaggedId.includes(id)) {
      this.setState({ flagedCount: this.state.flagedCount - 1 });
    }
  };

  handleSearch = (e) => {
    if (e.target.value !== "") {
      this.setState({ search: e.target.value });
      this.setState({
        MailList: this.state.MailList.filter((item) =>
          item.title.toLowerCase().includes(this.state.search.toLowerCase())
        ),
      });
    } else {
      this.state.search = "";
      this.setState({ MailList: mailListdata });
    }
  };
  render() {
    let mailCount = 0;
    this.state.MailList.map((item) => {
      if (item.isRead === true) {
        mailCount += 1;
      }
    });

    return (
      <div >
        <div className="container searchForm mt-4" >
          <form>
            <input
              type="text"
              id="filter"
              defaultValue={this.state.search}
              name="search"
              onChange={this.handleSearch}
              placeholder="search"
              className="form-control float-end w-25 mt-3"
            />
          </form>
          <div></div>
        </div>
        <SideNav flagedCount={this.state.flagedCount} mailCount={mailCount} />
        <MailList
          MailList={this.state.MailList}
          removeMail={this.removeMail}
          flagMail={this.flagMail}
        />
      </div>
    );
  }
}

export default Inbox;
