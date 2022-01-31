import React, { useEffect, useState } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import "./App.css";
import { Button, ButtonToolbar, Spinner } from "react-bootstrap";
const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const getImages = async () => {
    const image = await axios.get(
      `https://pixabay.com/api/?key=25458082-78b4f03a57edf4ceed37fb701&q=random&page=${page}&image_type=photo&per_page=100&orientation=vertical horizontal`
    );
    if (image.data.hits.length === 0) {
      setPage(0);
    }

    console.log(image);
    setImages(image.data.hits);
  };
  useEffect(() => {
    getImages();
  }, [page]);
  const scroolTop = () => {
    window.scrollTo(0, 0);
  };
  window.onscroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <NavBar images={setImages} />

      <div className="container-fluid">
        <div className="row">
          {images.length > 0 ? (
            images.map((i, index) => {
              return (
                <>
                  <div className="col-md-3 mt-3">
                    <img
                      alt="fref"
                      width="100%"
                      height="100%"
                      src={i.largeImageURL}
                    />
                  </div>
                </>
              );
            })
          ) : (
            <Button variant="primary" className="mt-5" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          )}
          <div className="col-md-12">
            <button
              className="btn btn-primary fixed-bottom"
              onClick={scroolTop}
            >
              scrool to top
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
