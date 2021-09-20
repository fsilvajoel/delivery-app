import { useState } from 'react';

import AlertIcon from './images/alert.svg';
import scss from './Input.module.scss';
import { IInputProps } from './types';

function Input(props: IInputProps) {
  const labelClass = [scss.label];
  const inputClass = [scss.input];
  const legendClass = [scss.legend];
  const fieldsetClass = [scss.fieldset];
  const containerClass = [scss.container];
  const [isFocused, setIsFocused] = useState(false);

  const getInputValidations = () => {
    let inputValidations = {};

    if (props.required) {
      inputValidations = {
        ...inputValidations,
        required: { value: props.required, message: props.requiredMsg },
      };
    }

    if (props.pattern) {
      inputValidations = {
        ...inputValidations,
        pattern: { value: props.pattern, message: props.patternMsg },
      };
    }

    if (props.validate) {
      inputValidations = {
        ...inputValidations,
        validate: props.validate,
      };
    }

    return inputValidations;
  };

  const renderErrorMessage = () => (
    <div className={scss.errorWrapper}>
      <AlertIcon className={scss.icon} />
      <span className={scss.errorMessage}>{props.errorMessage}</span>
    </div>
  );

  const onInputFocus = () => {
    if (props.onFocus) props.onFocus();
    setIsFocused(true);
  };

  if (props.theme) containerClass.push(scss[props.theme]);

  if (isFocused || props.value?.length > 0) {
    fieldsetClass.push(scss.fieldsetFocus);
    legendClass.push(scss.legendFocus);
    labelClass.push(scss.labelAnimate);
    containerClass.push(scss.containerFocus);
  }

  if (!props.errors && props.value?.length > 0 && !isFocused) {
    fieldsetClass.push(scss.fieldsetFilled);
    legendClass.push(scss.legendFilled);
    labelClass.push(scss.labelFilled);
    containerClass.push(scss.containerFilled);
  }

  if (props.errors) {
    fieldsetClass.push(scss.fieldsetError);
    containerClass.push(scss.containerError);
    labelClass.push(scss.labelError);
  }

  if (props.className) inputClass.push(props.className);

  return (
    <div className={containerClass.join(' ')}>
      <div className={scss.inputWrapper}>
        <label htmlFor={props.name} className={labelClass.join(' ')}>
          {props.placeholder}
        </label>
        <input
          readOnly={props.readonly}
          type={props.type}
          id={props.name}
          name={props.name}
          className={inputClass.join(' ')}
          placeholder={props.placeholder}
          ref={props.register(getInputValidations())}
          onBlur={() => setIsFocused(false)}
          onFocus={onInputFocus}
        />
        {props.children && props.children}
        <fieldset aria-hidden="true" className={fieldsetClass.join(' ')}>
          <legend className={legendClass.join(' ')}>
            <span className={scss.legendTitle}>{props.placeholder}</span>
          </legend>
        </fieldset>
      </div>
      {props.errors && renderErrorMessage()}
    </div>
  );
}

export default Input;
