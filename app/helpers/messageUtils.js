import { Alert } from 'react-native';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

const showAlert = (content, onCancel, onContinue) => {
  const { title, message, cancelText, okText } = content;
  Alert.alert(title, message, [
    {
      text: cancelText,
      onPress: onCancel,
    },
    {
      text: okText,
      onPress: onContinue,
    },
  ]);
};

const handleContinueToMsgPortal = async url => {
  try {
    const isAvailable = await InAppBrowser.isAvailable();
    InAppBrowser.close();

    if (isAvailable) {
      return await InAppBrowser.open(url, {
        // iOS Properties
        modalPresentationStyle: 'formSheet',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: false,
        enableUrlBarHiding: false,
        enableDefaultShare: false,
        showInRecents: true,
      });
    }

    return await Linking.openURL(url);
  } catch (e) {
    Alert.alert(e.toString());
  }
};

export { showAlert, handleContinueToMsgPortal };
