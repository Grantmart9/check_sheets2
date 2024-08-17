import React from "react";
import { Size } from "media-query";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";
import Cookies from "universal-cookie";
import Moment from "moment";
import { Background1, Background2 } from "./Display/feutures";
const cookies = new Cookies();

export const JobDetails = () => {
  Moment.locale("en");
  const size = Size();

  const SiteDetails = () => {
    return (
      <>
        {size == "SM" || size == "XS" ? (
          <div className="grid grid-flow-row gap-1">
            <div className="grid grid-flow-col gap-1">
              <div className="text-center my-auto text-gray-light">
                Site access ref no
              </div>
              <div className="my-auto">
                <TextField
                  sx={{ backgroundColor: "white" }}
                  className="rounded-md"
                  size="small"
                  fullWidth="true"
                  placeholder="ex J432212"
                />
              </div>
            </div>
            <div className="grid grid-flow-col gap-1">
              <div className="text-center my-auto text-gray-light">
                GPS co-ordinates
              </div>
              <div className="my-auto">
                <TextField
                  sx={{ backgroundColor: "white" }}
                  className="rounded-md"
                  size="small"
                  fullWidth="true"
                  placeholder="ex 39.23.45.12.55"
                />
              </div>
            </div>
          </div>
        ) : null}
        {size == "MD" ? (
          <div className="grid grid-flow-row gap-1">
            <div className="grid grid-flow-col gap-1">
              <div className="my-auto">
                <TextField
                  sx={{ backgroundColor: "white" }}
                  className="rounded-md"
                  size="small"
                  fullWidth="true"
                  placeholder="Site access ref no"
                />
              </div>
            </div>
            <div className="grid grid-flow-col gap-1">
              <div className="my-auto">
                <TextField
                  sx={{ backgroundColor: "white" }}
                  className="rounded-md"
                  size="small"
                  fullWidth="true"
                  placeholder="GPS co-ordinates"
                />
              </div>
            </div>
          </div>
        ) : null}
        {size == "L" ? (
          <div className="grid grid-flow-row gap-1">
            <div className="grid grid-flow-col gap-1">
              <div className="my-auto">
                <TextField
                  sx={{ backgroundColor: "white" }}
                  className="rounded-md"
                  size="small"
                  fullWidth="true"
                  placeholder="Site access ref no"
                />
              </div>
            </div>
            <div className="grid grid-flow-col gap-1">
              <div className="my-auto">
                <TextField
                  sx={{ backgroundColor: "white" }}
                  className="rounded-md"
                  size="small"
                  fullWidth="true"
                  placeholder="GPS co-ordinates"
                />
              </div>
            </div>
          </div>
        ) : null}
        {size == "XL" ? (
          <div className="grid grid-flow-col gap-1">
            <div className="my-auto">
              <TextField
                sx={{ backgroundColor: "white" }}
                className="rounded-md"
                size="small"
                fullWidth="true"
                placeholder="Site access ref no"
              />
            </div>
            <div className="my-auto">
              <TextField
                sx={{ backgroundColor: "white" }}
                className="rounded-md"
                size="small"
                fullWidth="true"
                placeholder="GPS co-ordinates"
              />
            </div>
          </div>
        ) : null}
      </>
    );
  };

  return (
    <Slide direction="left" in={true} timeout={800}>
      {size == "XL" ? (
        <div
          style={{ backgroundColor: Background1, opacity: "90%" }}
          className="bg-gray-light rounded-md p-1 ml-1 w-full"
        >
          <div className="grid grid-flow-col gap-2 rounded-md p-1">
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="rounded-md p-2"
            >
              <SiteDetails />
            </div>
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="inline-flex rounded-md p-2"
            >
              <div className="text-center my-auto text-gray-light mr-2">
                Date:
              </div>
              <div
                style={{
                  minHeight: "30pt",
                  alignContent: "center",
                }}
                className="text-center text-gray-light"
              >
                {Moment(Date()).format("MMMM Do YYYY, h:mm a")}
              </div>
            </div>
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="inline-flex rounded-md p-2"
            >
              <div className="text-center my-auto text-gray-light mr-1">
                Technician:
              </div>
              <div
                style={{
                  minHeight: "30pt",
                  alignContent: "center",
                }}
                className="text-center text-gray-light"
              >
                {cookies.get("Username")}
              </div>
            </div>
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="inline-flex rounded-md p-2"
            >
              <div className="text-center my-auto text-gray-light mr-2">
                Site:
              </div>
              <div className="flex align-center justify-center">
                <TextField
                  sx={{ backgroundColor: "white" }}
                  className="rounded-md"
                  size="small"
                  fullWidth="true"
                  placeholder="ex Kannonkop"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundColor: Background1, opacity: "90%" }}
          className="bg-gray-light rounded-md p-1 ml-1 w-full"
        >
          <div className="grid grid-flow-col gap-2 rounded-md p-1">
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="rounded-md p-2"
            >
              <SiteDetails />
            </div>
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="rounded-md p-2"
            >
              <div className="text-center my-auto text-gray-light">Date</div>
              <div
                style={{
                  minHeight: "30pt",
                  alignContent: "center",
                }}
                className="text-center text-gray-light"
              >
                {Moment(Date()).format("MMMM Do YYYY, h:mm a")}
              </div>
            </div>
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="rounded-md p-2"
            >
              <div className="text-center my-auto text-gray-light">
                Technician
              </div>
              <div
                style={{
                  minHeight: "30pt",
                  alignContent: "center",
                }}
                className="text-center text-gray-light"
              >
                {cookies.get("Username")}
              </div>
            </div>
            <div
              style={{ backgroundColor: Background2, opacity: "90%" }}
              className="rounded-md p-2"
            >
              <div className="text-center my-auto text-gray-light">Site</div>
              <div className="flex align-center justify-center">
                <TextField
                  sx={{ backgroundColor: "white" }}
                  className="rounded-md"
                  size="small"
                  fullWidth="true"
                  placeholder="ex Kannonkop"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Slide>
  );
};

