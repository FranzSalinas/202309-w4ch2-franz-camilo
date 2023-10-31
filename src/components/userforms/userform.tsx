import { User } from '../../models/user';
import { SyntheticEvent, useState } from 'react';
export function UserForm() {
  const initialState: User = {
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

  const [userState, setUserState] = useState(initialState);
  const [actualPage, setActualPage] = useState(1);

  const handleChange = (ev: SyntheticEvent) => {
    const control = ev.target as HTMLInputElement;
    const value = control.type === 'checkbox' ? control.checked : control.value;
    const name = control.name;
    setUserState({ ...userState, [name]: value });
  };
  const handleChangePage = (increment: number) => {
    if (
      /*  No sabemos porque no funciona (actualPage === 1 &&
        (initialState.name === userState.name ||
          initialState.userSurname === userState.userSurname ||
          initialState.birthdate === userState.birthdate ||
          initialState.gender === userState.gender ||
          initialState.email === userState.email ||
          initialState.isOk === userState.isOk)) ||
      (actualPage === 2 &&
        (initialState.userName === userState.userName ||
          initialState.password === userState.password ||
          initialState.repeatPassword === userState.repeatPassword ||
          userState.repeatPassword === userState.repeatPassword)) || */
      (increment === 1 && actualPage === 4) ||
      (increment === -1 && actualPage === 1)
    ) {
      console.log('completa los campos');
      setActualPage(actualPage);
    } else {
      setActualPage(actualPage + increment);
    }
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(initialState);
    console.log(userState);
  };
  return (
    <form className={`user-form_${actualPage}`} onSubmit={handleSubmit}>
      {actualPage === 1 && (
        <>
          <div className="form-control">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="userSurname">Apellido</label>
            <input
              type="text"
              name="userSurname"
              id="userSurname"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="birthday">Fecha de Nacimiento</label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <fieldset onChange={handleChange}>
              <legend>Selecciona tu género</legend>
              <label htmlFor="male">Hombre</label>
              <input type="radio" name="gender" id="male" value="Male" />
              <label htmlFor="female">Mujer</label>
              <input type="radio" name="gender" id="female" value="Female" />
              <label htmlFor="other">Otro</label>
              <input type="radio" name="gender" id="other" value="Other" />
              <label htmlFor="prefer_no_mention">Prefiero no decirlo</label>
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
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="isOk"> ¿Quieres recibir nuestra newsletter?</label>
            <input
              type="checkbox"
              name="isOk"
              id="isOk"
              onChange={handleChange}
              required
            />
          </div>
        </>
      )}
      {actualPage === 2 && (
        <>
          <div className="form-control">
            <label htmlFor="username">Nombre de Usuario</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="repeat_password">Repite tu contraseña</label>
            <input
              type="password"
              name="repeat_password"
              id="repeat_password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <fieldset onChange={handleChange}>
              <legend>Selecciona tu tipo de cuenta</legend>
              <label htmlFor="personal_account"> Personal </label>
              <input
                type="radio"
                name="type_of_account"
                id="personal_account"
                value="Personal"
              />
              <label htmlFor="pro_account"> Pro </label>
              <input
                type="radio"
                name="type_of_account"
                id="pro_account"
                value="Pro"
                onChange={handleChange}
              />
              <label htmlFor="business_account"> Bussines</label>
              <input
                type="radio"
                name="type_of_account"
                id="business_account"
                value="Business"
                onChange={handleChange}
              />
            </fieldset>
          </div>
        </>
      )}
      {actualPage === 3 && (
        <>
          <p> Tu nombre es {userState.name} </p>
          <p> Tu apellido es {userState.userSurname} </p>
          <p> Tu cumpleaños {userState.birthdate} </p>
          <p> Tu email {userState.email} </p>
          <p> Tu nombre de usuario es {userState.userName} </p>
        </>
      )}
      {actualPage === 4 && (
        <>
          <div className="form-control">
            <label htmlFor="username">Nombre de Usuario</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" />
          </div>
        </>
      )}

      <div className="buttons">
        <button type="button" onClick={() => handleChangePage(+1)}>
          Siguiente
        </button>
        <button type="button" onClick={() => handleChangePage(-1)}>
          Atras
        </button>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
