import { ListItem } from "./ListItem";

export default {
    title: 'ListItem',
    component: ListItem
}

export const BoughtListItem = {
    args: {
        productName: 'Coca cola',
        isBought: true
    }
}

export const NotBoughtListItem = {
    args: {
        productName: 'Sprite',
        isBought: false
    }
}