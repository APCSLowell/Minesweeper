Minesweeper
==================

In this assignment you will be recreating the [Microsoft Minesweeper game](http://en.wikipedia.org/wiki/Minesweeper_(video_game)). If you are not familiar with minesweeper you should play the game until you are. You can find one version at [http://minesweeperonline.com/](http://minesweeperonline.com/). You can also try my [slightly easier Minesweeper game](http://simart.github.io/MinesweeperFinished/). You may find the [2d Arrays](https://docs.google.com/presentation/d/1_rk3nKsde5bQGs-36ijMh4wmNN3RtqFpNL59R6CnC-c/edit?usp=sharing) slide presentation and [codingbat minesweeper problems](https://codingbat.com/home/simona1@sfusd.edu/minesweeper) helpful.

Install the Guido GUI Library
--------------------------------
We'll be using a GUI library called Guido. To install it, start *Processing* and choose *Sketch | Import Library | Add Library*. Type *Guido* in the search box, the click on *Guido by Florian Jenett* and then click *Install*.

Program Requirements
--------------------
1. Your minesweeper game will be a two dimensional array of buttons. Use constants for the number of rows and columns.
3. Make sure all class member variables and methods are labeled appropriately as either `public` or `private`
4. If you click on a button that contains a mine, the game ends and all the mines are displayed
5. If you click on a button that does not contain a mine, a number appears at that location indicating the number of neighbors that DO contain mines. Recall that each position has at most 8 neighbors. Note that the buttons on the boundary have fewer than 8 neighbors. For example, a corner has only three neighbors.
6. If the user clicks on a button and no number appears, then there are no mines neighboring that button. Your program should then recursively keep pressing those surrounding buttons that are not next to a mine.
7. The game should end when all the buttons that contain mines have been correctly marked (assuming that you have not been blown up by then!)
8. Your game should use `Math.random()` to randomly place the mines.


Suggested steps to completing this assignment:
----------------------------------------------
1. Fork and clone down this repository. As you work through the following steps, make sure that your program runs correctly before going to the next step.
2. On line 2, delete the comment and create two integer constants `NUM_ROWS` and `NUM_COLS` and initialize them each with the value 20  
3. Go to line 16, use the constants to initialize the 2d array `buttons` to have 20 rows and 20 columns
4. Use nested loops to create a `new MSButton` for each row column pair
5. Uncomment the first two lines in the MSButton constructor (lines 68 and 69), You should now see a grid of buttons. If you click on the button it should turn white.
6. Go back to lines 2 and 3 and reduce the number of rows and columns to 5. This will make testing the program easier. We'll set the rows and columns back to a larger number when we finish the game. Make sure the program still runs correctly with the smaller number of rows and columns. 
7. Now, got to line 5, and initialize `mines` to be a `new` empty `ArrayList` of type `MSButton`  
8. Go to line 26 and write the `setMines()` function. It should generate a random `row` and `col`umn number. Use the `contains()` function to check to see if the button at that random row and col is already in `mines`. If it isn't then `add` it
9. Uncomment lines 98 and 99 so that cells with a mine turn red when clicked. Test out your program to make sure it has the number of mines you expect.
10. Go to line 59 and finish `public boolean isValid(int row, int col)` which returns `true` if (`row`,`col`) is a valid location on the grid and `false` otherwise. Be sure to use your constants for the number of rows and columns
11. Go to line 67 and finish `public int countMines(int row, int col)` which counts the bombs in the 8 neighbors--(remember to check to see if the neighboring button is valid *first* before checking to see if it's a mine)
12. Now go to the `MSButton` class and finish `public void mousePressed()` which should:
	* set `clicked` to true
	* if `mouseButton` is `RIGHT`, set `flagged` to its opposite value (If it's `true` set it to `false` or if it is `false` set it to `true`) If `flagged` was set to `false` also set `clicked` to `false`
	* else if `mines` contains `this` button, display the losing message
	* else if `countMines` returns a number of neighboring mines greater than zero, set the label to that number. 
	* else recursively call `mousePressed` with the valid, unclicked, neighboring buttons in all 8 directions 
13. Next, finish `public boolean isWon()` which determines if the player has won the game
14. Then finish `public void displayWinMessage()`. One way to display the message is to use `setLabel` to change the labels of the buttons
15. Finish `public void displayLosingMessage()` to display the positions of all the bombs as well as a losing message
16. Finally, adjust the number of rows, columns and mines in your game to your desired difficulty level.



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
 
