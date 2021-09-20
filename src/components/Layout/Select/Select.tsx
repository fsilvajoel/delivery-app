import { useCallback, useState } from 'react';

import { EKeyCodes } from '~enums/keyCodes';
import { slugify } from '~utils/slugify';
import isUndefined from 'lodash.isundefined';

import AlertIcon from './images/alert.svg';
import scss from './Select.module.scss';
import { ISelectProps } from './types';

function Select(props: ISelectProps) {
  const [isFocused, setIsFocused] = useState(false);

  const labelClass = [scss.label];
  const legendClass = [scss.legend];
  const fieldsetClass = [scss.fieldset];
  const containerClass = [scss.container];
  const legendTitleClass = [scss.legendTitle];
  const listItemsWrapperClass = [scss.listItemsWrapper];

  const handleKeyUp = useCallback((e) => {
    if (e.keyCode === EKeyCodes.ENTER || e.keyCode === EKeyCodes.ESCAPE) {
      setIsFocused(false);
    }
  }, []);

  const handleOptionKeyUp = useCallback(
    (e, value) => {
      if (e.keyCode === EKeyCodes.ENTER || e.keyCode === EKeyCodes.ESCAPE) {
        setIsFocused(false);
        props.onChange(value);
      }
    },
    [props]
  );

  const renderErrorMessage = () => (
    <div className={scss.errorWrapper}>
      <AlertIcon className={scss.icon} />
      <span className={scss.errorMessage}>{props.errorMessage}</span>
    </div>
  );

  const renderSelectedOption = () => {
    const selectedValue = props.children.find((child) => child.props.selected);
    let option = selectedValue?.props.children;

    if (selectedValue?.props.label) option = selectedValue?.props.label;

    return <div className={scss.selectedOption}>{option}</div>;
  };

  const renderOptionList = () =>
    props.children.map((child) => (
      <div
        key={slugify(`${child.props.value}`)}
        tabIndex={0}
        role="button"
        onClick={() => props.onChange(child.props.value)}
        onKeyUp={(e) => handleOptionKeyUp(e, props.value)}
      >
        {child}
      </div>
    ));

  if (props.theme) containerClass.push(scss[props.theme]);
  if (isFocused) listItemsWrapperClass.push(scss.listItemsWrapperVisible);
  if (props.label) legendTitleClass.push(scss.legendPadding);
  if (props.borderless) fieldsetClass.push(scss.borderless);
  if (!isUndefined(props.errors)) containerClass.push(scss.errorHeight);

  if ((isFocused || props.value) && !props.borderless) {
    fieldsetClass.push(scss.fieldsetFocus);
    legendClass.push(scss.legendFocus);
    labelClass.push(scss.labelAnimate);
    containerClass.push(scss.containerFocus);
  }

  if (!props.errors && props.value !== '' && !isFocused && !props.borderless) {
    fieldsetClass.push(scss.fieldsetFilled);
    legendClass.push(scss.legendFilled);
    labelClass.push(scss.labelFilled);
    containerClass.push(scss.containerFilled);
  }

  if (props.errors && !props.borderless) {
    fieldsetClass.push(scss.fieldsetError);
    containerClass.push(scss.containerError);
    labelClass.push(scss.labelError);
  }

  return (
    <div role="listbox" className={containerClass.join(' ')}>
      <div
        role="button"
        className={scss.selectWrapper}
        tabIndex={0}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      >
        <label htmlFor="select" className={labelClass.join(' ')}>
          {props.label}
        </label>
        {renderSelectedOption()}
        <div
          role="button"
          tabIndex={0}
          className={listItemsWrapperClass.join(' ')}
          onClick={() => setIsFocused(false)}
          onKeyUp={handleKeyUp}
        >
          <div className={scss.listItems}>{renderOptionList()}</div>
        </div>
        <fieldset aria-hidden="true" className={fieldsetClass.join(' ')}>
          <legend className={legendClass.join(' ')}>
            <span className={legendTitleClass.join(' ')}>{props.label}</span>
          </legend>
        </fieldset>
        {props.arrow && <span className={scss.arrow} />}
      </div>
      {props.errors && renderErrorMessage()}
    </div>
  );
}

export default Select;
