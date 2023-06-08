import { BsDot } from "react-icons/bs"
import { FcOvertime } from "react-icons/fc";

import styled from "styled-components"

export default function BookingSideContainer(){
  return(
    <Container>
      <Title borderTop={false}>예약 정보</Title>
      <BookingInfoTitle>날짜</BookingInfoTitle>
      <BookingInfoDetail>6월 8일 ~ 6월 13일</BookingInfoDetail>
      <BookingInfoTitle>게스트</BookingInfoTitle>
      <BookingInfoDetail>게스트 1명</BookingInfoDetail>
      <Title borderTop={true}>환불 정책</Title>
      <Detail>
        6월 11일 오후 12:00 전에 취소하면 부분 환불을 받으실 수 있습니다. 그 이후에는 취소 시점에 따라 환불액이 결정됩니다
      </Detail>
      <Title borderTop={true}>기본 규칙</Title>
      <Detail>
        훌륭한 게스트가 되기 위한 몇 가지 간단한 규칙을 지켜주실 것을 모든 게스트에게 당부드리고 있습니다.
        <BasicRule>
          <li><BsDot /> 숙소 이용규칙을 준수하세요.</li>
          <li><BsDot /> 호스트의 집도 자신의 집처럼 아껴주세요.</li>
        </BasicRule>
      </Detail>
      <NoticeBox>
        <div style={{fontSize: "50px"}}><FcOvertime /></div>
        <NoticeTitle>
          <div style={{fontWeight: "700"}}>호스트가 24시간 이내 예약 요청을 수락하기 전까지는 예약이 아직 확정된 것이 아닙니다.</div>
          <div>예약 확정 전까지는 요금이 청구되지 않습니다.</div>
        </NoticeTitle>
      </NoticeBox>
      <FinalNotice>
        아래 버튼을 선택하면 
        <span style={{textDecoration:"underline", fontWeight:"600"}}>호스트가 설정한 숙소 이용규칙, 게스트에게 적용되는 기본 규칙, 에어비앤비 재예약 및 환불 정책</span>
        에 동의하며, 피해에 대한 책임이 본인에게 있을 경우 에어비앤비가 
        <span style={{textDecoration:"underline", fontWeight:"600"}}>결제 수단으로 청구</span>의 조치를 취할 수 있다는 사실에 동의하는 것입니다. 
        호스트가 예약 요청을 수락하면 표시된 총액이 결제되는 데 동의합니다.
      </FinalNotice>
      <ConfirmBtn>예약 요청</ConfirmBtn>
    </Container>
  )
}

const Container = styled.div`
  width: 50%;
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

const Detail = styled.div`
  font-size: 16px;
  padding-bottom: 40px;
`
const BasicRule = styled.ul`
  margin-top: 16px;
  li{
    margin: 10px 0;
  }
`
const NoticeBox = styled.div`
  display: flex;
  border-top: 1px solid rgb(221,221,221);
  border-bottom: 1px solid rgb(221,221,221);
  padding: 32px 0 24px;
`
const NoticeTitle = styled.div`
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`

const FinalNotice = styled.div`
  padding-top: 40px;
  font-size: 12px;
`

const ConfirmBtn = styled.div`
  margin : 24px 0 50px;
  background-color:#E61E4D;
  color:white;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 700;
  padding: 18px 18px;
  width: 100px;
  border-radius: 20px;
  cursor: pointer;
`