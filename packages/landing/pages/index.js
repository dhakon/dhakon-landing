import React, { useState, useEffect } from "react";
import Banner from "../containers/App/Banner";

import { AppWithAuthentication } from "./../containers/App";

export default () => {
  return (
    <AppWithAuthentication>
      <Banner />
    </AppWithAuthentication>
  );
};
