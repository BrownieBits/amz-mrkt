import items from './menu.json';

export function getMenuItems() {
    console.log('boop',items);
    // Sort posts by date
    return items.sections;
  }