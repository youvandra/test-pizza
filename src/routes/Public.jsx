import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Wrapper from "components/Layouts";
const Guest = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            <Wrapper>
              <Component {...props} />
            </Wrapper>
          </>
        );
      }}
    />
  );
};

export default Guest;
