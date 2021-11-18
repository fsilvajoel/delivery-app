export const latinCharacters =
  'a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ';
export const fullNameRegex = new RegExp(
  `^([${latinCharacters}]{3,})+\\s+([${latinCharacters}\\s]{3,})+$`
);
export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!%()_=?;:.])[0-9a-zA-Z$*&@#!%()_?=;:.]{8,}$/;
export const cepRegex = /^[0-9]{2}[0-9]{3}[0-9]{3}$/;
export const cepRegex1 = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
export const DateRegex =
  /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
