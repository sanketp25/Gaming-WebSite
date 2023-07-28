import noImage from '../assets/noImage.webp'
const getCroppedImage = (url:string) => {
    if(!url) return noImage;
    const target = 'media/'
    const index = url.indexOf(target) + target.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);

}

export default getCroppedImage