import React from "react"
import styled from "styled-components"
import { AnchorInline, ButtonInline } from "components/buttons"
import ServiceForm from "components/forms/serviceForm"
import { Container, Section } from "components/layoutComponents"
import Link from "next/link"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 4em;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Aside = styled.div`
  grid-column: 1 / span 1;

  .service-form {
    @media screen and (max-width: 48em) {
      display: none;
    }
  }
`

const Navigation = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;

  ul {
    list-style-type: none;
    margin: var(--spacer) 0 0 0;
    padding: 0;
    text-transform: capitalize;

    & > * + * {
      margin-top: 0.2em;
    }
  }
`

const Content = styled.div`
  grid-column: 2 / -1;
  @media screen and (max-width: 48em) {
    grid-row: 1 / span 1;
  }
`

const Img = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`

const ServiceAreas = styled.div`
  padding: 2em;
  border: 1px solid var(--txt-dark-secondary);
  border-radius: var(--br);

  a {
    color: var(--clr-accent);
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: var(--clr-accent);
`

export default function ServiceArea({ title, content1, content2 }) {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Aside className="spacing">
            <Navigation className="spacing">
              <h3 className="caps accent title bold">
                Landscaping <br /> Services
              </h3>
              <div>
              <ul>
                        <li>
                            <Link className="subheader" href="/residential-services/hardscaping">
                          hardscaping
                        </Link>
                        </li>
                      <li>
                        <StyledLink href="/residential-services/landscape-construction/patio-surfaces">
                          paving stones
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink href="/residential-services/landscape-construction/retaining-walls">
                          retaining walls
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink href="/residential-services/outdoor-living/garden-walls">
                          garden walls
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink href="/residential-services/hardscaping/garden-bed-edging">
                          garden bed edging
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink href="/concrete-curbing">
                          concrete curbing
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink href="/staircases-stepping-stones">
                          stairs and stepping stones
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink href="/residential-services/landscape-construction/seating">
                          seat walls and pillars
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink href="/residential-services/concrete-installations">
                          concrete installation
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink href="/residential-services/hardscaping/water-management">
                          water management
                        </StyledLink>
                      </li>
                    </ul>

                    {/* <ul>
                      <h3 className="subheader">
                        <Link to="/residential-services/softscaping">
                          softscaping
                        </Link>
                      </h3>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/artificial-turf">
                          artificial turf
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/irrigation-landscape-lighting">
                          irrigation installation
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/sod-installation">
                          sod
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/tree-shrub-planting">
                          shrub and tree planting
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/mulches-decorative-rock">
                          mulch and decorative rock
                        </StyledLink>
                      </li>
                    </ul>

                    <ul>
                      <h3 className="subheader">
                        <Link to="/residential-services/outdoor-living">
                          outdoor living
                        </Link>
                      </h3>
                      <li>
                        <StyledLink to="/decks-calgary">
                          decks
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/gazebos-pergolas">
                          pergolas
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/landscape-lighting-services-calgary">
                          landscape lighting
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/landscape-design">
                          landscape design
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/water-features">
                          water features
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/fire-pits-fire-places">
                          fire pits and fire places
                        </StyledLink>
                      </li>

                      <li>
                        <StyledLink to="/fence-contractor-in-calgary">
                          fences
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/privacy-screens">
                          privacy screens
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/railings">
                          deck railings
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/landscape-construction/outdoor-kitchens">
                          outdoor kitchens
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/outdoor-living/outdoor-furniture">
                          outdoor furniture
                        </StyledLink>
                      </li>
                    </ul> */}
              </div>
            </Navigation>
            <div className="service-form">
              <ServiceForm />
            </div>
          </Aside>
          <Content className="spacing">
            <div>
              <p className="caps dark bold">
                EXPERIENCED • PROFESSIONAL • COMPLETE SATISFACTION
              </p>
              <h1 className="title dark bold italics">{title}</h1>
            </div>
            <div>
              <article
                dangerouslySetInnerHTML={{
                  __html: `${content1}`,
                }}
              />
            </div>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}
