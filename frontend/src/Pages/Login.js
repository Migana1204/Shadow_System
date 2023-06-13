import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useProducts } from '../context/context';
import { Link } from 'react-router-dom';


export function Login() {
  const { validateUser } = useProducts();
  const initialValues = {
    email: '',
    password: ''
  };

  const handleSubmit = async (values) => {
    try {
      await validateUser(values);
    } catch (error) {
      console.log(error);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email address is required';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  return (
    <>
      <div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between relative mt-14'>
        <div className="divImgLogin relative">
          <Link to="/inicio"><i className="fa-solid fa-house text-white text-lg absolute mt-[40px] ml-[5px] py-3 px-4 rounded-full bg-indigo-600 hover:bg-indigo-500"></i></Link>
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className=" pt-[25px] mt-[32px] bg-gray-600 rounded-l-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
            alt="Phone image"
            width={'790'} />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-8 border-l-[0px] border-[5px] rounded-r-3xl h-[423px] border-gray-600 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Inicia sesión con tu cuenta
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validate={validate}
            >
              <Form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">
                    Email
                  </label>
                  <div className="mt-2">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Contraseña
                    </label>
                  </div>
                  <div className="mt-2">
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
