Conway's game of life

Additional Features:
-Speed Control
-Randomize Layout
-Step through iterations individually

Note on speed control:
It is not 100% accurate, but it provides a good baseline for the speed at which it iterates

Stretch Goal: 
Deploy website to a hosting platform

Rules of Conway's game of Life:
1: any live cell with <2 neighbors dies
2. any live cell with 2-3 live neighbors lives to the next generation
3. any live cell with >3 neighbors dies
4. any dead cell with 3 live neighbors comes to life

What are cellular automata:
A cellular automaton is a program that functions on a 2d grid controlled by the data it is initially given. It has a set of rules to describe how the grid, as well as individual cells' neighbors, change over time. Throughout each iteration of the simulation, the grid is examined, and then creates a new grid consisting of the old state, which then becomes the current state of the simulation. Each new grid is a generation.

Turing Completeness:
A computing system is Turing Complete if it can perform a general purpose of computation. The seemingly infinite grid of the Grame of Life allows a programmer to use constructs in the Game of Life to build any other type of logical "circuitry" and memory.
Anything that can be computed can be computed in the game of life if there is a large enough grid and long enough span of generations.
