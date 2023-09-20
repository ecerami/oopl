"""
You can also specify an arbitary number of key/value pairs.
These are frequently specified as **kwargs.
"""

def build_profile(first, last, **kwargs):
    """Build a dictionary containing everything we know about a user."""
    kwargs['first_name'] = first
    kwargs['last_name'] = last
    return kwargs

# When we call build_profile, everything after einstein
# is packed into a dictionary and passed to user_info.
user_profile = build_profile('albert', 'einstein',
    location='princeton',
    field='physics')
print(user_profile)
