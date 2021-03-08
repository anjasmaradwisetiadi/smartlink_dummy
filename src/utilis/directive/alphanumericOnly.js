export const alphanumericOnly={
    bind(el, binding) {
        el.addEventListener('keypress', (e) => {
            const key = e.key;
            if (/[^A-Za-z0-9]/.test(key)) {
              e.preventDefault();
            }
          }),
          el.addEventListener('change', (e) => {
            const initialValue = el.value;
            el.value = initialValue.replace(/[^A-Za-z0-9]/g, '');
            if (initialValue !== el.value) {
              e.stopPropagation()
            }
          })
    },
}