export const JobDetailsSmall = () => {
  Moment.locale("en");

  const SiteDetails = () => {
    return (
      <div className="grid grid-flow-row gap-1">
        <div className="my-auto">
          <TextField
            sx={{ backgroundColor: "white" }}
            className="rounded-md"
            size="small"
            fullWidth="true"
            placeholder="Site access ref no"
          />
        </div>
        <div className="my-auto">
          <TextField
            sx={{ backgroundColor: "white" }}
            className="rounded-md"
            size="small"
            fullWidth="true"
            placeholder="GPS co-ordinates"
          />
        </div>
      </div>
    );
  };

  const DateWidget = () => {
    return (
      <div
        style={{ backgroundColor: Background2, opacity: "90%" }}
        className="rounded-md p-2"
      >
        <div className="text-center my-auto text-gray-light">Date</div>
        <div
          style={{
            minHeight: "30pt",
            alignContent: "center",
          }}
          className="text-center text-gray-light"
        >
          {Moment(Date()).format("MMMM Do YYYY, h:mm a")}
        </div>
      </div>
    );
  };

  const BadgeWidget = () => {
    return (
      <div
        style={{ backgroundColor: Background2, opacity: "90%" }}
        className="rounded-md p-2"
      >
        <div className="text-center my-auto text-gray-light">Technician</div>
        <div
          style={{
            minHeight: "30pt",
            alignContent: "center",
          }}
          className="text-center text-gray-light"
        >
          {cookies.get("Username")}
        </div>
      </div>
    );
  };

  const Site = () => {
    return (
      <div
        style={{ backgroundColor: Background2, opacity: "90%" }}
        className="rounded-md p-2"
      >
        <div className="text-center my-auto text-gray-light">Site</div>
        <div className="flex align-center justify-center">
          <TextField
            sx={{ backgroundColor: "white" }}
            className="rounded-md"
            size="small"
            fullWidth="true"
            placeholder="ex Kannonkop"
          />
        </div>
      </div>
    );
  };

  return (
    <Slide direction="left" in={true} timeout={800}>
      <div
        style={{ backgroundColor: Background1, opacity: "90%" }}
        className="bg-gray-light rounded-md p-1 w-full"
      >
        <div className="grid grid-flow-row gap-2 rounded-md p-1">
          <div
            style={{ backgroundColor: Background2, opacity: "90%" }}
            className="rounded-md p-2"
          >
            <SiteDetails />
          </div>
          <DateWidget />
          <BadgeWidget />
          <Site />
        </div>
      </div>
    </Slide>
  );
};
