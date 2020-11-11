import React, { Component } from "react";
import { withRouter } from "react-router";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      photo: [],
    };
  }
  componentDidMount() {
    const { photos } = this.props;
    const photo = photos.filter(
      (photo) => photo.id === this.props.match.params.id
    );
    this.setState({ photo });
  }
  render() {
    const { photo } = this.state;
    return (
      <div className="container text-center">
        <h1>Photo Details</h1>
        <br />
        {photo.length <= 0 ? (
          <div className="container">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="parent">
            <div className="photoDetails">
              <img src={photo[0].urls.regular} alt="img" />
            </div>
            <div className="photoDetails">
              <ul style={{ marginLeft: "5%" }} className="vertical-center">
                <li>Description: {photo[0].alt_description}</li>
                <li>Owner: {photo[0].user.name}</li>
                <li>Total Images By Owner: {photo[0].user.total_photos}</li>
                <li className="hover">
                  Portfolio:
                  <a href={photo[0].user.portfolio_ur}>
                    {photo[0].user.portfolio_url}
                  </a>
                </li>
                <br />
                <div>
                  <i className="fas fa-thumbs-up fa-2x">{photo[0].likes}</i>
                  <a
                    href={`${photo[0].links.download}?client_id=32qJF5IgxG6C5M23ex14c6hcs1xJ_-mH3dtH1ZUF23k`}
                    target="_blank"
                    rel="noreferrer"
                    download
                    style={{ display: "inline-block" }}
                    className="pad_left "
                  >
                    {" "}
                    <i className="fas fa-cloud-download-alt fa-2x "></i>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Details);
