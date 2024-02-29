import { defineField } from "sanity"
export const data = {
name:'data',
type:'document',
title:'Data',
fields:[
    {
        name:'first_name',
        type:'string',
        title:'First Name',
        validation:Rule => Rule.required()
    },
    {
        name:'last_name',
        type:'string',
        title:'Last Name'
    },
    {
        name:'description',
        type:'text',
        title:'Description'
    },
    defineField({
        name:'image',
        type:'image',
        title:'Image'
    }),
    {
        name:'time',
        type:'datetime',
        title:'Time',
        options:{
            dateFormat:'DD-MM-YYYY',
            timeFormat:'HH:mm'
        }
    }
]
}