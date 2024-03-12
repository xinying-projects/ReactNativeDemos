import {
  StyleSheet,
  View,
} from "react-native";
import Panel from "./app/components/Panel";
import Colors from "./app/themes/Colors";

import {
  showAlert,
  handleContinueToMsgPortal,
} from "./app/helpers/messageUtils";

const PANEL_ITEMS = [
  {
    title: "Appointments",
    icon: null,
    screen: "Appointments",
    action: () => {},
  },
  {
    title: "Messages",
    icon: null,
    screen: "Messages",
    action: async () => {
      const alertContent = {
        title: "",
        message:
          "You are being re-directed to the message portal.",
        cancelText: "Cancel",
        okText: "Continue",
      };
      const portalUrl = "https://github.com/proyecto26/react-native-inappbrowser";
      showAlert(alertContent, null, () => handleContinueToMsgPortal(portalUrl));
    },
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Panel items={PANEL_ITEMS}></Panel>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.preciousPearls,
    paddingHorizontal: 30,
    paddingTop: 100,
  },
});
