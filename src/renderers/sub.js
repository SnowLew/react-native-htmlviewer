import React, { Component } from 'react';
import { View } from 'react-native';

export default class RenderSub extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {this.props.element.children.map(
                    (e, i) => this.props.renderComponent(e, i, {
                        ...this.props.style,
                        fontSize: 10,
                        alignSelf: 'flex-end'
                    })
                )}
            </View>
        );
    }
}