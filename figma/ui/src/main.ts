import './style.css';
import { setupCreator } from './creator.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Rectangle Creator</h2>
    <p>Count: <input id="count" value="5" /></p>
    <button id="create">Create</button>
    <button id="cancel">Cancel</button>
  </div>
`;

setupCreator({
    create: document.querySelector<HTMLButtonElement>('#create')!,
    cancel: document.querySelector<HTMLButtonElement>('#cancel')!,
    textbox: document.querySelector<HTMLInputElement>('#count')!,
});
