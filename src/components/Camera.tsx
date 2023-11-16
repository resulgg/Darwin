import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Camera, CameraType, CameraCapturedPicture, PermissionResponse } from "expo-camera";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";
import * as MediaLibrary from "expo-media-library";
import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { FadeInUp } from "react-native-reanimated";

const MainCamera = () => {
  const [type, setType] = useState<CameraType>(CameraType.back);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [photo, setPhoto] = useState<CameraCapturedPicture>();
  const [hasPermission, setHasPermission] = useState<PermissionResponse>();
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const cameraRef = useRef<Camera>(null);

  const { width } = useWindowDimensions();
  const height = Math.round((width * 16) / 9);

  const getPermission = async () => {
    await requestPermission();
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    setHasPermission(cameraStatus);
  };

  useEffect(() => {
    getPermission();
  }, []);

  if (!hasPermission?.granted && !permissionResponse?.granted) {
    getPermission();
  }

  const takePhoto = async () => {
    const data = await cameraRef.current?.takePictureAsync();
    if (type === CameraType.front) {
      const cropThis = await manipulateAsync(
        data?.uri!,
        [{ flip: FlipType.Horizontal }, { resize: { height: 1920, width: 1080 } }],
        { compress: 1, format: SaveFormat.JPEG },
      );
      setPhoto(cropThis);
    }
    if (type === CameraType.back) {
      const cropThis = await manipulateAsync(
        data?.uri!,
        [{ resize: { height: 1920, width: 1080 } }],
        { compress: 1, format: SaveFormat.JPEG },
      );
      setPhoto(cropThis);
    }
  };

  const previewImage = () => {
    setShowOverlay((overlay) => !overlay);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: "100%" }}>
        <View style={styles.cameraWrapper}>
          <Camera
            ref={cameraRef}
            style={{
              width: "100%",
              height,
            }}
            type={type}
            autoFocus
            zoom={0}
            ratio="16:9">
            <Animated.View entering={FadeInUp.delay(5000)} style={{ position: "relative" }}>
              <Image
                source={{ uri: photo?.uri }}
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: showOverlay ? 0.5 : 0,
                }}
              />
            </Animated.View>
          </Camera>
        </View>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity style={styles.camerButton} onPress={takePhoto}>
            <MaterialCommunityIcons name="camera-iris" size={45} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.camerButton}
            onPress={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)}>
            <MaterialCommunityIcons name="reload" size={45} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.camerButton} onPress={previewImage}>
            <MaterialCommunityIcons name="layers" size={45} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraWrapper: {
    width: "100%",
    height: "100%",
    flex: 7,
    borderRadius: 30,
    overflow: "hidden",
  },
  buttonsWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    gap: 30,
  },
  absoluteFill: {
    height: "100%",
    width: "100%",
  },
  indicator: {
    position: "absolute",
    width: 10,
    backgroundColor: "red",
    height: "100%",
  },
  camerButton: {
    backgroundColor: "black",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
