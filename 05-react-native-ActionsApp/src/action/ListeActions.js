import React from 'react'
import {View, Text} from 'react-native'
import {UneAction} from './UneAction'


export const ListeActions = ({actions}) => {

    return (
        <View>
            {actions.map((action, i) => (
                <UneAction key={i} action={action}/>
            ))}
        </View>
    )
}
