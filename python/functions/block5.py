# You can also specify an arbitary number of key/value pairs.
# These are frequently specified as **kwargs

def build_profile(first, last, **user_info):
    """Build a dictionary containing everything we know about a user."""
    user_info['first_name'] = first
    user_info['last_name'] = last
    return user_info

# When we call build_profile, everything after einstein
# is packed into a dictionary and passed to user_info.
user_profile = build_profile('albert', 'einstein',
    location='princeton',
    field='physics')
print(user_profile)