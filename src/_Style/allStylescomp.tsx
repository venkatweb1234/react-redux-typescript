import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHyperLink = styled.a`
  font-size: 1em;
  text-align: center;
  color: #00828a;
  font-family: "Markpro-bold";
`;

export const StyledHeader1 = styled.h1``;
export const StyledHeader2 = styled.h2`
  font-family: "MarkPro-Heavy";
  font-weight: 800;
  text-align: center;
  color: #000000;
  font-style: normal;
  font-size: 4em;
`;
export const StyledHeader3 = styled.h3`
  font-family: "MarkPro-Heavy";
  font-weight: 800;
  text-align: center;
  color: ${({ color }) => handleColorType(color)};
  font-style: normal;
  font-size: 1.5em;
`;
export const StyledHeader4 = styled.h4``;
export const StyledHeader5 = styled.h5``;

// const colorv: string;
// const fntSize: string;
const handleColorType = (color: any) => {
  switch (color) {
    case "primary":
      return "#000000";
    case "danger":
      return "#f56342";
    default:
      return "#ffffff";
  }
};

const handlefntszType = (fnt: any) => {
  switch (fnt) {
    case "primary":
      return "1.2em";
    case "danger":
      return "#f56342";
    default:
      return "2em";
  }
};
export const StyledHeader6 = styled.h6`
  font-family: Markpro-bold;
  font-weight: 400;
  text-align: center;
  color: ${({ color }) => handleColorType(color)};
  font-style: normal;
  font-size: ${({ color }) => handlefntszType(color)};

  margin-top: 0.5em;
`;
export const StyledModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 50rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  // animation-name: animatetop;
  // animation-duration: 0.5s;
  position: relative;
  top: 10em;
`;

export const StyledModalHeader = styled.div`
  padding: 2px 16px;
  background-color: teal;
  color: white;
  height: 77px;
`;

export const StyledBtnClose = styled.span`
  color: #888;
  float: right;
  font-size: 2.8rem;
  font-weight: bold;
  &:hover {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
  }
  &:focus {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const StyledSpan = styled.span``;
export const StyledModal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledModalBody = styled.div`
  padding: 2px 16px;
`;

export const StyledModalFooter = styled.div`
  padding: 2px 16px;
  background-color: teal;
  color: white;
`;

export const StyledParagraph = styled.p`
  font-family:'Markpro',
  font-size:14px;
`;

export const StyledParagraphCSP = styled.p`
  background-color: #00a3ad;
  font-family: MarkPro;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: #ffffff;
`;

export const StyledTable = styled.table`
  text-align: center;
  /* padding: 6px 10px; */
  /* margin-top: -5em; */
  line-height: 1.5em;
  /* border: 1px solid #fff !important; */
  position: relative;
  top: -1em;
`;

export const THead = styled.thead`
  // custom css goes here
`;

export const TFoot = styled.tfoot`
  // custom css goes here
`;

export const TBody = styled.tbody`
  // custom css goes here
`;

export const TR = styled.tr`
  // custom css goes here
`;

export const TH = styled.th`
  background-color: #006280;
  font-family: MarkPro-Bold, Mark Pro Bold, Mark Pro;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  color: #fff;
  width: 20%;
`;

export const TD = styled.td`
  text-align: center;
  /* padding: 6px 10px; */
  /* margin-top: -5em; */
  line-height: 1.5em;
  /* border: 1px solid #fff !important; */
  position: relative;
  top: -1em;
`;
const handleWidthType = (color: any) => {
  switch (color) {
    case "$width":
      return "70%";
    case "$width1":
      return "100%";
    default:
      return "43%";
  }
};

export const IMG = styled.img`
  width: ${({ color }) => handleWidthType(color)};;
`;

export const Button = styled.button`
  width: 100% !important;
  color: #212529 !important;
  background-color: #ffc107 !important;
  border-color: #ffc107 !important;
  position: relative;
  left: 0.1em;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const StyledNav = styled.nav``;

// export const StyledUL = styled.ul`
//   display: flex;
//   list-style: none;
// `;

// export const StyledLI = styled.li`
//   border: 1px solid #d1d7da;
//   font-family: MarkPro-Bold, Mark Pro Bold, Mark Pro;
//   font-weight: 700;
//   font-style: normal;
//   font-size: 14px;
//   color: #343a40;
//   line-height: 20px;
//   width: 314px;
//   height: 51px;
//   background-color: #fff;
// `;
// export const StyledLink = styled(Link)`
//   position: relative;
//   top: 1em;
//   color: #000000;
//   text-decoration: none;
// `;

export const NavUnlisted = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;

  a {
    position: relative;
    top: 1em;
    color: #000000;
    text-decoration: none;
    &:hover{
      border-top: 3px solid #ff6e7e;
      border-bottom: 0;
    }
  }
 

  li {
    border: 1px solid #d1d7da;
    font-family: MarkPro-Bold, Mark Pro Bold, Mark Pro;
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    color: #343a40;
    line-height: 20px;
    width: 314px;
    height: 51px;
    background-color: #fff;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
  }

  .current {
    li {
      border-top: 4px solid #ff6e7e;
      border-bottom: 0;
    }
  }
`;
