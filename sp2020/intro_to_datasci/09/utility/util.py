import numpy as np
import matplotlib.pyplot as plt
from os.path import isfile
from tensorflow.keras.preprocessing import image
from IPython.display import Image


def configure_plots():
    '''Configures plots by making some quality of life adjustments'''
    plt.rcParams['figure.figsize'] = [16, 9]
    plt.rcParams['axes.titlesize'] = 20
    plt.rcParams['axes.labelsize'] = 16
    plt.rcParams['xtick.labelsize'] = 14
    plt.rcParams['ytick.labelsize'] = 14
    plt.rcParams['lines.linewidth'] = 2


def preprocess_image(preprocess_fn, path, target_size=(224, 224)):
    '''
    Takes an image path and returns a preprocessed version of it.
    '''
    img = image.load_img(path, target_size=target_size)
    img_data = image.img_to_array(img)
    img_data = np.expand_dims(img_data, axis=0)
    return preprocess_fn(img_data)


def extract_features(extractor_model, preprocess_fn, paths):
    '''
    Extracts features using the extractor model and returns a matrix of
    extracted feature vectors.
    '''
    if type(paths) is not list:
        paths = [path]
        
    features = []
    
    print('Extracting Features from Images:')
    
    for i, path in enumerate(paths):
        if not isfile(path):
            raise FileNotFoundError(f'Path is invalide (given {path})')
            
        print('.', end='')
        if not (i + 1) % 50:
            print(i + 1)

        # passed `preprocess_fn` to preprocessor
        processed_image = preprocess_image(preprocess_fn, path)
        
        feature = np.array(extractor_model.predict(processed_image)).flatten()
        features.append(feature)

    return np.array(features)


def show_image(path):
    '''
    Loads and displays the image at PATH
    '''
    
    image = Image(path)
    display(image)
