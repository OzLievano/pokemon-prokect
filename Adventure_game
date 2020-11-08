import time
import random

con1 = ["Team fight occurs. YOU GET A PENTAKILL",
        "Oh no, enemy team has rotated and collapsed. You died.",
        "Tower destroyed.Bonus gold."]

con2 = ["You're too weak."
        "Rift Herald one shots you then proceeds to poop you out.",
        "team helps you kill the rift herald. GG.",
        "Enemy team rotates. Huge team fight. Everyone dies."]


def print_pause(string):
    print(string)
    time.sleep(2)


def valid_input(prompt, option1, option2):
    while True:
        choice = input(prompt).lower()
        if option1 in choice:
            return choice
            break
        elif option2 in choice:
            return choice
            break
        else:
            print_pause("Sorry, I don't understand.")
    return choice


def intro():
    print_pause("You are rotating from bottom lane to mid-lane.")
    print_pause("There are two objectives for you to potentially take.")
    print_pause("The first is to destroy the mid-lane tower.")
    print_pause("The second is to kill the rift herald.")


def objective():

    choice = valid_input("Please choose which objective to take: ",
                         "Do you want to take a tower or kill rift herald?\n",
                         'tower', 'rift herald').lower()
    if "tower" in choice:
        print_pause("TO THE MID TOWER.")
        print_pause(random.choice(con1))

    elif "rift herald" in choice:
        print_pause("I hope I can kill ol' rifty.")
        print_pause(random.choice(con2))


def play_again():

    choice = valid_input("Would you like to play again? "
                         "Please say 'yes' or 'no'. \n",
                         "yes", "no")

    if "no" in choice:
        print_pause("GAME OVER.")
    if "yes" in choice:
        print_pause("ONCE MORE UNTO THE BREACH OLD FRIENDS!")
        objective()
        print_pause("GAME OVER.")


intro()
objective()
play_again()
