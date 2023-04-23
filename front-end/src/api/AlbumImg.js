import React, { useState, useEffect } from "react";
import axios from "axios";

const AlbumImage = (props) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchAlbumImage = async () => {
      console.log("oui");
      try {
        const response = await axios.get(
          `https://api.deezer.com/album/${props.albumId}/image?size=${props.size}`,
          {
            responseType: "arraybuffer",
            maxRedirects: 0,
            validateStatus: (status) => status >= 200 && status < 303,
          }
        );
        const base64Image = Buffer.from(response.data, "binary").toString(
          "base64"
        );
        setImageData(base64Image);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchAlbumImage();
  }, [props.albumId, props.size]);

  return imageData ? (
    <img src={`data:image/jpeg;base64,${imageData}`} alt="Album cover" />
  ) : null;
};

export default AlbumImage;
