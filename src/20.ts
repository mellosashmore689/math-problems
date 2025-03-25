import numpy as np

def custom_tts(text):
    """
    Generates Text-to-Speech (TTS) output from a given text.
    
    Parameters:
    - text: A string containing the input text to be converted into TTS.
    
    Returns:
    - The TTS output as a string.
    """
    # For demonstration purposes, I'll use a random character
    return np.random.choice(['a', 'b', 'c'], 1)[0]

custom_tts("Hello, how are you?")
