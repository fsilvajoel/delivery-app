import deburr from 'lodash.deburr';
import isString from 'lodash.isstring';

export const slugify = (value: string) => {
  if (!isString(value))
    throw new Error('Slugify can only slugify string types');

  return deburr(value).replace(/\s/g, '-');
};
