import React, { FunctionComponent } from 'react';
import { Link } from "gatsby";
import Text from "components/Text";

const IndexPage: FunctionComponent = function () {
  return (
    <div>
      <Text text="Hello World!" />
      <Link to="/info/">To info</Link>
    </div>
  )
};

export default IndexPage;