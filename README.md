# Cellular Automata and Conway's "Game of Life"

---

# [Michelle's Game of Life](https://game-of-life.scottmm374.vercel.app)

![Game Of Life](/src/images/demo.gif)

**I was curious what pattern filling in all the edges would render, This was the result. I call it Clock!**

---

Welcome to John Conway's "Game of Life"! This is a computer science
classic from 1970, a program that simulates a _cellular automaton_
(plural _automata_). It has connections to all kinds of different
aspects of computer science and nature.

![example-patterns](https://media.giphy.com/media/4VVZTvTqzRR0BUwNIH/giphy.gif)

# Visualizing the "Game of Life"

The main entry point of your application should house the visualization
of this cellular automaton. Include necessary components, such as:

- [x] Grid to display cells.

- [x] Cell objects or components that, at a minimum, should have:

- Properties
  - [x] current state: (alive, dead), (black, white)
  - [x] Clickable/Tappable: -[x] can be clicked to allow user to setup initial cell configuration
    - [x] should NOT be clickable while simulation is running
- Behaviors
- [x] Toggle state functionality: switch between alive & dead either
      because user manually toggled cell before starting simulation or
      simulation is running and rules of life caused cell to change
      state
- [x] An appropriate data structure to hold a grid of cells that is at least
      25x25. Go as big as you want.
- [x] Text to display current generation # being displayed
  - [x] Utilize a timeout function to build the next generation of cells &
        update the display at the chosen time interval
- [x] Button(s) that start & stop the animation
- [x] Button to clear the grid

Write an algorithm that:

- Implements the following basic steps:
  - For each cell in the current generation's grid:
    - [x] Examine state of all eight neighbors (it's up to you whether you
          want cells to wrap around the grid and consider cells on the
          other side or not)
    - [x] Apply rules of life to determine if this cell will change states
    - [x] When main loop completes:
    - [x] Swap current and next grids
    - [x] Repeat until simulation stopped
- [x] Breaks down above steps into appropriate sub-tasks implemented with
      helper functions to improve readability
- [x] Uses double buffering to update grid with next generation.
- [x] Does something well-documented with the edge of the grid. (e.g. wrap
      around to the far side--most fun!--or assumes all edge cells are
      permanently dead.)

# Custom Features I implemented

- [x] Create a few sample cell configurations that users can load and run

- [x] Add an option that creates a random cell configuration that users can run

- [x] Allow users to specify the speed of the simulation
- [x] Add additional cell properties, I added Color.

# Additional Features I would like to add in the future.

- Step through frame feature
- Save pattern feature
- Adjust Grid/Board size
- Choose Color Theme

## Stretch Goals

- Implement 2+ additional custom features, above
- [x] Deploy your app to a hosting service or, for iOS, to TestFlight (or
      the App Store!). Web devs can see [more deployment info
      here](resources/web/deployment).
- Explore alternate algorithms for finding the nth generation, such
  as [Hashlife](https://en.wikipedia.org/wiki/Hashlife)
