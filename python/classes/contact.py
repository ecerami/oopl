# This code block illustrates instance variables
# v. class variables.
class Contact:
    # all_contacts is a class variable.
    # Class variables are *shared* by all instances of this class.
    all_contacts = []

    def __init__(self, first, last):
        # These are instance variables.
        self.first = first
        self.last = last

        # Here we add the contact to the class variable.
        Contact.all_contacts.append(self)

    def __repr__(self):
        # A reserved Python method that returns
        # a printable string of the object.
        return f"{self.first} {self.last}"

contact0 = Contact("John", "Doe")
contact1 = Contact("Jane", "Doe")

# This is the recommended way to access class variables
# In this form, it's obvious that all_contacts
# is part of the Class, and not one instance.
print(Contact.all_contacts)

# This also works;  but not recommended, because it
# looks like all_contacts is part of the instance.
print(contact0.all_contacts)
