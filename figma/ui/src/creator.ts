export function setupCreator(eles: {
    create: HTMLButtonElement;
    cancel: HTMLButtonElement;
    textbox: HTMLInputElement;
}) {
    eles.create.addEventListener('click', () => {
        const count = parseInt(eles.textbox.value, 10);
        parent.postMessage(
            { pluginMessage: { type: 'create-rectangles', count } },
            '*'
        );
    });

    eles.create.addEventListener('click', () => {
        parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
    });
}
