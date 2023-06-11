import styled from 'styled-components';
import { FiThumbsUp } from 'react-icons/fi';

export default function BookingSideBox() {
  return (
    <SideBox>
      <TopContainer>
        <MainImg src="https://a0.muscache.com/im/pictures/8932fa72-8bc5-4bd4-9f27-2c65ee22c911.jpg?aki_policy=large" />
        <RightContainer>
          <TitleContainer>
            <SmallTitle>텐트</SmallTitle>
            <LocationTitle>바비큐 그릴과 캠프파이어를 즐길 수 있는 밸리 뷰 텐트</LocationTitle>
          </TitleContainer>
          <BottomInfo>
            <FiThumbsUp />
            <Rank>94%</Rank>
            <Comment>(후기 1개)</Comment>
          </BottomInfo>
        </RightContainer>
      </TopContainer>
      <PaymentDetail>요금 세부정보</PaymentDetail>
      <PaymentContainer>
        <div>₩47,372 x 5박</div>
        <div>₩236,860</div>
      </PaymentContainer>
      <PaymentContainer>
        <div style={{ textDecoration: 'underline' }}>쉼표 서비스 수수료</div>
        <div>₩33,439</div>
      </PaymentContainer>
      <PaymentContainer>
        <div style={{ textDecoration: 'underline' }}>세금</div>
        <div>₩28,424</div>
      </PaymentContainer>
      <TotalPriceContainer>
        <div>
          총 합계 <span style={{ textDecoration: 'underline' }}>(KRW)</span>
        </div>
        <div>₩298,723</div>
      </TotalPriceContainer>
    </SideBox>
  );
}

const SideBox = styled.div`
  padding: 24px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  width: 38%;
  position: sticky;
  top: 140px;
  height: 400px;
`;
const MainImg = styled.img`
  width: 124px;
  height: 106px;
  object-fit: cover;
  border-radius: 12px;
`;

const TopContainer = styled.div`
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid rgb(221, 221, 221);
`;

const RightContainer = styled.div`
  padding-left: 12px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;
const TitleContainer = styled.div``;

const SmallTitle = styled.div`
  font-size: 12px;
  color: #717171;
`;

const LocationTitle = styled.div`
  margin-top: 4px;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const BottomInfo = styled.div`
  font-size: 12px;
`;
const Rank = styled.span`
  padding-left: 4px;
`;
const Comment = styled.span`
  color: #717171;
  margin-left: 10px;
`;

const PaymentDetail = styled.div`
  padding: 24px 0;
  font-size: 22px;
  font-weight: 700;
`;

const PaymentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const TotalPriceContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 24px 0;
  border-top: 1px solid rgb(221, 221, 221);
  font-size: 16px;
  font-weight: 700;
`;
