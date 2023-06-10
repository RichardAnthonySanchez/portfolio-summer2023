const copyButtons = document.querySelectorAll('.copy-button');
const textToCopy = document.querySelectorAll('.text-to-copy');

copyButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(textToCopy[index]);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');

    selection.removeAllRanges();

    button.textContent = 'Copied!';
  });
});
