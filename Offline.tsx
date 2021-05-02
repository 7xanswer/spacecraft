import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Avatar, Button, Colors, Text } from 'react-native-paper';
import { NetworkConsumer, useIsConnected } from 'react-native-offline';
import Icon from 'react-native-paper/lib/typescript/components/Icon';


const Offline = () => {
  const isConnected = useIsConnected();
  return (
    <View>
      <NetworkConsumer>
        {({ isConnected }) =>
          isConnected ? (
            <View style={styles.success_container}>
              <Text style={styles.success_message}>s/o la prise, j'suis connecté</Text>
            </View> ) : (
            <View style={styles.error_container}>
              <Text style={styles.error_message}>Offline, reconnection in progress ...</Text>
              <ActivityIndicator size="small" color="crimson" />
            </View>
          )
        }
      </NetworkConsumer>
    </View>
  );
};

export default Offline;

const styles = StyleSheet.create({
  success_container: {
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: Colors.green100,
    color: Colors.red200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  success_message: {
    color: 'forestgreen',
  },
  error_container: {
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: Colors.red100,
    color: Colors.red200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  error_message: {
    color: 'crimson',
  }
});