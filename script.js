const content = document.getElementById('content');
const categories = {
    openSource: `<ul>
                    <li>Linux</li>
                    <li>Git</li>
                    <li>Node.js</li>
                </ul>`,
    hardware: `<ul>
                    <li>Raspberry Pi</li>
                    <li>Arduino</li>
                    <li>Intel i5</li>
                </ul>`
};

document.getElementById('categories').addEventListener('click', function(event) {
    const category = event.target.getAttribute('data-category');
    if (category) {
        content.innerHTML = categories[category];
    }
});
