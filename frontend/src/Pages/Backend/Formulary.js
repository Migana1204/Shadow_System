import React, { useEffect, useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import { useProducts } from '../../context/context';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const Formulary = () => {
  const { createProduct, getProduct, updateProduct } = useProducts()
  const navigate = useNavigate()
  const params = useParams()
  const [product, setProduct] = useState({
    name: '',
    description: '',
    stock: 0,
    price: 0,
    image: null
  })
  useEffect(() => {
    (async () => {
      if(params.id){
        const res = await getProduct(params.id)
        setProduct(res)
      }
    })();
  }, [params.id]);
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
      <div className='px-10 container m-auto'>
        <div className='flex items-center justify-center'>
          <div className='bg-zinc-800 p-10 shadow-md shadow-black'>
            <header className='flex justify-between items-center py-4 text-white'>
              <h3 className='text-xl'>New Product</h3>
              <Link to='/backend' className='text-gray-400 text-sm hover:text-gray-300'>Go Back</Link>
            </header>
          <Formik initialValues={product}
          validationSchema={yup.object({
            name: yup.string().required("Name is Required"),
            description: yup.string().required("Description is Required"),
            price: yup.number().required("Price is Required")
          })}
          onSubmit={async (values, actions) => {
            if(params.id){
              await updateProduct(params.id, values)
            } else {
              await createProduct(values)
            }
            actions.setSubmitting(false)
            navigate('/backend')
          }}
          enableReinitialize = {true}
          >
            {({handleSubmit, setFieldValue, isSubmitting}) => (
              <Form onSubmit={handleSubmit}>
                <label htmlFor='name' className='text-sm block font-bold text-gray-400'>Name</label>
                <Field className="mb-4 px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" name="name" placeholder="Name"></Field>
                <ErrorMessage component="p" className='text-red-400 text-sm' name="name"></ErrorMessage>
                <label htmlFor='description' className='text-sm block font-bold text-gray-400'>Description</label>
                <Field component="textarea" rows="3" className="mb-4 px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" name="description" placeholder="Description"></Field>
                <ErrorMessage component="p" className='text-red-400 text-sm' name='description'></ErrorMessage>
                <label htmlFor='price' className='text-sm block font-bold text-gray-400'>Price</label>
                <Field type="number" className="mb-4 px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" name="price" placeholder="Price"></Field>
                <ErrorMessage component="p" className='text-red-400 text-sm' name='price'></ErrorMessage>
                <label htmlFor='image' className='text-sm block font-bold text-gray-400'>Image</label>
                <input onChange={(e) => setFieldValue("image",e.target.files[0])} type='file' name='image' className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'></input>
                
                <button disabled={isSubmitting} className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400' type='submit'>{isSubmitting ? (<AiOutlineLoading3Quarters className='animate-spin h-5 w-5'></AiOutlineLoading3Quarters>) : 'Save'}</button>
              </Form>
            )}
          </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
