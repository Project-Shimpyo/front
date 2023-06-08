import styled from "styled-components"
import BookingSideBox from "./sideBox/BookingSideBox"
import BookingSideContainer from "./BookingSideContainer"

export default function BookingContainer(){
  return(
    <Container>
      <BookingTitle>예약 요청</BookingTitle>
      <BookingMain>
        <BookingSideContainer />
        <BookingSideBox />
      </BookingMain>
    </Container>
  )
}

const Container = styled.div`
  margin : 0 auto;
  max-width: 1120px;
  height: 420px;
`

const BookingMain = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`

const BookingTitle = styled.div`
  padding-top: 64px;
  padding-bottom: 32px;
  font-size: 32px;
  font-weight: 700;
`