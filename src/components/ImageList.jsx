import React from 'react'

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <img key={image.id} src={image.webformatURL} alt="Result" />
    })
  return (
    <div className='ui segment'>
       <span >We Found {props.images.length} Results</span> 
        {images}
    </div>
  )
}

export default ImageList;