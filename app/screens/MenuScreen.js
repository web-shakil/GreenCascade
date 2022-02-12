import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { getPlants } from "../redux/actionCreators";
// import { useEffect } from "react";

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPlants: () => dispatch(getPlants()),
  };
};

const MenuScreen = (props) => {
  // useEffect(() => {
  //   props.getPlants();
  // }, []);
  return (
    <View>
      <Text>Menu Screen</Text>
      <Button
        onPress={() => props.navigation.navigate("Plant Detail")}
        title="Scan Leaf"
      />
      <Button
        onPress={() => props.navigation.navigate("Plant Detail")}
        title="See Discussion"
      />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
