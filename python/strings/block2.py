# Example of How to Deal with Long Lines

# Avoid doing this
msg = "Hello, class!  This is a rather long string. It keeps running on and on.   And goes on even more!\nSuch a long string!"

# Do this instead
msg = "Hello, class!  This is a rather long string. " \
    "It keeps running on and on.   And goes on even " \
    "more!\nSuch a long string!"

print(msg)