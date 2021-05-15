// Detect if device is an iphone(X, or later)
let __isIphoneX;

export const isIphoneX = () => {

    if (__isIphoneX) return __isIphoneX;

    // Really basic check for the ios platform
    // https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Get the device pixel ratio
    const ratio = window.devicePixelRatio || 1;

    // Define the users device screen dimensions
    const screen = {
        width : window.screen.width * ratio,
        height : window.screen.height * ratio
    };

    const screenLongSide = screen.height > screen.width ? screen.height : screen.width;

    // iPhone X Detection
    return (iOS && screenLongSide >= 2436);

}