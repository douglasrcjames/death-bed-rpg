import styled from "styled-components"

export const GameBoard = styled.div`
    position: relative;
    z-index: 1;
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bgColor};
`

export const Tree = styled.div`
    z-index: 2;
    position: absolute;
    border: 1px solid white;
    top: ${props => props.topPosition};
    right: ${props => props.rightPosition};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bgColor};
`

export const Water = styled.div`
    z-index: 2;
    position: absolute;
    border: 1px solid white;
    top: ${props => props.topPosition};
    right: ${props => props.rightPosition};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bgColor};
`

export const Player = styled.div`
    z-index: 2;
    position: absolute;
    border: 1px solid white;
    top: ${props => props.topPosition};
    right: ${props => props.rightPosition};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bgColor};
`