import styled from "styled-components"
import BookingSideBox from "./sideBox/BookingSideBox"
import BookingSideContainer from "./BookingSideContainer"

export default function BookingContainer(){
  return(
    <Container>
      <BookingTitle>예약 요청</BookingTitle>
      <BookingSideContainer />
      <BookingSideBox />
    </Container>
  )
}

const Container = styled.div`
  margin : 0 auto;
  max-width: 1120px;

`
const BookingTitle = styled.div`
  padding-top: 64px;
  padding-bottom: 48px;
  font-size: 32px;
  font-weight: 700;
`