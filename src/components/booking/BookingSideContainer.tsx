import styled from "styled-components"

export default function BookingSideContainer(){
  return(
    <Container>
      <Title borderTop={false}>예약 정보</Title>
      <BookingInfoTitle>날짜</BookingInfoTitle>
      <BookingInfoDetail>6월 8일 ~ 6월 13일</BookingInfoDetail>
      <BookingInfoTitle>게스트</BookingInfoTitle>
      <BookingInfoDetail>게스트 1명</BookingInfoDetail>
      <Title borderTop={true}>필수 입력 정보</Title>
      <div>붐바야</div>
    </Container>
  )
}

const Container = styled.div`
  width: 60%;
`

interface ITitle {
  borderTop?: boolean
}

const Title = styled.div<ITitle>`
  font-size: 22px;
  font-weight: 700;
  padding-bottom: 24px;
  padding-top: 32px;
  border-top: ${p=> p.borderTop ? '1px solid rgb(221,221,221)' : 'none'};
`

const BookingInfoTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`

const BookingInfoDetail = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 24px;
`
