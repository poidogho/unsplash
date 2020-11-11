import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Unsplash, { toJson } from "unsplash-js";
import "./App.css";
import Landing from "./components/Landing";
import PhotoDetails from "./components/PhotoDetails";

// TODO: Replace "APP_ACCESS_KEY" with your own key, which
// can be generated here: https://unsplash.com/developers
const unsplash = new Unsplash({
  accessKey: "32qJF5IgxG6C5M23ex14c6hcs1xJ_-mH3dtH1ZUF23k",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = () => {
    unsplash.photos
      .listPhotos(1, 20)
      .then(toJson)
      .then((photos) => {
        this.setState({ photos });
      });
  };

  filterPhotos = async (searchTerm) => {
    const response = await unsplash.search
      .photos(searchTerm, 1, 20)
      .then((res) => res.json());
    //console.log(response);
    this.setState({ photos: response.results });
  };

  // updateLikes = async (photo) => {
  //   console.log(photo);
  //   const response = await unsplash.photos.likePhoto(photo).then(toJson);
  //   console.log(response);
  // };

  render() {
    console.log(this.state.photos);
    const { photos } = this.state;
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Landing
                  photos={photos}
                  filterPhotos={this.filterPhotos}
                  getPhotos={this.getPhotos}
                  updateLikes={this.updateLikes}
                  down={this.down}
                />
              )}
            />
            <Route
              exact
              path="/photos/:id"
              component={() => <PhotoDetails photos={photos} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
