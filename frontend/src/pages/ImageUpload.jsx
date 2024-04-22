import React, { useState } from 'react'
import { imageDb } from '../config/Config'
import { v4 } from 'uuid'
import { uploadBytes } from 'firebase/storage'

const ImageUpload = () => {

    const [image, setImage] = useState("")

    const handleClick = () =>{
       const imageRef = ref(imageDb, `files/${v4()}`)
        uploadBytes(imageRef)
    }

  return (
    <div>
      <input type='file' onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleClick}></button>
    </div>
  )
}

export default ImageUpload
