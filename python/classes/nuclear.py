class NuclearPowerPlant:

    def __init__(self):
        # Here we prefix running with a _ to warn users not to
        # access it or modify it directly.
        self._running = True

    def power_down(self):
        # Safely power the entire plant down by following a specific sequence.
        print("Initiating Shutdown Sequence.")
        self._flush_water_sytems()  
        self._disable_nuclear_core()        
        self._running = False
        print("Powerplant now shut down.")

    def _flush_water_sytems(self):
        # Prefix with a _ to warn users not to call this directly.
        print("Flushing Water Systems...")
        # [Complicated water systems code here...]
        print("Water Systems Flushed.")

    def _disable_nuclear_core(self):
        # Prefix with a _ to warn users not to call this directly.
        print("Disabling Nuclear Core...")
        # [Complicated nuclear code here...]
        print("Nuclear Core Disabled.")

    def is_running(self):
        return self._running

# Here's how we should use the class.
power_plant = NuclearPowerPlant()
print(f"Running status:  {power_plant.is_running()}")
power_plant.power_down()
print(f"Running status:  {power_plant.is_running()}")
print("-------------")

# But, there's nothing in Python that will prevent this
power_plant = NuclearPowerPlant()
print(f"Running status:  {power_plant._running}")

# Stop the power plant w/o following the shutdown sequence.  Yikes!
power_plant._running = False
print(f"Running status:  {power_plant._running}")


