import React from "react"
import styled from "styled-components"
import { Container, Section } from "components/layoutComponents"
import Image from "components/Image"

const device = {
  md: "48em",
}

const Text = styled.div`
  max-width: 90ch;
  width: 100%;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2em auto 140px;
  grid-template-rows: 2em auto 2em;
`

const List = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 95rem;
  grid-row: 2 / -1;
  grid-column: 2 / -1;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;

  @media screen and (max-width: ${device.md}) {
    grid-template-columns: 1fr;
  }
`

const Bg = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;

  z-index: 1;
  background: var(--clr-accent);
`

const Item = styled.div`
  background: var(--clr-dark);
  color: var(--txt-light);
  text-decoration: none;

  div {
    
  }
`

const Inner = styled.div`
padding: 1em;
    p {
      color: var(--txt-light);
    }
    ul {
      margin-top: 4px;
      margin-bottom: 4px;
      padding-top: 0;
      padding-bottom: 0;
    }
`

// const StyledImg = styled(GatsbyImage)`
//   height: 400px;
//   width: 100%;
//   object-fit: cover;
// `

const Button = styled.div`
  cursor: pointer;
  display: inline-block;
  font-family: var(--ff-alfa);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  text-decoration: underline;
  font-style: italic;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--clr-accent);
`

export default function ComponentB({ subheader, title, body, componentItems }) {
  return (
    <Section>
      <div className="spacing">
        <Container>
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
              {body ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${body}`,
                  }}
                />
              ) : null}
            </div>
          </Text>
        </Container>
        <Grid>
          <List>
            {componentItems.map(item => {
              return (
                <Item>
                  <Image alt={item.image.altText || ''} srcSet={item.image.srcSet} src={item.image.src} />
                  <Inner>
                    <h3 className="subheader tan">{item.title}</h3>
                    {item.text ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${item.text}`,
                        }}
                      />
                    ) : null}
                    {item.button ? (
                      <Button
                        dangerouslySetInnerHTML={{
                          __html: `${item.button}`,
                        }}
                      />
                    ) : null}
                  </Inner>
                </Item>
              )
            })}
          </List>
          <Bg />
        </Grid>
      </div>
    </Section>
  )
}
