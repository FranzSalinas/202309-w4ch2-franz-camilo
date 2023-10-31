type Gender = 'male' | 'female' | 'other' | 'prefer not to mention' | 'tree';

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
