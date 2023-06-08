import styled from "styled-components"

export default function BookingSideContainer(){
  return(
    <>
      <Title>예약 정보</Title>
      <BookingInfoTitle>날짜</BookingInfoTitle>
      <BookingInfoDetail>6월 8일 ~ 6월 13일</BookingInfoDetail>
      <BookingInfoTitle>게스트</BookingInfoTitle>
      <BookingInfoDetail>게스트 1명</BookingInfoDetail>
    </>
  )
}

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  padding-bottom: 24px;
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
  
