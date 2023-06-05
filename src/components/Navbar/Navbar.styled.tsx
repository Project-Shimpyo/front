import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

import { Divider, IconButton, Menu, MenuItem, TextField } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

export const CustomizedAppBar = styled(AppBar) <{ appBarHeight: string }>`
background-color: #fff;
padding-left : 40px;
padding-right : 40px;
height: ${({ appBarHeight }) => appBarHeight};
position: fixed;
transition: height 0.3s ease;
`

export const CustomizedToolBar = styled(Toolbar) <{ change: boolean }>`
height: 80px;
justify-content: space-between;
`

export const LogoButton = styled(Button)`
border-color: #ffffff;
:hover {
  background-color: #ffffff;
}
`

// export const CustomizedSearchButtonWrapperDiv = styled.div<{ change: boolean }>`
// position:fixed;
// display:flex;
// justify-content:center;
// align-items:${({ change }) => (change ? "flex-end" : "center")};
// top:${({ change }) => (change ? "80px" : "0px")};
// left:0px;
// height: 80px;
// width: 100%;
// transition: 0.3s ease;
// padding-bottom:${({ change }) => (change ? "10px" : "0px")};
// `

export const CustomizedSearchButtonWrapperDiv = styled.div<{ change: boolean }>`
display:flex;
// justify-content:center;
// align-items:${({ change }) => (change ? "flex-end" : "center")};
align-items: flex-end;
height: ${({ change }) => (change ? "240px" : "50px")};
transition: 0.3s ease;
padding-bottom:${({ change }) => (change ? "10px" : "0px")};
`

export const CustomizedWhereVerticalWrapperDiv = styled.div<{ change: boolean }>`
display:flex;
flex-direction: column;
justify-content: flex-end;
`

export const CustomizedWhenVerticalWrapperDiv = styled.div<{ change: boolean }>`
display:flex;
flex-direction: column;
justify-content: flex-end;
`
interface CustomizedAddtionalWhenVerticalWrapperDivProps {
  change: boolean;
}

export const CustomizedAddtionalWhenVerticalWrapperDiv = styled.div<CustomizedAddtionalWhenVerticalWrapperDivProps>`
display:${({ change }) => (change ? "flex" : "none")};
flex-direction: column;
justify-content: flex-end;
`

export const CustomizedGuestVerticalWrapperDiv = styled.div<{ change: boolean }>`
display:flex;
flex-direction: column;
justify-content: flex-end;
`

export const CustomizedSearchButton = styled(Button) <{ change: boolean, activeButton: string }>`
height: ${({ change }) => (change ? "70px" : "50px")};
display: flex;
justify-content: center; 
color: #000000;
// background-color: #ffffff;
background-color: ${({ activeButton }) => (activeButton === "" ? "#ffffff" : "#ebebeb")};
border-radius: 50px;
:hover {
  // background-color: #ffffff;
  background-color:${({ activeButton }) => (activeButton === "" ? "#ffffff" : "#ebebeb")};
}
padding-left: 0px;
padding-right: 10px;
transition: 0.2s ease;
`

export const CustomizedActiveSearchButton = styled(Button)`
color: #000000;
background-color: #ffffff;
border-radius: 50px;
:hover {
  background-color: #ffffff;
}
height: 70px;
`

export const CustomizedSearchInsideButton = styled(Button) <{ change: boolean }>`
color: #000000;
border-radius: 50px;
:hover {
  background-color: #ebebeb;
}
border: 0px;
height: 70px;
`

export const CustomizedAdditionalActiveSearchButton = styled(Button) <{ change: boolean }>`
display:${({ change }) => (change ? "flex" : "none")};
color: #000000;
background-color: #ffffff;
border-radius: 50px;
:hover {
  background-color: #ffffff;
}
height: 70px;
`

export const CustomizedAdditionalSearchInsideButton = styled(Button) <{ change: boolean }>`
display:${({ change }) => (change ? "flex" : "none")};
color: #000000;
border-radius: 50px;
:hover {
  background-color: #ebebeb;
}
border: 0px;
height: 70px;
`

export const CustomizedLoginButton = styled(Button)`
height: 50px;
width: 80px;
color: #000000;
background-color: #ffffff;
border-radius: 50px;
:hover {
  background-color: #ffffff;
}
padding-left: 5px;
padding-right: 5px;
justify-content: space-between;
box-shadow: unset;
`

export const CustomizedDivider = styled(Divider) <{ change: boolean }>`
`

export const CustomizedAdditionalDivider = styled(Divider) <{ change: boolean }>`
display:${({ change }) => (change ? "flex" : "none")};
`

export const CustomizedTypography = styled(Typography)`
`

interface CustomizedChangeTypographyProps {
  change: boolean;
}

export const CustomizedChangeTypography = styled(Typography) <CustomizedChangeTypographyProps>`
display:${({ change }) => (change ? "block" : "none")};
color: #a2a2a2;
font-family: Noto Sans KR;
font-weight: 300;
font-size: 15px;
`

export const CustomizedLogoTypography = styled(Typography)`
color: #00ADB5;
font-family: sunflower;
font-size: 25px;
`

export const CustomizedAvatar = styled(Avatar) <{ change: boolean }>`
background-color: #00ADB5;
height:${({ change }) => (change ? "50px" : "32px")};
width:${({ change }) => (change ? "50px" : "32px")};
`

export const CustomizedSearchIcon = styled(SearchIcon) <{ change: boolean }>`
height:${({ change }) => (change ? "30px" : "20px")};
width:${({ change }) => (change ? "30px" : "20px")};
`
export const CustomizedMenuIcon = styled(MenuIcon)`
color: #717171;
`

export const CustomizedAccountCircleIcon = styled(AccountCircleIcon)`
color: #717171;
`

export const CustomizedTextfield = styled(TextField)<{ change: boolean }>(({ change }) => ({
  '& .MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-input': {
      padding: '0px',
    },
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    fontFamily: "Noto Sans KR",
    fontWeight: 400,
    fontSize: "15px",
  },
  display: change ? 'block' : 'none',
}));

export const CustomizedMenu = styled(Menu)`
margin-top:10px;
`

export const CustomizedGuestCountMenuItem = styled(MenuItem)`
:hover {
  background-color: transparent
}
justify-content: space-between;
`

export const CustomizedCalendarMenuItem = styled(MenuItem)`
:hover {
  background-color: transparent
}
`

export const CustomizedIconButton = styled(IconButton)`
:hover {
  background-color: transparent
}
`