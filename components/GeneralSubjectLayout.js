import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, Image, View} from 'react-native';
import Color from '../constants/Color';
import Card from '../components/Card';


const GeneralSubjectLayout = props => {
  let lessons = styles.lessonSubjects;
  if (Dimensions.get('window').height < 600) {
    lessons = styles.lessonSubjectsSmall;
  }
    return (
      <TouchableOpacity
        style={{ ...lessons, ...props.style }}
        onPress={props.onSelect}
      >
        <View>
          <View style={styles.item}>
            <Card style={styles.imageContainer}>
              <Image style={styles.imageStyle} source={props.link} />
            </Card>
            <View style={styles.textContainer}>
              <Text numberOfLines={2} style={styles.text}>
                {props.title}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  lessonSubjects: {
    borderColor: "#ccc",
    borderWidth: 1,
    width: "90%",
    marginVertical: 10,
    height: Dimensions.get("window").height / 4,
    borderRadius: 10,
    overflow: "hidden",
  },
  lessonSubjectsSmall: {
    borderColor: "#ccc",
    borderWidth: 1,
    width: "90%",
    marginVertical: 10,
    height: Dimensions.get("window").height / 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  text: {
    color: "#fff",
    fontSize: Dimensions.get("window").width < 350 ? 16 : 20,
    fontWeight: "bold",
    flexShrink: 1,
  },
  item: {
    flexDirection: "row",
  },
  imageContainer: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
    overflow: "hidden",

    elevation: 10,
  },
  imageStyle: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    justifyContent: "center",
    paddingLeft: 10,
  },
});
export default GeneralSubjectLayout;
