import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Topnav from "./topnav/topnav.component";

export default function Root(props: RootProps) {
  return (
    <BrowserRouter basename="/openmrs/spa">
      <Route path="/" component={Topnav} />
    </BrowserRouter>
  );
}

type RootProps = {};
