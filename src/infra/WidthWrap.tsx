import { ReactNode } from "react";
import styled from "styled-components/macro";

const FullWidthDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
function WidthWrap({children}:{children: ReactNode}){
    return(
        <FullWidthDiv>
            {children}
        </FullWidthDiv>
    )
}

export default WidthWrap;