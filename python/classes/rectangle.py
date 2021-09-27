class Rectangle:
    """A simple attempt to represent a rectangle."""
    # Class variable
    num_rectangles = 0

    def __init__(self, width, height):
        """Initializes with width and height."""
        self.width = width
        self.height = height
        Rectangle.num_rectangles += 1
        
    def get_summary(self):
        """Gets a summary string."""
        return f"A {self.width} x {self.height} rectangle."

    def get_num_rectangles():
        """
        Gets number of rectangles created.
        Note that we do not include the self parameter.
        This makes it a class method.
        """ 
        return Rectangle.num_rectangles

rect0 = Rectangle(10, 30)
print(rect0.get_summary())

rect1 = Rectangle(20, 30)
print(rect1.get_summary())

num_recangles = Rectangle.get_num_rectangles()
print(f"Number of rectangles created:  {num_recangles}.")