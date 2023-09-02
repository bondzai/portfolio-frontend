export const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

export const convertSubTasksToTree = (subTasks) => {
    const treeData = [];

    for (const [key, value] of Object.entries(subTasks)) {
        const treeNode = {
            title: value,
            key,
        };

        // Check if the key has a dot (.) to determine if it's a parent or child node
        const dotIndex = key.indexOf('.');

        if (dotIndex !== -1) {
            // It's a child node, find the parent key
            const parentKey = key.substring(0, dotIndex);
            const parentNode = treeData.find(node => node.key === parentKey);

            if (!parentNode.children) {
                parentNode.children = [];
            }

            parentNode.children.push(treeNode);
        } else {
            // It's a parent node
            treeData.push(treeNode);
        }
    }

    return treeData;
}