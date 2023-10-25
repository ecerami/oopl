"""Music Services."""
from abc import ABC, abstractmethod


class MusicService(ABC):
    """The Music Service Base Class."""

    @abstractmethod
    def search(self, q):
        """Search the service with the specified q parameter."""


class SpotifyService(MusicService):
    """Concrete SpotifyService."""

    def search(self, q):
        """Search the service with the specified q parameter."""
        # Real search would be done here...
        return f"Querying Spotify for q={q}..."


class PandoraService(MusicService):
    """Concrete PandoraService."""

    def search(self, q):
        """Search the service with the specified q parameter."""
        # Real search would be done here...
        return f"Querying Pandora for q={q}..."
