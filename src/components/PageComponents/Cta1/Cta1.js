
import React from "react"
import styled from "styled-components"
import { ButtonPrimaryDark } from "components/buttons"
import { Container, Flex, Section } from "components/layoutComponents"
import Image from "components/Image"

const Wrapper = styled.div`
  background: var(--clr-accent);
`

const Text = styled.div`
  color: var(--txt-light);
  padding: 2em 0;

  .subheader {
    color: var(--txt-dark-secondary);
  }
`

// const StyledImg = styled(GatsbyImage)`
//   clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 52%, 0% 0%);
// `

const ImgStyle = {
    clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 52%, 0% 0%)",
}

export default function Cta1({ subheader, title, body, image }) {
  return (
    <Wrapper>
      <Flex>
        <Image style={ImgStyle} className="stretch" alt={image.altText} srcSet={image.srcSet}  />
        <Text>
          <Container className="spacing">
            <div>
              <p className="subheader">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            {body ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: `${body}`,
                }}
              />
            ) : null}

            <ButtonPrimaryDark href="/contact">
              get your quote &#8594;
            </ButtonPrimaryDark>
          </Container>
        </Text>
      </Flex>
    </Wrapper>
  )
}
