game.splash("Let's calculate the area of a trapezoid.")
let Base1 = game.askForNumber("What is the first base value?")
let Base2 = game.askForNumber("What is the second base value?")
let Height = game.askForNumber("What is the height?")
let area = (Base1 + Base2) / 2 * Height
game.splash("The area of the trapezoid with Base1" + Base1 + "cm, Base2" + Base2 + "cm and" + Height + "cm is " + area + "cm^2")
