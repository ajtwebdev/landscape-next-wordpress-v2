
import React from "react"
import styled from "styled-components"
import { Container, Section, FlexMobileOpp } from "components/layoutComponents"
import { ButtonPrimary } from "components/buttons"
import Image from "components/Image"

const Text = styled.div``

// const StyledImg = styled(GatsbyImage)`
//   box-shadow: -20px 20px 0px 1px var(--clr-accent);
// `

const ImgStyle = {
  boxShadow: "-20px 20px 0px 1px var(--clr-accent)",
}

export default function ImageLeft({ subheader, title, body, image, button, link }) {
  return (
    <Section>
      <Container>
        <FlexMobileOpp>
          <Image style={ImgStyle} className="stretch" alt={image.altText} srcSet={image.srcSet}  />
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${body}`,
              }}
            ></div>
            {button && link ? (<ButtonPrimary href={link}>{button}</ButtonPrimary>) : <ButtonPrimary href="/contact">get started</ButtonPrimary>}
          </Text>
        </FlexMobileOpp>
      </Container>
    </Section>
  )
}
