export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validatableInput: Validatable) {
  let isValid = true;

  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }

  if (
    validatableInput.minLength &&
    typeof validatableInput.value === 'string'
  ) {
    isValid = isValid && validatableInput.value.trim().length >= validatableInput.minLength;
  }

  if (
    validatableInput.maxLength &&
    typeof validatableInput.value === 'string'
  ) {
    isValid = isValid && validatableInput.value.trim().length <= validatableInput.maxLength;
  }

  if (
    validatableInput.min !== null &&
    typeof validatableInput.min === 'number'
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }

  if (
    validatableInput.max !== null &&
    typeof validatableInput.max === 'number'
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }

  return isValid;
}
