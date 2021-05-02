import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList, ScrollView } from 'react-native';
import { Avatar, Card, Title } from 'react-native-paper';
import { data } from './data';
import Offline from './Offline';
import AppLayout from './AppLayout';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const App = () => {
  const renderItem = ({ item }) => (
    <Item name={item.name} model={item.model} crew={item.crew} />
  );
  
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout title="Starships">
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View>
              <FlatList
                data={data.results}
                renderItem={renderItem}
              />
            </View>
            <Offline></Offline>
          </ScrollView>
        </SafeAreaView>
      </AppLayout>
    </QueryClientProvider>
  );
}

const Item = ({ name, model, crew }) => {
  return (
    <Card>
      <Card.Title 
      title={name}
      left={(props) => <Avatar.Icon {...props} icon="ship-wheel" />}
      />
      <Card.Content>
        <Title>Model</Title>
        <Text>{model}</Text>
        <Title>Crew</Title>
        <Text>{crew}</Text>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    marginVertical: 40,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default App;