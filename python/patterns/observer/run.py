"""
Observer Pattern.

Adapted From:
https://refactoring.guru/design-patterns/observer/python/example#example-0--main-py
"""
from publisher import ConcretePublisher
from subscriber import ConcreteSubscriberA
from subscriber import ConcreteSubscriberB

# The client code.

publisher = ConcretePublisher()

subscriber_a = ConcreteSubscriberA()
publisher.attach(subscriber_a)

subscriber_b = ConcreteSubscriberB()
publisher.attach(subscriber_b)

publisher.run_business_logic()
publisher.run_business_logic()

