"""
Observer Pattern.

Adapted From:
https://refactoring.guru/design-patterns/observer/python/example#example-0--main-py
"""
from abc import ABC, abstractmethod


class Subscriber(ABC):
    """The Subscriber interface declares the update method, used by publisher."""

    @abstractmethod
    def update(self, publisher):
        """Receive update from publisher."""
        pass


class ConcreteSubscriberA(Subscriber):
    """Concrete Subscriber A."""

    def update(self, publisher):
        """React to specific state events only."""
        if publisher._state < 3:
            print(f"ConcreteSubscriberA: Reacted to: {publisher._state}")


class ConcreteSubscriberB(Subscriber):
    """Concrete Subscriber B."""

    def update(self, publisher):
        """React to specific state events only."""
        if publisher._state == 0 or publisher._state >= 2:
            print(f"ConcreteSubscriberB: Reacted to: {publisher._state}")
