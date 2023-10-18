"""
Example of Abstract Base Class.
"""
from abc import ABC, abstractmethod

class Animal(ABC):
    """Animal Base Class"""

    def sleep(self):
        """Go to sleep."""
        print("Zzz........")

    @abstractmethod
    def make_sound(self):
        """Make a sound."""

class Cow(Animal):
    """Cow Subclass."""

    def make_sound(self):
        """Make a sound."""
        print("Mooooo....")
