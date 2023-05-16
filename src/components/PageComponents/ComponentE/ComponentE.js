import React from "react"
import styled from "styled-components"
import { Section, Container, GridThree } from "components/layoutComponents"
import { ButtonPrimary } from "components/buttons"

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`

// const StyledImg = styled(GatsbyImage)`
//   height: 300px;
//   width: 100%;
// `

const Item = styled.div`
  text-align: center;

  border: 3px solid var(--clr-tan);
  border-radius: var(--br);

  div {
    
  }
`

const Inner = styled.div`
padding: 2em;
`

export default function ComponentE({ subheader, title, content }) {
    let width = '100%';
let height = '300px';
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <div className="">
            <p className="subheader accent">{subheader}</p>
            <h2 className="title">{title}</h2>
          </div>
        </Text>
        <GridThree>
          {content.map(item => {
            return (
              <Item className="spacing">
                <Image alt={item.image.altText || ''} srcSet={item.image.srcSet} src={item.image.src} width={width} height={height} />
                <Inner>
                  <h3 className="subheader accent">{item.title}</h3>
                  {item.description ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${item.description}`,
                      }}
                    />
                  ) : null}
                </Inner>
              </Item>
            )
          })}
        </GridThree>
        <center>
          <ButtonPrimary to="/contact">talk to us today</ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
