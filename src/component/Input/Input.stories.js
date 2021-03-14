import React from 'react'
import { TextInput } from './'
import { action } from '@storybook/addon-actions';

const story = {
    title: 'UInator/Input',
    component: TextInput,
};

export default story

const Template = (args) => <TextInput {...args}/>

export const Default = Template.bind({})
Default.args = {
    onChange : (event) => action('onChange')(event)
}