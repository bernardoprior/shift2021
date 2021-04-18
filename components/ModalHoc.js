import React from "react";
import { Modal, StyleSheet, View } from "react-native";

const ModalHoc = ({ children, visible }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={{ ...styles.modalView }}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ModalHoc;
