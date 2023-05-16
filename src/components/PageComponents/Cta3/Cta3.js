import React from "react"
import { Container, Section } from "components/layoutComponents"
import styled from "styled-components"
import { ButtonSecondaryLight } from "components/buttons"

const Wrapper = styled.div`
  background: var(--clr-accent);
  color: var(--txt-light);
`

const Text = styled.div`
  max-width: 90ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

export default function Cta3({ title, description }) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Text className="spacing">
            <h2 className="title">your outdoor oasis is just a click away</h2>
            <ButtonSecondaryLight href="/contact">
              get started &#8594;
            </ButtonSecondaryLight>
          </Text>
        </Container>
      </Section>
    </Wrapper>
  )
}
