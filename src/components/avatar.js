import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Content,
  Text,
  Badge,
  Container,
  Fab,
  Icon,
} from 'native-base';

const Avatar = ({name, uri, time }) => {
    return (
        <ListItem avatar>
        <Left>
          <Thumbnail
            source={{
              uri: {uri},
            }}
          />
        </Left>
        <Body>
          <Text>{name}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              type="MaterialIcons"
              name="call-made"
              style={[appStyles.callIcon, {color: '#25D366'}]}
            />
            <Text note>{time}</Text>
          </View>
        </Body>
        <Right>
          <Icon
            style={{color: '#075E54'}}
            type="MaterialIcons"
            name="call"
          />
        </Right>
      </ListItem>
    );
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string,
}

export default Avatar;