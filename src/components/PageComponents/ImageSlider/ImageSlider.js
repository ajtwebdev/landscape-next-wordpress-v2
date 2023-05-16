import React from "react"
import styled from "styled-components"
import { Container, Section } from "components/layoutComponents"
import ReactCompareImage from "react-compare-image"
// import "react-before-after-slider-component/dist/build.css"

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const ImageWrapper = styled.div`
  max-height: 600px;
  height: 100%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

export default function ImageSlider({ subheader, title, body }) {
  const before =
    "http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/04/11111-lighting-59fb9b0d7dbbc.jpg"
  const after =
    "http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/04/11111-lighting-59fb9b0d7dbbc.jpg"
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <div>
            <p className="subheader accent">{subheader}</p>
            <h2 className="title">{title}</h2>
          </div>
          {body ? (
            <div
              dangerouslySetInnerHTML={{
                __html: `${body}`,
              }}
            />
          ) : null}
        </Text>
        <ImageWrapper>
          <ReactCompareImage leftImage={before} rightImage={after} />
        </ImageWrapper>
      </Container>
    </Section>
  )
}
