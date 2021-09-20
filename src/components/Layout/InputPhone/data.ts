import { IDdi } from './types';

import arFlag from './images/ar.png';
import boFlag from './images/bo.png';
import brFlag from './images/br.png';
import clFlag from './images/cl.png';
import coFlag from './images/co.png';
import ecFlag from './images/ec.png';
import peFlag from './images/pe.png';
import pyFlag from './images/py.png';
import uyFlag from './images/uy.png';

export const countries: IDdi[] = [
  {
    name: 'Brasil',
    ddi: '+55',
    flag: brFlag,
    phoneMask: ['(99) 99999-9999'],
    minLength: 14,
  },
  {
    name: 'Argentina',
    ddi: '+54',
    flag: arFlag,
    phoneMask: ['999 99-9999-9999'],
    minLength: 16,
  },
  {
    name: 'Bolivia',
    ddi: '+591',
    flag: boFlag,
    phoneMask: ['99999999'],
    minLength: 8,
  },
  {
    name: 'Chile',
    ddi: '+56',
    flag: clFlag,
    phoneMask: ['9 99999 9999'],
    minLength: 12,
  },
  {
    name: 'Colombia',
    ddi: '+57',
    flag: coFlag,
    phoneMask: ['999 9999999'],
    minLength: 11,
  },
  {
    name: 'Ecuador',
    ddi: '+593',
    flag: ecFlag,
    phoneMask: ['999 999 9999'],
    minLength: 12,
  },
  {
    name: 'Paraguay',
    ddi: '+595',
    flag: pyFlag,
    phoneMask: ['9999 999999'],
    minLength: 11,
  },
  {
    name: 'Peru',
    ddi: '+51',
    flag: peFlag,
    phoneMask: ['999 999 999'],
    minLength: 11,
  },
  {
    name: 'Uruguai',
    ddi: '+598',
    flag: uyFlag,
    phoneMask: ['999 999 999'],
    minLength: 11,
  },
];
