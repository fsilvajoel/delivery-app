import { ChangeEvent, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

import Option from '~components/Layout/Select/Option/Option';
import Select from '~components/Layout/Select/Select';

import { countries } from './data';
import Info from './images/alert.svg';
import scss from './InputPhone.module.scss';
import { IInputMaskProps, IInputPhoneProps } from './types';

const initialMaskValue = countries[0].phoneMask;

function InputPhone({ onChangeMinLength, ...props }: IInputPhoneProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryValue, setCountryValue] = useState(countries[0].ddi);
  const [allMasksValue, setAllMasksValue] = useState(initialMaskValue);
  const [isInputPhoneFocused, setIsInputPhoneFocused] = useState(false);
  const [currentMaskValue, setCurrentMaskValue] = useState(initialMaskValue[0]);
  const [currentMinLength, setCurrentMinLength] = useState<number>(
    countries[0].minLength
  );

  const labelCss = [scss.label];
  const legendCss = [scss.legend];
  const fieldsetCss = [scss.fieldset];
  const containerCss = [scss.phoneContainer];

  const getMasksFromCountry = (ddi: string) => {
    const countryFiltered = countries.filter((country) => country.ddi === ddi);
    return {
      ddi: countryFiltered[0].phoneMask,
      minLength: countryFiltered[0].minLength,
    };
  };

  const handleChangeDdi = (newDdiValue: string) => {
    const { ddi, minLength } = getMasksFromCountry(newDdiValue);
    props.onChangeDdiValue(newDdiValue);
    props.onChangePhoneValue('');
    setCountryValue(newDdiValue);
    setAllMasksValue(ddi);
    setCurrentMinLength(minLength);
    setPhoneNumber('');
    if (onChangeMinLength) onChangeMinLength(minLength);
  };

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const newPhone = input.value;
    const maskValue = allMasksValue[0];

    props.onChangePhoneValue(newPhone);
    setPhoneNumber(newPhone);
    setCurrentMaskValue(maskValue);
  };

  const renderErrorMsg = () => (
    <div className={scss.errorWrapper}>
      <Info className={scss.icon} />
      <p className={scss.errorMsg}>{props.errorMsg}</p>
    </div>
  );

  const renderInputField = (inputProps: IInputMaskProps) => (
    <input type="tel" {...inputProps} />
  );

  const renderCountries = () =>
    countries.map((country) => (
      <Option
        key={country.ddi}
        value={country.ddi}
        selected={country.ddi === countryValue}
      >
        <img className={scss.flag} src={country.flag} alt={country.name} />
      </Option>
    ));

  useEffect(() => {
    setPhoneNumber('');
  }, [props.register]);

  useEffect(() => {
    if (onChangeMinLength) onChangeMinLength(currentMinLength);
  }, [onChangeMinLength, currentMinLength]);

  useEffect(() => {
    setPhoneNumber(props.value);
  }, [props.value]);

  if (props.theme) containerCss.push(scss[props.theme]);

  if (props.errors) {
    containerCss.push(scss.containerError);
    fieldsetCss.push(scss.fieldsetError);
    labelCss.push(scss.labelError);
  }

  if (isInputPhoneFocused || phoneNumber?.length > 0) {
    legendCss.push(scss.legendFocus);
    labelCss.push(scss.labelAnimate);
    fieldsetCss.push(scss.fieldsetFocus);
  }

  if (!props.errors && phoneNumber?.length > 0 && !isInputPhoneFocused) {
    fieldsetCss.push(scss.fieldsetFilled);
    labelCss.push(scss.labelFilled);
  }

  return (
    <div className={containerCss.join(' ')}>
      <div className={scss.phoneWrapper}>
        <div className={scss.ddi}>
          <Select
            borderless
            value={countryValue}
            onChange={(value) => handleChangeDdi(value)}
          >
            {renderCountries()}
          </Select>
        </div>
        <div className={scss.separator} />
        <div className={scss.phone}>
          <label htmlFor="name" className={labelCss.join(' ')}>
            {props.placeholder}
          </label>
          <InputMask
            id={props.name}
            name={props.name}
            mask={currentMaskValue}
            value={phoneNumber}
            autoComplete="new-password"
            placeholder={props.placeholder}
            className={scss.input}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangePhone(e)
            }
            onBlur={() => setIsInputPhoneFocused(false)}
            onFocus={() => setIsInputPhoneFocused(true)}
          >
            {(inputProps: IInputMaskProps) => renderInputField(inputProps)}
          </InputMask>
        </div>

        <fieldset aria-hidden="true" className={fieldsetCss.join(' ')}>
          <legend className={legendCss.join(' ')}>
            <span className={scss.legendTitle}>{props.placeholder}</span>
          </legend>
        </fieldset>
      </div>
      {props.errors && renderErrorMsg()}
    </div>
  );
}

export default InputPhone;
