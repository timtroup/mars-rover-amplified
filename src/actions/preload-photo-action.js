export const REQUEST_PRELOAD_PHOTOS = 'REQUEST_PRELOAD_PHOTOS';
export const RECEIVE_PRELOAD_PHOTOS = 'RECEIVE_PRELOAD_PHOTOS';
export const DELETE_PHOTOS = 'DELETE_PHOTOS';

export const requestPreloadPhotos = () => ({
    type: REQUEST_PRELOAD_PHOTOS
});

export const receivePreloadPhotos = (json) => ({
    type: RECEIVE_PRELOAD_PHOTOS,
    photos: json,
    receivedAt: Date.now()
});

export const deletePhotos = () => ({
    type: DELETE_PHOTOS
});

export const preloadPhotos = (photos, start, end) => dispatch => {

    dispatch(requestPreloadPhotos());

    const photosToLoad = photos.slice(start, end);

    let getImagePromises = [];

    photosToLoad.forEach(photoData => {
        getImagePromises.push(getImage(`${photoData.img_src}`));
    });

    let photoGalleryData = [];

    Promise.all(getImagePromises).then(values => {
        values.forEach(img => {
            photoGalleryData.push({
                src: img.src,
                width: parseInt(img.width),
                height: parseInt(img.height),
                aspectRatio: parseFloat(img.width / img.height),
                lightboxImage: {
                    src: img.src
                }
            });
        });
        dispatch(receivePreloadPhotos(photoGalleryData))
    })
};

const getImage = (url) => {
    return new Promise(function(resolve, reject){
        var img = new Image();
        img.onload = function(){
            resolve(img)
        };
        img.onerror = function(){
            reject(img)
        };
        img.src = url;
    })
};