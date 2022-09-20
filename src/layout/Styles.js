import styled from 'styled-components';
import background from './../assets/hands-typing-code-on-laptop.jpg'
import emplbg from './../assets/Seven-Steps-to-Employee-Retention-.jpg'
import {Link} from 'react-router-dom';

export const colors = {
    primary: "#fff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626",
    green: "#008000"
}

//background
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${emplbg});
    background-size: cover;
    background-attachment: fixed;
`;

export const Box = styled.div`

  margin-left: 230px;
  background: white;
  position: absolute;
  padding-bottom: -100px;
  bottom: 0;

`;

export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    margin-top: 50px;
    text-align: center;
    color: ${(props) => props.color ? props.color:colors.primary};
    padding: 5px;
    font-family: 'MontserratAlternates-Italic';
`;

//SubHeading
export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color:colors.primary};
    padding: 5px;
    font-family: 'MontserratAlternates-Italic';
`;

export const StyledHosted = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color:colors.primary};
    margin-top: 100px;
    padding: 5px;
    font-family: 'MontserratAlternates-Italic';
`;

//Copyright
export const CopyrightText = styled.p`
    padding: 5px;
    margin-top: 25px;
    text-align: center;
    color: ${colors.light1};
`;

//Button Style
export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

//Logo
export const Avatar = styled.div`
    width: 500px;
    height: 400px;
    border-radius: 300px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`;

//Buttons
export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.light1};
    border-radius: 25px;
    color: ${colors.light1};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    &:hover{
        background-color: ${colors.light1};
        color: ${colors.light1}
        cursor: pointer;
    }
`;

//TextLink
export const TextLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.color ? props.color:colors.light1};
    transition: ease-in-out 0.3s;
    &:hover{
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
        color: ${colors.red}
    }
`;