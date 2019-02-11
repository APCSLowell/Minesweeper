Minesweeper
==================

In this assignment you will be recreating the [Microsoft Minesweeper game](http://en.wikipedia.org/wiki/Minesweeper_(video_game)). If you are not familiar with minesweeper you should play the game until you are. You can find one version at [http://minesweeperonline.com/](http://minesweeperonline.com/). You can also try my [slightly easier Minesweeper game](http://simart.github.io/MinesweeperFinished/). You may find the [2d Arrays](https://docs.google.com/presentation/d/1_rk3nKsde5bQGs-36ijMh4wmNN3RtqFpNL59R6CnC-c/edit?usp=sharing) slide presentation and [codingbat minesweeper problems](https://codingbat.com/home/simona1@sfusd.edu/minesweeper) helpful.

Install the Guido GUI Library
--------------------------------
We'll be using a GUI library called Guido. To install it, start *Processing* and choose *Sketch | Import Library | Add Library*. Type *Guido* in the search box, the click on *Guido by Florian Jenett* and then click *Install*.

Program Requirements
--------------------
1. Your minesweeper game will be a two dimensional array of buttons. Use constants for the number of rows and columns.
2. The number of bombs should also be specified by a constant.
3. Make sure all class member variables and methods are labeled appropriately as either `public`, `protected` or `private`
4. If you click on a button that contains a bomb, the game ends and all the bombs are displayed
5. If you click on a button that does not contain a bomb, a number appears at that location indicating the number of neighbors that DO contain bombs. Recall that each position has at most 8 neighbors. Note that the buttons on the boundary have fewer than 8 neighbors. For example, a corner has only three neighbors.
6. If the user clicks on a button and no number appears, then there are no bombs neighboring that button. Your program should then recursively keep pressing those surrounding buttons that are not next to a bomb.
7. The game should end when all the buttons that do not contain bombs have been marked (assuming that you have not been blown up by then!)
8. Your game should use `Math.random()` to randomly place the mines.


Suggested steps to completing this assignment:
----------------------------------------------
1. Fork and clone down this repository
2. On line 4, create two integer constants `NUM_ROWS` and `NUM_COLS` and initialize them each with the value 20  
2. Go to line 18, use the constants to initialize the 2d array `buttons` to have 20 rows and 20 columns
2. Use nested loops to create a `new MSButton` for each row column pair
2. Uncomment lines 55 and 56, You should now see a grid of buttons. If you click on the button it should turn white.
2. Now, got to line 7, and initialize `bombs` to be a `new` empty `ArrayList` of type `MSButton`  
3. Go to line 25 and write the `setBombs()` function. It should generate a random `row` and `col`umn number. Use the `contains()` function to check to see if the button at that random row and col is already in `bombs`. If it isn't then `add` it
3. Uncomment lines 97 and 98 so that cells with a mine turn red when clicked. Test out your program to make sure it has the number of mines you expect.
3. Now go to the `MSButton` class and finish these three member methods:  
	* `public boolean isValid(int row, int col)` returns `true` if (`row`,`col`) is a valid location on the grid and `false` otherwise
	* `public int countBombs(int row, int col)` counts the bombs in the 8 neighbors--(remember to check to see if the neighboring button is valid before checking to see if it's a mine)
	* `public void mousePressed()` which:
		* sets `click` to true
		* if `mouseButton` is `RIGHT`, toggles `marked` to either either `true` or `false`. If `marked` is `false` set `click` to `false`
		* else if `bombs` contains `this` button display the losing message
		* else if `countBombs` returns a number of neighboring mines greater than zero, set the label to that number. Note that to convert the `int` that `countBombs()` returns to a `String` you can add an empty string: `""+countBombs()`
		* else recursively call `mousePressed` with the valid, unclicked, neighboring buttons in all 8 directions 
4. Next, finish `public boolean isWon()` which determines if the player has won the game
5. Then finish `public void displayWinMessage()` which uses `setLabel` to change the labels of the buttons to display a winning message
6. Finally finish `public void displayLosingMessage()` to display the positions of all the bombs as well as a losing message



***
Alternative Assignment: The Game of Life
----------------------------------------
If you want an alternative to Minesweeper, you could write your own version of the The Game of Life. The Game of Life isn't what you think, it's a program that simulates how bacteria might grow. It's another program that is well suited to using a two dimensional array of buttons. You can find examples and descriptions at the following websites:
[http://www.bitstorm.org/gameoflife/](http://www.bitstorm.org/gameoflife/)   
[http://www.math.com/students/wonders/life/life.html](http://www.math.com/students/wonders/life/life.html)  

Game of Life sample work
------------------------
[Ethan](http://emdarcher.github.io/processing_GameOfLife_simulation/)   

***
Minesweeper sample work
-----------------------
[Maxwell](https://selflessnarcissist.github.io/Minesweeper/)   
[Ravi](https://ravik0.github.io/Minesweeper/)   
[Robert](https://rshi159.github.io/Minesweeper/)   
[Mike](https://mimonokandilos.github.io/Minesweeper/)   
[Erica](https://ericamalia.github.io/Minesweeper/)   
[Zhenwen](https://1337elitehacker.github.io/Minesweeper/)   
[Nghi](https://nagirokudo.github.io/Minesweeper/)   
[Kenny](https://kennyyu168.github.io/Minesweeper/)   
[Juan](https://juan-hernandez7.github.io/Minesweeper/)   
[Darya](https://darya-ver.github.io/Minesweeper/)   
[Brandon](https://zawszefl.github.io/Minesweeper/)   
[Kyle](https://yachtmasterkyle.github.io/Minesweeper/)   
[Hannah](https://hadecastro.github.io/Minesweeper/)   
[Sophie](https://sohuang.github.io/Minesweeper/)   
[Emma](https://emmackenzie.github.io/Minesweeper/)   
[Nghi](https://nagirokudo.github.io/Minesweeper/)   
[Mi-Kaela](https://mikamarciales.github.io/Minesweeper/)   
[Andrew](https://ansue1234.github.io/Minesweeper/)    
[Michelle](https://miphung.github.io/Minesweeper/)   
[Thien](http://thtran1.github.io/Minesweeper/)  
[Melody](http://itsmelodious.github.io/Minesweeper/)  
[Jeremy](http://gitrektapcs.github.io/Minesweeper/)  
[Helen](http://hezhang2.github.io/Minesweeper/)  
[Xiao Qin](http://qingyuu.github.io/Minesweeper/)  
[Charles](http://chadvincula.github.io/Minesweeper/)  
[Jacky](http://jackyrobot.github.io/Minesweeper/)  
[Noah](http://noahzpepper.github.io/Minesweeper/)  
[Alex](http://alexlo1.github.io/Minesweeper/)  
[Matthew](http://yeahmatts.github.io/Minesweeper/)  
[Rebecca](http://rebeckur.github.io/Minesweeper/)  
[Winnie](http://winnie3269.github.io/Minesweeper/)  
[Evan](http://evhuang.github.io/Minesweeper/)  
[Esther](http://elam2016.github.io/Minesweeper/)  
[Raymond](http://elam2016.github.io/Minesweeper/)  
[Aliya](http://aliyachambless.github.io/Minesweeper/)  
[Brian](http://brianlam37.github.io/Minesweeper/)  
[Ka Ki](http://alzhu1.github.io/Minesweeper/)  
[Alex](http://alzhu1.github.io/Minesweeper/)  
[Elliott](http://elliottdebruin.github.io/Minesweeper/)  
[Theo](http://awesomestickman.github.io/Minesweeper/)  
[Lin](http://lin00.github.io/Minesweeper/)  
[Jimmy](http://furiouspenguins.github.io/Minesweeper/)  
[Zachary](http://zachooz.github.io/Minesweeper/)  
[Erika](http://bekutaa.github.io/Minesweeper/)   
[Thomas](http://tomikam.github.io/Minesweeper/)   
 
