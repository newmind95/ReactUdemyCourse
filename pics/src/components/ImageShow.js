const ImageShow = ({ image }) => {
    return (
        <div>
            <img src={image.urls.small}  alt="logo" />
        </div>
    );
}

export default ImageShow;
