import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeComponent extends Component {
    static navigationOptions = {
        Title:'HOME'

    }


    render(){
        const { navigate } = this.props.navigation;

        return(
        <View>
            <Text>This is HOME</Text>
            <Button
                title="See profile"
                onPress={()=>{
                    navigate('Profile')
                }}
            />
        </View>
        )
    }
}



export default HomeComponent;