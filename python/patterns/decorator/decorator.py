"""Decorator Pattern."""
from component import SecuritySystem


class BaseDecorator(SecuritySystem):
    """
    The Base Decorator.

    Follows the same interface as the other components.
    The primary purpose of this class is to define the wrapping interface.
    """

    def __init__(self, component):
        """Initialize with the wrapped component."""
        self.component = component


class EncryptionDecorator(BaseDecorator):
    """Encrypts messages."""

    def get_message(self):
        """Override."""
        message = self.component.get_message()

        # no, this is not real encryption! :-)
        return f"Encrypted[msg={message}]"


class JapaneseDecorator(BaseDecorator):
    """Translates messages to Japanese."""

    def get_message(self):
        """Override."""
        message = self.component.get_message()

        # no, this is not real translation! :-)
        return f"JapaneseTranlsation[msg={message}]"
