import React from "react";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
import { Image } from "react-native";

const Zoomable = (props) => {
  // logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
  //   console.log('');
  //   console.log('');
  //   console.log('-------------');
  //   console.log('Event: ', event);
  //   console.log('GestureState: ', gestureState);
  //   console.log('ZoomableEventObject: ', zoomableViewEventObject);
  //   console.log('');
  //   console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
  // }
  return (
    <ReactNativeZoomableView
      maxZoom={1.5}
      minZoom={0.5}
      zoomStep={0.5}
      initialZoom={1}
      bindToBorders={true}
      // onZoomAfter={logOutZoomState}
    >
      <Image {...props} source={props.link} style={props.style} />
    </ReactNativeZoomableView>
  );
};

export default Zoomable;
