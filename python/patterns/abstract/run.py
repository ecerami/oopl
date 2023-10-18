from animal import Animal, Cow

# This will raise an Exception.
# Animal is abstract and cannot be instatiated.
#animal = Animal()

# But this will work...
cow = Cow()
cow.sleep()
cow.make_sound()
