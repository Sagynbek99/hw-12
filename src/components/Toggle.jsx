import React, { useContext } from "react";
import styled from "styled-components";
import SwitchButton from "./SwitchButton";
import HeaderTwo from "./HeaderTwo";

function Toggle() {
  const { setIsActive, isActive } = useContext(SwitchButton);
  const handlerClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div>
      <HeaderTwo />
      <ToggleButton onClick={handlerClick} isActive={isActive} />
    </div>
  );
}

export default Toggle;

const ToggleButton = styled.div`
  width: 90px;
  height: 40px;
  margin: 10px 0;
  border-radius: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 45px;
  background-color: ${(isActive) =>
    isActive.isActive === true ? "green" : "blue"};
  transition: background-color 500ms linear;

  &:before {
    content: "${(isActive) => (isActive.isActive === true ? "" : "")}";
    width: 35px;
    height: 35px;
    background-color: white;
    border-radius: 50%;
    margin: 0 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${(isActive) => (isActive.isActive === true ? "50px" : "0")};
  }
`;
