import { useState, FocusEvent } from 'react';
import InputMask from 'react-input-mask';

import AlertIcon from './images/alert.svg';
import scss from './Input.module.scss';
import { IInputProps } from './types';

function Input(props: IInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputClass = [scss.input];
  const containerClass = [scss.container];
  const labelClass = [scss.label];
  const fieldsetClass = [scss.fieldset];
  const legendClass = [scss.legend];

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

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (props.onBlur) props.onBlur(e);
  };

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

  return (
    <div className={containerClass.join(' ')}>
      <div className={scss.inputWrapper}>
        <label htmlFor={props.name} className={labelClass.join(' ')}>
          {props.placeholder}
        </label>
        <InputMask
          mask="99999-999"
          readOnly={props.readonly}
          type={props.type}
          id={props.name}
          name={props.name}
          value={props.value}
          className={inputClass.join(' ')}
          placeholder={props.placeholder}
          ref={props.register(getInputValidations())}
          onBlur={handleBlur}
          onFocus={() => setIsFocused(true)}
        />

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
