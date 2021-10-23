import React, { Component } from 'react'

import './assets/css/App.css';
import { GameBoard, Player, Tree, Water } from './components/styles/main';

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            randomBlocks: []
        }
    }

    componentDidMount(){
        
        
    }

    renderBlocks = () => {
        let numBlocks = 10
        
        let randomBoard = [];
        for(let i = 0; i < numBlocks; i++){
            let block = Math.floor(Math.random() * 3)
            console.log("block: " + block)
            if(block === 0){
                console.log("here?: ")
                randomBoard.push( 
                    <Water
                        key={i}
                        bgColor="blue"
                        height="100px"
                        width="100px"
                        draggable={true}
                        topPosition={`${Math.floor(Math.random() * 1000)}px`}
                        rightPosition={`${Math.floor(Math.random() * 1000)}px`}
                    />
                )
            } else if(block === 1){
                randomBoard.push( 
                    <Tree
                        key={i}
                        bgColor="forestgreen"
                        height="100px"
                        width="100px"
                        draggable={true}
                        topPosition={`${Math.floor(Math.random() * 1000)}px`}
                        rightPosition={`${Math.floor(Math.random() * 1000)}px`}
                    />
                )
            } else if(block === 2){
                randomBoard.push( 
                    <Player
                        key={i}
                        bgColor="red"
                        height="100px"
                        width="100px"
                        draggable={true}
                        topPosition={`${Math.floor(Math.random() * 1000)}px`}
                        rightPosition={`${Math.floor(Math.random() * 1000)}px`}
                    />
                )
            } else {
                console.error("This shouldnt be happening when generating board.")
            }
        }
        return (
            <>
                {randomBoard}
            </>
        )
    }

    
    render() {

            return (
                    <div>
                        <GameBoard 
                            bgColor="black"
                            height="1000px"
                            width="1000px"
                        >
                            {this.renderBlocks()}
                        </GameBoard>
                    </div>
            )
    }
}