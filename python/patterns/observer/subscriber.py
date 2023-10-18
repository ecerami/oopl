"""
Observer Pattern.

Adapted From:
https://refactoring.guru/design-patterns/observer/python/example#example-0--main-py
"""
from abc import ABC, abstractmethod


class Subscriber(ABC):
    """The Subscriber listens for events."""

    @abstractmethod
    def update(self, publisher):
        """Receive update from publisher."""


class ConcreteSubscriberA(Subscriber):
    """Concrete Subscriber A."""

    def update(self, publisher):
        """React to specific state events only."""
        if publisher.get_state() < 3:
            print(f"ConcreteSubscriberA: Reacted to: {publisher.get_state()}")


class ConcreteSubscriberB(Subscriber):
    """Concrete Subscriber B."""

    def update(self, publisher):
        """React to specific state events only."""
        if publisher.get_state() == 1:
            print(f"ConcreteSubscriberB: Reacted to: {publisher.get_state()}")
