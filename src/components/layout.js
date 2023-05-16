import React from "react"
import styled from "styled-components"
import HeaderBasic from "./headers/headerBasic"

const Wrapper = styled.div`
  position: relative;
`

export default function Layout({ children }) {
  
  return (
    <Wrapper>
        {/* <HeaderBasic /> */}
      <main>{children}</main>
      {/* <RecentPosts />
      <FinanceBanner />
      <ContactBanner />
      <Footer />
      <GoogleBadge /> */}
    </Wrapper>
  )
}
