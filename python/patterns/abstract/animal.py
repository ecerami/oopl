from abc import ABC, abstractmethod

class Animal(ABC):
    """Animal Base Class"""

    def sleep(self):
        """Go to sleep."""
        print("Zzz........")

    @abstractmethod
    def animalSound(self):
        """Make a sound."""
        pass

class Cow(Animal):

    def animalSound(self):
        """Make a sound."""
        print("Mooooo....")

