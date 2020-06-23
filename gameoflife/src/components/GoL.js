import React from 'react';
import '../styles/GoL.css';
import logo from "../images/logowithtext.png";
import {Link} from "react-router-dom";


const cellSize = 10;
const boardWidth = 800;
const boardHeight = 600;


class Cell extends React.Component {
    render() {
        const x = this.props.x;
        const y = this.props.y;
        return (
            <div className="Cell" style={{
                left: `${cellSize * x + 1}px`,
                top: `${cellSize * y + 1}px`,
                width: `${cellSize - 1}px`,
                height: `${cellSize - 1}px`,
            }} />
        );
    }
}


class GoL extends React.Component {
    constructor() {
        super();
        this.rows = boardHeight / cellSize;
        this.cols = boardWidth / cellSize;
        this.board = this.clearBoard();
    }

    state = {
        cells: [],
        isRunning: false,
        simSpeed: 100,
        timesPerSecond: 10,
        generation: 0,
    }

    clearBoard() {
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }
        return board;
    }

    findPosition() {
        const rect = this.boardRef.getBoundingClientRect();
        const doc = document.documentElement;

        return {
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop,
        };
    }

    createCells() {
        let cells = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.board[y][x]) {
                    cells.push({ x, y });
                }
            }
        }

        return cells;
    }

    handleClick = (event) => {
        if(!this.state.isRunning){
            const position = this.findPosition();
            const positionX = event.clientX - position.x;
            const positionY = event.clientY - position.y;
            
            const x = Math.floor(positionX / cellSize);
            const y = Math.floor(positionY / cellSize);

            if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
                this.board[y][x] = !this.board[y][x];
            }

            this.setState({ cells: this.createCells() });
        }
    }

    startGame = () => {
        this.setState({ isRunning: true });
        this.runIteration();
    }

    stopGame = () => {
        this.setState({ isRunning: false });
        if (this.timeoutHandler) {
            window.clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    }

    runOnce = () =>{
        if(!this.state.isRunning){
            this.setState({ isRunning: true });
            this.runIteration();
            this.setState({ isRunning: false });
            if (this.timeoutHandler) {
                window.clearTimeout(this.timeoutHandler);
                this.timeoutHandler = null;
            }
        }
    }

    runIteration() {
        let newBoard = this.clearBoard();
        this.setState({generation: this.state.generation + 1})

        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let neighbors = this.calculateNeighbors(this.board, x, y);
                if (this.board[y][x]) {
                    if (neighbors === 2 || neighbors === 3) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                } else {
                    if (!this.board[y][x] && neighbors === 3) {
                        newBoard[y][x] = true;
                    }
                }
            }
        }

        this.board = newBoard;
        this.setState({ cells: this.createCells() });

        this.timeoutHandler = window.setTimeout(() => {
            this.runIteration();
        }, this.state.simSpeed);
    }

    calculateNeighbors(board, x, y) {
        let neighbors = 0;
        const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i];
            let y1 = y + dir[0];
            let x1 = x + dir[1];

            if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
                neighbors++;
            }
        }

        return neighbors;
    }

    changeSimSpeed = (event) => {
        if(event.target.value > 0){
            this.setState({ timesPerSecond: event.target.value });
            this.setState({simSpeed: 1000 / this.state.timesPerSecond});
        }
    }

    handleClear = () => {
        if(!this.state.isRunning){
            this.board = this.clearBoard();
            this.setState({ cells: this.createCells() });
            this.setState({generation: 0})
        }
    }

    randomizeBoard = () => {
        if(!this.state.isRunning){
            for (let y = 0; y < this.rows; y++) {
                for (let x = 0; x < this.cols; x++) {
                    this.board[y][x] = (Math.random() >= 0.5);
                }
            }
    
            this.setState({ cells: this.createCells() });
            this.setState({generation: 0})
        }
    }

    render() {
        const { cells, simSpeed, isRunning } = this.state;
        return (
            <div>
                <div className="genPanel">
                    <h2>Generation {this.state.generation}</h2>
                </div>
                <div className="Board"
                    style={{ width: boardWidth, height: boardHeight, backgroundSize: `${cellSize}px ${cellSize}px`}}
                    onClick={this.handleClick}
                    ref={(n) => { this.boardRef = n; }}>

                    {cells.map(cell => (
                        <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/>
                    ))}
                </div>
                <div className="buttonLogoWrapper">
                    <div className="buttonPanel">
                        <p>Generations Per Second: <input type="number" value={this.state.timesPerSecond} onChange={this.changeSimSpeed} /></p>
                        {isRunning ?
                            <button className="button" onClick={this.stopGame}>Stop</button> :
                            <button className="button" onClick={this.startGame}>Start</button>
                        }
                        <button className="button" onClick={this.randomizeBoard}>Random</button>
                        <button className="button" onClick={this.handleClear}>Clear</button>
                        <button className="button" onClick={this.runOnce}>One Iteration</button>
                    </div>
                    <div className="buttonPanelImg">
                        <Link to="/"><img src={logo} /></Link>  
                    </div>
                </div>
            </div>
        );
    }
}


export default GoL;