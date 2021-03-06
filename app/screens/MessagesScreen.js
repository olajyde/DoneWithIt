import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDelete from '../components/lists/ListItemDelete';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'Hey! Is this item still available?',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description:
      "I'm interested in this item. When will you bw able to post it?",
    image: require('../assets/jyd.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => {
              console.log('Messages', item.description);
            }}
            renderRightActions={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={isRefreshing}
        onRefresh={() => setMessages([initialMessages[1]])}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
