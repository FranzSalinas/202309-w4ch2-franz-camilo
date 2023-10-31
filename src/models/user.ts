type Gender = 'Hombre' | 'Mujer' | 'Otro' | 'Prefiero no decirlo';

type AccountType = 'personal' | 'pro' | 'bussines';

export type User = {
  name: string;
  userSurname: string;
  birthdate: string;
  gender: Gender | '';
  email: string;
  isOk: boolean;
  password: string;
  repeatPassword: string;
  userName: string;
  accountType: AccountType | '';
};
