document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.input-1 input');
    const buttons = document.querySelectorAll('button');
    const lightThemeBtn = document.querySelector('.light-theme');
    const darkThemeBtn = document.querySelector('.dark-theme');
    let inputValue = '';


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'DEL') {
                inputValue = inputValue.slice(0, -1);
            } else if (value === 'RESET') {
                inputValue = '';
            } else if (value === '=') {
                try {
                    inputValue = eval(inputValue).toString();
                } catch {
                    inputValue = 'Error: Input is Not Correct'
                }
            } else {
                inputValue += value;
            }

            inputField.value = inputValue;
        })
    })


    // Theme Switching
    lightThemeBtn.addEventListener('click', () => {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    });

    darkThemeBtn.addEventListener('click', () => {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    });
})