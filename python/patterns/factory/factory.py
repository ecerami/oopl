"""Example of the Factory Metod Pattern."""

class MusicFactory():
    """
    Music Factory.

    A central spot for registering music services.
    """

    def __init__(self):
        """Init the music services dictionary."""
        self._music_services = {}

    def register_music_service(self, music_service_name, class_name):
        """Register a new music service."""
        self._music_services[music_service_name] = class_name

    def get_service(self, music_service_name):
        """
        Create object, based on the service name.

        This is the factory method.
        Depending on the music_service_name parameter,
        a different object is created and returned.
        """
        if music_service_name in self._music_services:
            service = self._music_services[music_service_name]

            # Here, we instantiante the object
            return service()
        return None
        