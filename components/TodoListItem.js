// 추가된 아이템 하나를 나타내는 부분, 완료 여부 상태값, 체크 이벤트
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onToggle(id)}>
                {checked ? (
                    <View style={styles.completeCircle}>
                        <Icon name="circledowno" size={30} color="#fa8231" />
                    </View>
                ) : (
                    <View style={styles.circle} />
                )}
            </TouchableOpacity>
            <Text style={[styles.text, 
                checked? styles.strikeText : styles.unstrikeText,]}>
                {textValue}
            </Text>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText} onPress={onRemove(id)}>
                    <Icon name="delete" size={30} color="#eb3b5a" />
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
        width: 100,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#fa8231',
        borderWidth: 2,
        marginRight: 20,
        marginLeft: 20,
    },
    completeCircle: {
        marginRight: 20,
        marginLeft: 20,
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c',
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default TodoListItem;
