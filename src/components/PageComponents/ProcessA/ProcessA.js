
import React from "react"
import styled from "styled-components"
import { Section, Container, GridAuto } from "components/layoutComponents"
import { ButtonPrimary } from "components/buttons"

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`

export default function ProcessA({ title, processContent, description }) {
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <h2 className="title">{title}</h2>
          {description ? (
            <div
              dangerouslySetInnerHTML={{
                __html: `${description}`,
              }}
            />
          ) : null}
        </Text>
        <GridAuto>
          {processContent.map(item => {
            return (
              <div>
                <h3 className="subheader accent">{item.number}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${item.processDescription}`,
                  }}
                />
              </div>
            )
          })}
        </GridAuto>
        <center>
          <ButtonPrimary href="/contact">talk to us today</ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
