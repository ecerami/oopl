from abc import ABC, abstractmethod

class Animal(ABC):
    """Animal Base Class"""

    def sleep(self):
        """Attach a subscriber to the publisher."""
        print("Zzz........")

    @abstractmethod
    def animalSound(self):
        """Detach a subscriber from the publisher."""
        pass

class Cow(Animal):

    def animalSound(self):
        """Detach a subscriber from the publisher."""
        print("Mooooo....")

