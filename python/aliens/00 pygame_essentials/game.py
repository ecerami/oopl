import sys
import pygame

class Game:
    """Template class for PyGame."""

    def __init__(self):
        """Initialize the game, and the screen."""
        pygame.init()
        self.screen = pygame.display.set_mode([800,800])
        pygame.display.set_caption("Arcade Game!")

    def run_game(self):
        """The main game loop."""
        while True:
            # Get latest events from the user
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    sys.exit()

            # Update any game elements

            # Redraw the screen
            self.screen.fill([255,0,0])
            pygame.display.flip()

game = Game()
game.run_game()
