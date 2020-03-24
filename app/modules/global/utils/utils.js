export function resetFooterIcons (footerMenuList, item) {
    footerMenuList.map(menuItem => {
       if(menuItem.iconName === item.iconName) {
            menuItem.status = true;
       } else {
        menuItem.status = false;
       }
    });

    return footerMenuList;
}
