import React, { useContext } from 'react'
import styled from 'styled-components';
import SwitchButton from './SwitchButton'

function HeaderTwo() {
    const {isActive} = useContext(SwitchButton)
    const background = isActive=== true ? 'red': 'black'
  return (
    <div>
      <HeaderBackground style={{ background: background }}></HeaderBackground>
    </div>
  );
}

export default HeaderTwo

const HeaderBackground = styled.div`
    width: 100%;
    height: 200px;
    
`