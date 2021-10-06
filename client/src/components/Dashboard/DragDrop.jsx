import { Upload } from 'antd';

import { app } from '../../firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import Img from '../common/Img';

import DreagDescription from './DreagDescription';

const { Dragger } = Upload;
import './style.css';
const DragDrop = ({ setUrlImage, imageUrl }) => {
  const customUpload = ({ onError, onSuccess, file }) => {
    const storage = getStorage(app);
    const metadata = {
      contentType: 'image/jpeg',
    };
    const storageRef = ref(storage, file.name);
    uploadBytes(storageRef, file, metadata).then((elm) =>
      getDownloadURL(storageRef, elm.name).then((url) => setUrlImage(url))
    );

    try {
      const image = file.name;
      onSuccess(null, image);
    } catch (e) {
      onError(e);
    }
  };
  return (
    <>
      <Dragger name="image" customRequest={customUpload}>
        {imageUrl ? (
          <Img src={imageUrl} alt="image" imgClass="drag-drop-img" />
        ) : (
          <DreagDescription />
        )}
      </Dragger>
    </>
  );
};

export default DragDrop;
