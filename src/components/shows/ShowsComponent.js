import { Grid } from "@mui/material";
import React from "react";
import showsCardStyles from "./show-component.module.css";

const ShowsComponent = ({ data }) => {
  return (
    <Grid container rowGap={2}>
      {data &&
        data.cardList &&
        data.cardList
          .filter((cat) => cat.category === "shows")
          .map((list, i) => (
            <Grid item xl={3} lg={4} md={4} sm={6} xs={12}>
              <div className={showsCardStyles.wrapper}>
                <div className={showsCardStyles.card}>
                  <img
                    id="image"
                    src={
                      list.image !== undefined
                        ? list.image
                        : "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&fit=crop&w=311&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                    }
                  />
                  <div className={showsCardStyles.info}>
                    <div className="d-flex justify-content-between ">
                      <div>
                        <img
                          src={list.leftOverlay}
                          style={{ height: "60px", width: "60px" }}
                          alt={list.leftOverlayText}
                        />
                        <p className="text-white text-decoration-none">
                          {list.leftOverlayText}
                        </p>
                      </div>
                      <div>
                        <p id={`${showsCardStyles["title"]}`}>{list.title}</p>
                      </div>
                      <div className="align-items-right">
                        <img
                          src={list.rightOverlay}
                          style={{ height: "60px", width: "60px" }}
                          alt={list.rightOverlayText}
                        />
                        <p className="text-white text-decoration-none">
                          {list.rightOverlayText}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div
                        id={`${
                          list.heading.length < 20
                            ? showsCardStyles["heading"]
                            : showsCardStyles["heading__sm"]
                        }`}
                      >
                        {list.heading}
                      </div>
                      <p id={`${showsCardStyles["name"]}`}>{list.name}</p>
                    </div>
                    <div
                      id={`${
                        list.description.length < 20
                          ? showsCardStyles["desc"]
                          : showsCardStyles["desc__sm"]
                      }`}
                    >
                      {list.description}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <button
                        className={showsCardStyles.button__style}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `${list.link}`;
                        }}
                      >
                        Enter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
    </Grid>
  );
};

export default ShowsComponent;
