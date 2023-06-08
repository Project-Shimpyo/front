import styled from 'styled-components';
import SideContainer from './SideContainer';
import DetailSideBox from './sideBox/SideBox';
import BottomContainer from './BottomContainer';

export default function DetailMainContainer() {
  return (
    <>
      <Main>
        <SideContainer />
        <DetailSideBox />
      </Main>
      <BottomContainer />
    </>
  );
}

const Main = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-top: 48px;
  @media screen and (max-width: 900px){
    flex-direction: column;
  };
`;
