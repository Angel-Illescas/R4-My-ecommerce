import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
        navigate('/'); // Redirigir a la página de inicio (Home)
    };


    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            area: "",
            numero_trabajador: "",
            correo: "",
            contraseña: "",
            confirmarContraseña: "",
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("El nombre es requerido"),
            apellido: Yup.string().required("El apellido es requerido"),
            area: Yup.string().required("El área es requerida"),
            numero_trabajador: Yup.number().required("El número de trabajador es requerido"),
            correo: Yup.string().email("Correo electrónico inválido").required("El correo electrónico es requerido"),
            contraseña: Yup.string().required('La contraseña es requerida'),
            confirmarContraseña: Yup.string()
                .required('Debes confirmar tu contraseña')
                .oneOf([Yup.ref('contraseña'), null], 'Las contraseñas deben coincidir'),
        }),
        onSubmit: (values) => {
            console.log(values);

            axios.post('http://localhost:3001/usuarios', values)
                .then(response => {
                    console.log(response.data);
                    setModalOpen(true);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    });

    return (
        <div className="basis-1/2 mb-6">
            <h1 className="text-xl font-bold">Registro de nuevo usuario</h1>
            <br />

            <form onSubmit={formik.handleSubmit}>
                <div className="form-control w-full">
                    <label htmlFor="nombre" className="label">
                        <span className="label-text">Nombre del usuario</span>
                    </label>
                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Nombre(s)"
                        className="input input-sm input-bordered w-full"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.nombre && formik.errors.nombre && (
                        <div className="text-red-500">{formik.errors.nombre}</div>
                    )}
                </div>

                <div className="form-control w-full">
                    <label htmlFor="apellido" className="label">
                        <span className="label-text">Apellido del usuario</span>
                    </label>
                    <input
                        id="apellido"
                        name="apellido"
                        type="text"
                        placeholder="Apellido(s)"
                        className="input input-sm input-bordered w-full"
                        value={formik.values.apellido}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.apellido && formik.errors.apellido && (
                        <div className="text-red-500">{formik.errors.apellido}</div>
                    )}
                </div>

                <div className="form-control w-full">
                    <label htmlFor="area" className="label">
                        <span className="label-text">Área de trabajo</span>
                    </label>
                    <input
                        id="area"
                        name="area"
                        type="text"
                        placeholder="Área"
                        className="input input-sm input-bordered w-full"
                        value={formik.values.area}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.area && formik.errors.area && (
                        <div className="text-red-500">{formik.errors.area}</div>
                    )}
                </div>

                <div className="form-control w-full">
                    <label htmlFor="numero_trabajador" className="label">
                        <span className="label-text">N° de trabajador</span>
                    </label>
                    <input
                        id="numero_trabajador"
                        name="numero_trabajador"
                        type="number"
                        placeholder="N°"
                        className="input input-sm input-bordered w-full"
                        value={formik.values.numero_trabajador}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.numero_trabajador && formik.errors.numero_trabajador && (
                        <div className="text-red-500">{formik.errors.numero_trabajador}</div>
                    )}
                </div>

                <div className="form-control w-full">
                    <label htmlFor="correo" className="label">
                        <span className="label-text">Correo electrónico</span>
                    </label>
                    <input
                        id="correo"
                        name="correo"
                        type="email"
                        placeholder="ejemplo@gmail.com"
                        className="input input-sm input-bordered w-full"
                        value={formik.values.correo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.correo && formik.errors.correo && (
                        <div className="text-red-500">{formik.errors.correo}</div>
                    )}
                </div>

                <div className="form-control w-full">
                    <label htmlFor="contraseña" className="label">
                        <span className="label-text">Contraseña</span>
                    </label>
                    <input
                        id="contraseña"
                        name="contraseña"
                        type="password"
                        placeholder="contraseña"
                        className="input input-sm input-bordered w-full"
                        value={formik.values.contraseña}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.contraseña && formik.errors.contraseña && (
                        <div className="text-red-500">{formik.errors.contraseña}</div>
                    )}
                </div>
                <div className="form-control w-full">
                    <label htmlFor="confirmarContraseña" className="label">
                        <span className="label-text">Confirmar Contraseña</span>
                    </label>
                    <input
                        id="confirmarContraseña"
                        name="confirmarContraseña"
                        type="password"
                        placeholder="Confirmar contraseña"
                        className="input input-sm input-bordered w-full"
                        value={formik.values.confirmarContraseña}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.confirmarContraseña && formik.errors.confirmarContraseña && (
                        <div className="text-red-500">{formik.errors.confirmarContraseña}</div>
                    )}
                </div>
                <br />

                <div className="flex justify-center">
                    <button
                        className="btn btn-wide btn-accent text-white bg-my-blue"
                        type="submit"
                    >
                        Registrar
                    </button>
                </div>
            </form>

            <ReactModal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="Registro Exitoso"
                className="fixed inset-0 flex items-center justify-center m-5"
                overlayClassName="fixed inset-0 bg-black opacity-50"
            >
                <div className="bg-my-blue rounded p-4 text-black  ">
                    <h2 className="text-lg font-bold mb-2">El registro de {formik.values.nombre} ha sido éxitoso.</h2>
                    <button className="btn bg-white" onClick={closeModal}>Cerrar</button>
                </div>
            </ReactModal>
        </div>
    );
};

export default Formulario;