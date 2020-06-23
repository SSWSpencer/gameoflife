import React from "react";
import '../styles/Home.css';
import logo from "../images/mainlogo.jpg"
import {Link} from "react-router-dom"

function HomePage() {
    return(
        <div>
            <div className="TitleWrapper">
                <div className="Explanation">
                    <h2>What is Conway's Game of Life?</h2>
                    <p>Conway's Game of Life is a 0-player simulation, in which cells are either spawned or die in relation to their neighbors.</p>
                    <p>A player gives it initial input, through either cell selection or a randomly-generated preset, and no further input is required.</p>
                    <p>The simulation will continue until either all the cells have died off, or the cells have reached a state of equilibrium in which the number of cells stays constant.</p>
                    <Link to="/game-of-life"><div className="GoButton">
                        <p>Run the Simulation</p>
                    </div></Link>
                </div>
                <div className="LogoWrapper">
                    <h1>Conway's <br/> Game of Life</h1>
                    <img src={logo} />
                </div>
            </div>
            <div className="InfoWrapperTop">
                <div id="Rules" className="InfoBox">
                    <h2>Rules of the Game</h2>
                    <p>1. If a cell has fewer than two live neighbors, it will die (as if by underpopulation)</p>
                    <p>2. If a cell has either two or three live neighbors, it will survive onto the next generation</p>
                    <p>3. If a cell has three or more live neighbors, it will die (as if by overpopulation)</p>
                    <p>4. If a dead cell has three live neighbors, it becomes a live cell (as if by reproduction)</p>
                </div>
                <div id="HowToPlay" className="InfoBox">
                    <h2>How to Play</h2>
                    <p>This is a very simple rendition of Conway's Game of Life</p>
                    <p>In its simplest form, you have the option to just load a random initial cell structure, and watch the simulation play out.</p>
                    <p>Alternatively, you have the option to click on the board, and create your own initial cell structure. Clicking any position on the board will create a cell in its live state. Clicking a cell that is already alive will remove it from the board.</p>
                    <p>You also have the option to change the speed at which the simulation executes. The number of generations per second is limited to the performance of your computer's processor, and will not always be entirely accurate. </p>
                    <p>If running the game automatically is still too much for your computer to handle, you also have the option to step through generations individually</p>
                    <p id="HTPnote">Note: While the simulation is running, the buttons are disabled. In order to clear the board, set a random cell structure, or step to the next generation, the simulation must be stopped</p>
                </div>
            </div>
            <div className="InfoWrapperBottom">
                <div id="Patterns" className="InfoBox">
                    <h2>Patterns</h2>
                    <p>Throughout the simulation, it is possible that some named-patterns will be generated</p>
                    <p>These patterns include Still Lifes, Oscillators, and Spaceships</p>
                    <p>Still Lifes are patterns that stay constant, and will not change from one generation to the next. They include shapes that resembles <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/66px-Game_of_life_block_with_border.svg.png">blocks</a>, <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/98px-Game_of_life_beehive.svg.png">bee-hives</a>, <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game_of_life_loaf.svg/98px-Game_of_life_loaf.svg.png">loafs</a>, <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Game_of_life_boat.svg/82px-Game_of_life_boat.svg.png">boats</a>, and <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/82px-Game_of_life_flower.svg.png">tubs</a>.</p>
                    <p>Oscillators are patterns that will return to their initial state after a specific number of generations. They include shapes that resemble <a href="https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif">blinkers</a>, <a href="https://upload.wikimedia.org/wikipedia/commons/1/12/Game_of_life_toad.gif">toads</a>, <a href="https://upload.wikimedia.org/wikipedia/commons/1/1c/Game_of_life_beacon.gif">beacons</a>, <a href="https://upload.wikimedia.org/wikipedia/commons/0/07/Game_of_life_pulsar.gif">pulsars</a>, and <a href="https://upload.wikimedia.org/wikipedia/commons/f/fb/I-Column.gif">penta-decathlons</a>.</p>
                    <p>Spaceships are patterns that will gradually move themselves across the board. They include shapes that resemble <a href="https://upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif">gliders</a>, <a href="https://upload.wikimedia.org/wikipedia/commons/3/37/Game_of_life_animated_LWSS.gif">light-weight spaceships</a>, <a href="https://upload.wikimedia.org/wikipedia/commons/4/4e/Animated_Mwss.gif">middle-weight spaceships</a>, and <a href="https://upload.wikimedia.org/wikipedia/commons/4/4f/Animated_Hwss.gif">heavy-weight spaceships</a>.</p>
                </div>
                <div id="JohnConway" className="InfoBox">
                    <h2>John Conway</h2>
                    <p>John Horton Conway was an English mathematician. He was active in many mathetmatical theories, including the theory of finite groups, knot theory, number theory, combinatorial game thory, and coding theory.</p>
                    <p>He was born on December 26, 1937, and became interesting in mathematics at an early age. After getting a Bachelor of Arts degree in 1959, he began to start his research in number theory, and was specifically interested in ininite ordinals. After 5 more years of study, he was awarded his doctorate degree in 1964.</p>
                    <p>His major areas of research throughout his life included combinatorial game theory, geometry, geometric topology, group theory, number theory, algebra, analysis, algorithmics, and theoretical physics.</p>
                    <p>He received the Berwick Prize in 1971, he was elected a Fellow of the Royal Society in 1981, was the first to receive the Pólya Prize in 1987, won the Nemmers Prize in Mathematics in 1998, and received the Leroy P Steele Prize in 2001.</p>
                    <p>On April 8, 2020, Conway developed symptoms of COVID-19. Three days later, due to complications with symptoms of the illness, John Conway passed away on April 11, at the age of 82.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage