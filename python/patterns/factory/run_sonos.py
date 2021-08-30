"""
Run the Sonos Application.

The Sonos Application enables you to register music services
in real-time and search them.
"""
from factory import MusicFactory
from music import SpotifyService, PandoraService


def search(music_factory, music_service_name, q):
    """Search the specific music service."""
    # Get the appropriate music service object from the factory
    music_service = music_factory.get_service(music_service_name)
    # Query it
    results = music_service.search(q)
    print(results)


# Create the music factory and register music services
music_factory = MusicFactory()
music_factory.register_music_service("Spotify", SpotifyService)
music_factory.register_music_service("Pandora", PandoraService)
# ... additional services can be added in real-time.

# Now search across services...
search(music_factory, "Spotify", "beethoven")
search(music_factory, "Pandora", "mozart")
