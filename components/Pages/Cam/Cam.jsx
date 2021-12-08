import React, {
  Component,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../../Contexts/UserContext";
import * as MediaLibrary from "expo-media-library";

const Cam = ({ navigation }) => {
  const [cameraPermission, setCameraPermission] = useState();
  const [mediaPermission, setMediaPermission] = useState();
  const [cameraType, setcameraType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef();

  const userContext = useContext(UserContext);

  function toggleCam() {
    if (cameraType === Camera.Constants.Type.back) {
      setcameraType(Camera.Constants.Type.front);
    } else {
      setcameraType(Camera.Constants.Type.back);
    }
  }

  const takePicture = async () => {
    const img = await cameraRef.current.takePictureAsync();
    userContext.setUser({
      ...userContext.user,
      pictures: userContext.user.pictures
        ? [...userContext.user.pictures, img.uri]
        : [img.uri],
    });
    if (mediaPermission) {
      const savedImage = await MediaLibrary.createAssetAsync(img.uri);
      console.log(savedImage);
    }
    console.log(userContext.user);
    navigation.goBack();
  };

  useEffect(() => {
    (async () => {
      const camera = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(camera.granted);
      const media = await MediaLibrary.requestPermissionsAsync();
      setMediaPermission(media.granted);
    })();
  }, []);

  if (!cameraPermission) {
    return <Text> Accès refusé </Text>;
  }

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={cameraType}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={toggleCam}>
            <MaterialIcons
              name={
                cameraType === Camera.Constants.Type.front
                  ? "camera-rear"
                  : "camera-front"
              }
              size={50}
              color="rgb(200,0,255)"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture}>
            <MaterialIcons name="camera" size={50} color="rgb(200,0,255)" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 50,
  },
});

export default Cam;
