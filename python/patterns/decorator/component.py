"""Generic Security Component that returns messages."""


class SecuritySystem():
    """
    The Base Component.

    Defines operations that can be altered by decorators.

    Imagine that SecuritySystem is written by someone else,
    and you cannot modify its code directly.
    """
    def get_message(self):
        """Get the message."""
        return "Hello, World!!!"
