"use client"

import { Toaster } from 'react-hot-toast'

const ToasterComponent = () => {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
    />
  );
};

export default ToasterComponent;