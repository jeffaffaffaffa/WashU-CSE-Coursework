import os
import numpy as np
import warnings
from tensorflow.keras.utils import to_categorical
from skimage.io import imread, imsave, imshow
from skimage.color import rgba2rgb
from skimage.transform import resize


def resize_image(image, target_size):
    '''
    Resizes given image to have the target dimensions
    '''

    # resize the image to be our desired target size
    return resize(image, target_size)

def load_image(path):
    '''
    Reads given IMAGE to PATH
    '''
    print(path)
    image = imread(path)
    return image if image.shape[2] == 3 else rgba2rgb(image) 

def save_image(path, image):
    '''
    Writes given IMAGE to PATH
    '''
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        imsave(path, image)


def show_image(image):
    '''
    Displays supplied image. Image can be supplied as an skimage array
    or a file path
    '''
    imshow(image)
    
    
def load_dataset(path, target_size, ignored=['.DS_Store', '.ipynb_checkpoints']):
    '''
    Loads images at a given path into a dataset that is N x (image_shape)
    Path structure must have folders of each class within the main directory,
    each containing the files of that class.
    
    training/
        rock/
            rock1.jpg
            rock2.jpg
        paper/
            ...
        scissors/
            ...
    '''
    
    assert os.path.isdir(path), 'can only load a directory of images'
    
    classes = [directory for directory in os.listdir(path) if directory not in ignored]
    num_classes = len(classes)
    
    Xs = []
    ys = []
    
    for i, c in enumerate(classes):
        class_path = f'{path}/{c}'
        
        image_paths = [file for file in os.listdir(class_path) if file not in ignored]
        number_of_images = len(image_paths)
        
        X_class = np.zeros((number_of_images, *target_size, 3))
        y_class = i * np.ones((number_of_images, 1))
        
        successfully_loaded = np.zeros(number_of_images, dtype=bool)
        
        for j, image_path in enumerate(image_paths):
            try:
                image = load_image(f'{class_path}/{image_path}')
                image = resize_image(image, target_size)
            
                X_class[j] = image
                successfully_loaded[j] = 1
            except:
                Warning(f'File could not be opened: {path}')
            
        Xs.append(X_class[successfully_loaded])
        ys.append(y_class[successfully_loaded])
        
    X = np.vstack(tuple(Xs))
    y = np.vstack(tuple(ys))
    
    return X, to_categorical(y, num_classes)
    
    