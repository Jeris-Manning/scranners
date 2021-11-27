//  https://itnext.io/creating-a-real-time-qr-code-scanner-with-vanilla-javascript-part-1-2-creating-the-scanner-a8934ee8f614

import React, { useRef, useEffect } from "react";

const Scanner = () => {
  const videoRef = useRef();
  const codeScannerRef = useRef();
  if (!("BarcodeDetector" in window)) {
    let BarcodeDetector;
  }

  useEffect(() => {
    if (!("BarcodeDetector" in window)) {
      BarcodeDetector = new Array();
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const constraints = {
        video: true,
        audio: false,
      };

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => (videoRef.current.srcObject = stream));

      if ("BarcodeDetector" in window) {
        codeScannerRef.current = new BarcodeDetector({
          formats: ["qr_code"],
        });
      }
    }
  }, []);

  // const scannerObj = codeScannerRef.current;
  // // console.log(scannerObj, "SCAN");

  if (!("BarcodeDetector" in window)) {
    console.log("Barcode Detector is not supported by this browser.");
  } else {
    console.log("Barcode Detector supported!");
  }

  return (
    <>
      {"BarcodeDetector" in window && <h1>Scanner Works</h1>}
      <video ref={videoRef} width="1280" height="480" autoPlay></video>
    </>
  );
};

export default Scanner;
