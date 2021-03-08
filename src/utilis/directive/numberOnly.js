export const digitOnly={
    bind(el, binding) {
        el.addEventListener('keypress', (e) => {
            const key = e.key;
            if (!/\d/.test(key)) {
              e.preventDefault();
            }
          }),
          el.addEventListener('change', (e) => {
            const initialValue = el.value;
            el.value = initialValue.replace(!/\d/g, '');
            if (initialValue !== el.value) {
              e.stopPropagation()
            }
          })
    },
}