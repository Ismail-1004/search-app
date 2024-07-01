const formatNumber = {
  beforeMount(el: HTMLInputElement, binding: any) {
    el.addEventListener('input', () => {
      const value = el.value.replace(/\D/g, ''); 
      const formattedValue = value.match(/.{1,2}/g)?.join('-') || '';
      el.value = formattedValue;
      binding.instance?.$emit('update:modelValue', formattedValue); 
    });
  }
};

export default formatNumber;