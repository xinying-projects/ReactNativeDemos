import { FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'title one',
    description: 'description one',
    image: require('../assets/cat.jpg'),
  },
  {
    id: 2,
    title: 'title two',
    description: 'description two',
    image: require('../assets/cat.jpg'),
  },
  {
    id: 3,
    title: 'title three',
    description: 'description three',
    image: require('../assets/cat.jpg'),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = message => {
    setMessages(messages => messages.filter(item => item.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('item clicked.')}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: 'title one',
              description: 'description one',
              image: require('../assets/cat.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
