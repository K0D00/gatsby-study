import React, { FunctionComponent } from 'react';
import { Global, css } from "@emotion/react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      }
    }
  }
}

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
`

const TextStyle = css`
  font-size: 24px;
  font-weight: 800;
  color: gray;
`

const Text1 = styled.div`
  font-size: 20px;
  font-weight: 700;
`

const Text2 = styled('div')(() => ({
  fontSize: '15px',
  color: 'blue'
}))

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: {
        title,
        description,
        author,
      },
    },
  }
}) {
  return (
    <div>
      <Global styles={globalStyles} />
      <div css={TextStyle}>{title}</div>
      <Text1>{description}</Text1>
      <Text2>{author}</Text2>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`