import { User } from '../../models/user';

export function UserForm() {
  const intialState: User = {
    userSurname: '',
    birthdate: '',
    gender: '',
    email: '',
    name: '',
    isOk: false,
    password: '',
    repeatPassword: '',
    userName: '',
    accountType: '',
  };

  console.log(intialState);
  const initialPage = 1;
  const page = initialPage;

  return (
    <form className={`user-form_${page}`}>
      {page === 1 && (
        <>
          <div className="form-control">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-control">
            <label htmlFor="userSurname">Apellido</label>
            <input type="text" name="userSurname" id="userSurname" />
          </div>
          <div className="form-control">
            <label htmlFor="birthday">Fecha de Nacimiento</label>
            <input type="date" name="birthday" id="birthday" />
          </div>
          <div className="form-control">
            <fieldset>
              <legend>Selecciona tu género</legend>
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="male" value="Male" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="female" value="Female" />
              <label htmlFor="other">Other</label>
              <input type="radio" name="gender" id="other" value="Other" />
              <label htmlFor="prefer_no_mention">Prefer not to mention</label>
              <input
                type="radio"
                name="gender"
                id="prefer_no_mention"
                value="Prefer not to mention"
              />
            </fieldset>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form-control">
            <label htmlFor="is-ok">Acepto términos y condiciones.</label>
            <input type="checkbox" name="is-ok" id="is-ok" />
          </div>
        </>
      )}
      {page === 2 && (
        // Código para el formulario cuando page es igual a 2
        <>
          <div className="form-control">
            <label htmlFor="username">Nombre de Usuario</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="form-control">
            <label htmlFor="repeat_password">Repite tu contraseña</label>
            <input
              type="password"
              name="repeat_password"
              id="repeat_password"
            />
          </div>
          <div className="form-control">
            <fieldset>
              <legend>Selecciona tu tipo de cuenta</legend>
              <label htmlFor="personal_account"></label>
              <input
                type="radio"
                name="type_of_account"
                id="personal_account"
                value="Personal"
              />
              <label htmlFor="pro_account"></label>
              <input
                type="radio"
                name="type_of_account"
                id="pro_account"
                value="Pro"
              />
              <label htmlFor="business_account"></label>
              <input
                type="radio"
                name="type_of_account"
                id="business_account"
                value="Business"
              />
            </fieldset>
          </div>
        </>
      )}
    </form>
  );
}
