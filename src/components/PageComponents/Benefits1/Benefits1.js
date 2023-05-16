import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "components/buttons"
import { Container, GridThree, Section } from "components/layoutComponents"

// const StyledImg = styled(GatsbyImage)`
//   max-height: 100px;
//   max-width: 100px;
// `

const BenefitItem = styled.div`
  border: 2px solid var(--clr-tan);
  padding: 2em;
  border-radius: var(--br);
`

export default function Benefits1({ subheader, title, benefitContent }) {
        let width = '100px';
  let height = '100px';
  return (
    <Section>
      <Container className="spacing-md">
        <div className="center">
          <p className="subheader accent">{subheader}</p>
          <h2 className="title">{title}</h2>
        </div>
        <GridThree>
          {benefitContent.map(benefit => {
            return (
              <BenefitItem className="spacing center">
                <Image alt={benefit.image.altText || ''} srcSet={benefit.image.srcSet} src={benefit.image.src} width={width} height={height} />
                <h3 className="subheader caps tan">{benefit.title}</h3>
                {benefit.description ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${benefit.description}`,
                    }}
                  />
                ) : null}
              </BenefitItem>
            )
          })}
        </GridThree>
        <center>
          <ButtonPrimary href="/contact">get quote</ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
