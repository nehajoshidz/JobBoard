import styled from 'styled-Components';

const Landing=()=>{
    return (
        <Wrapper>
            <h1>This is our Landing Page</h1>
            <h2>This is the first index page of my website called as Landing Page</h2>
            <StylishButton>Click here pleaaaasseeee</StylishButton>
        </Wrapper>
    )
}

const StylishButton =styled.button`
background-color: white;
color: black;
`;

const Wrapper = styled.div`
background-color: green;
color: white;
`;

export default Landing;