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

const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')}
`

const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
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
      <Text1 disable={true}>{description}</Text1>
      <Text2 disable={true}>{author}</Text2>
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