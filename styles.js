import { StyleSheet } from "react-native";

export default StyleSheet.create({
  controlsContainer: {
    flex: 1,
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
  },
  highThumbContainer: {
    position: "absolute",
  },
  railsContainer: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    alignItems: "center",
  },
  labelFixedContainer: {
    alignItems: "flex-start",
  },
  labelFloatingContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "flex-start",
  },
  touchableArea: {
    ...StyleSheet.absoluteFillObject,
  },
});
