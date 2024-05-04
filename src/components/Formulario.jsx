import { useState } from 'react'

const Formulario = ({ setAlert }) => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const validate = (e) => {
    e.preventDefault()

    if (
      nombre.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirm.trim() === ''
    ) {
      setAlert({ msg: 'Debes completar todos los campos!', color: 'warning' })
      return
    }

    if (password !== confirm) {
      setAlert({ msg: 'Las contraseñas no son iguales', color: 'danger' })
      return
    }
    setAlert({ msg: 'cuenta creada exitosamente', color: 'success' })
    setNombre('')
    setEmail('')
    setPassword('')
    setConfirm('')
  }
  return (
    <>
      <form onSubmit={validate}>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            id='inputName'
            placeholder='Nombre'
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className='mb-3'>
          <input
            type='email'
            className='form-control'
            id='inputEmail'
            placeholder='Ingresa tu email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='mb-3'>
          <input
            type='password'
            className='form-control'
            id='inputPassword'
            placeholder='Ingresa tu contaseña'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className='mb-3'>
          <input
            type='password'
            className='form-control'
            id='inputConfirm'
            placeholder='Repite tu contraseña'
            onChange={(e) => setConfirm(e.target.value)}
            value={confirm}
          />
        </div>

        <button type='submit' className='btn btn-primary mb-3'>
          Registrase
        </button>
      </form>
    </>
  )
}

export default Formulario
