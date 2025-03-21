import React from "react";
import FullLayout from "../../Layouts/FullLayout";
import "./instrument.scss";
import footer from "./img/SRA_Advertising.png";

// Icons Nav
import Socio from "./img/icon_1.svg";
import Family from "./img/icon_2.svg";
import Perso from "./img/icon_3.svg";
import Academy from "./img/icon_4.svg";
import Insti from "./img/icon_5.svg";
import SocioCheck from "./img/icon_check_1.svg";
import FamilyCheck from "./img/icon_check_2.svg";
import PersoCheck from "./img/icon_check_3.svg";
import AcademyCheck from "./img/icon_check_4.svg";
import InstiCheck from "./img/icon_check_5.svg";

// Icons Back/Next
import BackButton from "./img/icons/back_button.svg";
import NextButton from "./img/icons/next_button.svg";

const initialAnswers = {
  ingresos_economicos: "-1",
  rango_ingresos_mensuales: "-1",
  rango_ingresos_hogar: "-1",
  dispositivo_electronico: "-1",
  fuente_ingresos_hogar: "-1",
  personas_dependen: "-1",
  acceso_internet: "-1",
  vive_con: "-1",
  nivel_educativo_padre: "-1",
  nivel_educativo_madre: "-1",
  tiene_hijos: "-1",
  relacion_familiar: "-1",
  apoyo_emocional: "-1",
  rango_edad: "-1",
  estado_civil: "-1",
  condicion_salud: "-1",
  lugar_residencia: "-1",
  medio_transporte: "-1",
  interes_carrera: "-1",
  experiencia_aprendizaje: "-1",
  utilidad_carrera: "-1",
  dificultades_academicas: "-1",
  apoyo_academico: "-1",
  infraestructura: "-1",
  conectividad: "-1",
  calidad_servicio: "-1",
};

const initialErrors = {
  ingresos_economicos: true,
  rango_ingresos_mensuales: true,
  rango_ingresos_hogar: true,
  dispositivo_electronico: true,
  fuente_ingresos_hogar: true,
  personas_dependen: true,
  acceso_internet: true,
  vive_con: true,
  nivel_educativo_padre: true,
  nivel_educativo_madre: true,
  tiene_hijos: true,
  relacion_familiar: true,
  apoyo_emocional: true,
  rango_edad: true,
  estado_civil: true,
  condicion_salud: true,
  lugar_residencia: true,
  medio_transporte: true,
  interes_carrera: true,
  experiencia_aprendizaje: true,
  utilidad_carrera: true,
  dificultades_academicas: true,
  apoyo_academico: true,
  infraestructura: true,
  conectividad: true,
  calidad_servicio: true,
};

const Instrument = () => {
  const [answers, setAnswers] = React.useState(initialAnswers);
  const [errors, setErrors] = React.useState(initialErrors);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [result, setResult] = React.useState<{
    totalSum?: number;
    factor_socio?: number;
  }>({});
  const [step, setStep] = React.useState(1);

  React.useEffect(() => {
    // $("#smartwizard").smartWizard();
  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));

    if (value === "-1") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: true,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (isFormValid()) {
      setStep(6);
      const totalSum = Object.values(answers).reduce(
        (sum, value) => sum + (parseInt(value) || 0),
        0
      );
      console.log("Sumatoria total:", totalSum);

      const puntaje_socio_normalizado = (totalSum - 130) / (338 - 130); // Normalización del puntaje
      let factor_socio =
        puntaje_socio_normalizado * 0.4 +
        ((parseInt(answers.nivel_educativo_padre) +
          parseInt(answers.nivel_educativo_madre)) /
          8) *
          0.3 +
        (parseInt(answers.fuente_ingresos_hogar) / 4) * 0.3 -
        parseInt(answers.personas_dependen) * 0.05;
      factor_socio = Math.max(0, Math.min(1, factor_socio));

      console.log("EL FACTOR ES:", factor_socio);
      setResult({ totalSum, factor_socio });
    } else {
      console.log("Errorsitos", errors);
    }
  };

  const MessageError = (obj: boolean) => {
    return (
      obj && formSubmitted && <div className="text-danger">Campo requerido</div>
    );
  };

  const isFormValid = () => {
    return Object.values(errors).every((error) => error === false);
  };

  const handleBack = () => {
    step > 1 && setStep(step - 1);
  };

  const handleNext = () => {
    step < 5 && setStep(step + 1);
  };

  return (
    <FullLayout
      title="Cuestionario Sociodemográfico"
      desc="Este cuestionario tiene como objetivo bla bla bla"
    >
      <form onSubmit={handleSubmit}>
        <div id="smartwizard" className="marco">
          <ul className="nav">
            <li>
              <a
                type="button"
                className={`nav-link ${step === 1 ? "shadow" : "inactive"}`}
                onClick={() => setStep(1)}
              >
                <img
                  src={step === 1 ? SocioCheck : Socio}
                  alt="No Image"
                  style={{ marginRight: "8px" }}
                />{" "}
                Socioeconómico
              </a>
            </li>
            <li>
              <a
                type="button"
                className={`nav-link ${step === 2 ? "shadow" : "inactive"}`}
                onClick={() => setStep(2)}
              >
                <img
                  src={step === 2 ? FamilyCheck : Family}
                  alt="No Image"
                  style={{ marginRight: "8px" }}
                />{" "}
                Familiar
              </a>
            </li>
            <li>
              <a
                type="button"
                className={`nav-link ${step === 3 ? "shadow" : "inactive"}`}
                onClick={() => setStep(3)}
              >
                <img
                  src={step === 3 ? PersoCheck : Perso}
                  alt="No Image"
                  style={{ marginRight: "8px" }}
                />{" "}
                Personal
              </a>
            </li>
            <li>
              <a
                type="button"
                className={`nav-link ${step === 4 ? "shadow" : "inactive"}`}
                onClick={() => setStep(4)}
              >
                <img
                  src={step === 4 ? AcademyCheck : Academy}
                  alt="No Image"
                  style={{ marginRight: "8px" }}
                />{" "}
                Académico
              </a>
            </li>
            <li>
              <a
                type="button"
                className={`nav-link ${step === 5 ? "shadow" : ""}`}
                onClick={() => setStep(5)}
              >
                <img
                  src={step === 5 ? InstiCheck : Insti}
                  alt="No Image"
                  style={{ marginRight: "8px" }}
                />{" "}
                Institucional
              </a>
            </li>
            {/* <li>
              <a
                type="button"
                className={`nav-link icon ${step === 6 ? "active" : "inactive"}`}
              >
                <i className="icofont-check-alt"></i>
              </a>
            </li> */}
          </ul>

          <div className="tab-content">
            {step === 1 && (
              <div className="tab-panel">
                {/* Socioeconómico */}
                <section>
                  <div className="card-body pt-0">
                    <ol className="numeric-li row">
                      <div className="col gripy">
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Tiene una fuente de ingresos actualmente?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="ingresos_economicos"
                                className="form-control custom-select-inst"
                                value={answers.ingresos_economicos}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Empleado directo</option>
                                <option value="10">
                                  Contratista o informal
                                </option>
                                <option value="7">Emprendedor</option>
                                <option value="5">
                                  Sin ingresos economicos
                                </option>
                              </select>
                            </div>
                            {MessageError(errors.ingresos_economicos)}
                          </div>
                        </li>
                        {answers.ingresos_economicos !== "5" && (
                          <li>
                            <div className="form-group">
                              <label>
                                ¿Cuál es el rango de ingresos mensuales de su
                                actividad economica?
                              </label>
                              <div className="custom-select-inst-wrapper">
                                <select
                                  name="rango_ingresos_mensuales"
                                  className="form-control custom-select-inst"
                                  value={answers.rango_ingresos_mensuales}
                                  onChange={handleChange}
                                  disabled={
                                    answers.ingresos_economicos === "-1"
                                  }
                                >
                                  <option value="-1">
                                    Selecciona una opción
                                  </option>
                                  <option value="5">Menos de 1 SMMLV</option>
                                  <option value="7">Entre 1 y 2 SMMLV</option>
                                  <option value="10">Entre 2 y 4 SMMLV</option>
                                  <option value="13">Más de 4 SMMLV</option>
                                </select>
                              </div>
                              {MessageError(errors.rango_ingresos_mensuales)}
                            </div>
                          </li>
                        )}
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Cuál es el rango de ingresos mensuales del hogar?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="rango_ingresos_hogar"
                                className="form-control custom-select-inst"
                                value={answers.rango_ingresos_hogar}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="5">Menos de 1 SMMLV</option>
                                <option value="7">Entre 1 y 2 SMMLV</option>
                                <option value="10">Entre 2 y 4 SMMLV</option>
                                <option value="13">Más de 4 SMMLV</option>
                              </select>
                            </div>
                            {MessageError(errors.rango_ingresos_hogar)}
                          </div>
                        </li>
                      </div>
                      <div className="col gripy">
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Cuál es la fuente principal de ingresos con mayor
                              cuantia en su hogar?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="fuente_ingresos_hogar"
                                className="form-control custom-select-inst"
                                value={answers.fuente_ingresos_hogar}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Trabajo formal</option>
                                <option value="10">Trabajo informal</option>
                                <option value="7">Apoyo familiar</option>
                                <option value="5">Otros</option>
                              </select>
                            </div>
                            {MessageError(errors.fuente_ingresos_hogar)}
                          </div>
                        </li>
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Cuántas personas dependen económicamente de
                              usted?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="personas_dependen"
                                className="form-control custom-select-inst"
                                value={answers.personas_dependen}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Ninguna</option>
                                <option value="10">1-2</option>
                                <option value="7">3-5</option>
                                <option value="5">Más de 5</option>
                              </select>
                            </div>
                            {MessageError(errors.personas_dependen)}
                          </div>
                        </li>
                        {answers.ingresos_economicos !== "5" && (
                          <li>
                            <div className="form-group">
                              <label>
                                ¿Posee acceso a internet en su hogar?
                              </label>
                              <div className="radio-toggle">
                                <label
                                  className={`option ${
                                    answers.acceso_internet === "13"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="acceso_internet"
                                    value="13"
                                    className="radio-grad"
                                    checked={answers.acceso_internet === "13"}
                                    onChange={handleChange}
                                  />
                                  <span className="radio-indicator"></span>
                                  Sí
                                </label>

                                <label
                                  className={`option ${
                                    answers.acceso_internet === "5"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="acceso_internet"
                                    value="5"
                                    className="radio-grad"
                                    checked={answers.acceso_internet === "5"}
                                    onChange={handleChange}
                                  />
                                  <span className="radio-indicator"></span>
                                  No
                                </label>
                              </div>
                              {MessageError(errors.acceso_internet)}
                            </div>
                          </li>
                        )}
                      </div>
                      <div className="col gripy">
                        {answers.ingresos_economicos === "5" && (
                          <li>
                            <div className="form-group">
                              <label>
                                ¿Posee acceso a internet en su hogar?
                              </label>
                              <div className="radio-toggle">
                                <label
                                  className={`option ${
                                    answers.acceso_internet === "13"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="acceso_internet"
                                    value="13"
                                    className="radio-grad"
                                    checked={answers.acceso_internet === "13"}
                                    onChange={handleChange}
                                  />
                                  <span className="radio-indicator"></span>
                                  Sí
                                </label>

                                <label
                                  className={`option ${
                                    answers.acceso_internet === "5"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="acceso_internet"
                                    value="5"
                                    className="radio-grad"
                                    checked={answers.acceso_internet === "5"}
                                    onChange={handleChange}
                                  />
                                  <span className="radio-indicator"></span>
                                  No
                                </label>
                              </div>
                              {MessageError(errors.acceso_internet)}
                            </div>
                          </li>
                        )}
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Cuenta con un dispositivo electrónico para
                              estudiar?
                            </label>
                            <div className="radio-toggle">
                              <label
                                className={`option ${
                                  answers.dispositivo_electronico === "13"
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="dispositivo_electronico"
                                  value="13"
                                  className="radio-grad"
                                  checked={
                                    answers.dispositivo_electronico === "13"
                                  }
                                  onChange={handleChange}
                                />
                                <span className="radio-indicator"></span>
                                Sí
                              </label>

                              <label
                                className={`option ${
                                  answers.dispositivo_electronico === "5"
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="dispositivo_electronico"
                                  value="5"
                                  className="radio-grad"
                                  checked={
                                    answers.dispositivo_electronico === "5"
                                  }
                                  onChange={handleChange}
                                />
                                <span className="radio-indicator"></span>
                                No
                              </label>
                            </div>
                            {MessageError(errors.dispositivo_electronico)}
                          </div>
                        </li>
                      </div>
                    </ol>
                  </div>
                </section>
              </div>
            )}
            {step === 2 && (
              <div className="tab-panel">
                {/* Familiar */}
                <section>
                  <div className="card-body pt-0">
                    <ol className="numeric-li row">
                      <div className="col gripy">
                        <li>
                          <div className="form-group">
                            <label>¿Con quién vive actualmente?</label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="vive_con"
                                className="form-control custom-select-inst"
                                value={answers.vive_con}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Con mi familia</option>
                                <option value="10">Solo/a</option>
                                <option value="7">
                                  En residencia universitaria
                                </option>
                                <option value="5">Con amigos</option>
                              </select>
                            </div>
                            {MessageError(errors.vive_con)}
                          </div>
                        </li>
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Cuál es el nivel educativo más alto alcanzado por
                              su padre?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="nivel_educativo_padre"
                                className="form-control custom-select-inst"
                                value={answers.nivel_educativo_padre}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="5">Primaria incompleta</option>
                                <option value="7">Primaria completa</option>
                                <option value="10">Secundaria</option>
                                <option value="13">
                                  Estudios técnicos o universitarios
                                </option>
                              </select>
                            </div>
                            {MessageError(errors.nivel_educativo_padre)}
                          </div>
                        </li>
                      </div>
                      <div className="col gripy">
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Cuál es el nivel educativo más alto alcanzado por
                              su madre?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="nivel_educativo_madre"
                                className="form-control custom-select-inst"
                                value={answers.nivel_educativo_madre}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="5">Primaria incompleta</option>
                                <option value="7">Primaria completa</option>
                                <option value="10">Secundaria</option>
                                <option value="13">
                                  Estudios técnicos o universitarios
                                </option>
                              </select>
                            </div>
                            {MessageError(errors.nivel_educativo_madre)}
                          </div>
                        </li>
                        <li>
                          <div className="form-group">
                            <label>¿Tiene hijos a su cargo?</label>
                            <div className="radio-toggle">
                              <label
                                className={`option ${
                                  answers.tiene_hijos === "5" ? "active" : ""
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="tiene_hijos"
                                  value="5"
                                  className="radio-grad"
                                  checked={answers.tiene_hijos === "5"}
                                  onChange={handleChange}
                                />
                                <span className="radio-indicator"></span>
                                Sí
                              </label>

                              <label
                                className={`option ${
                                  answers.tiene_hijos === "13" ? "active" : ""
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="tiene_hijos"
                                  value="13"
                                  className="radio-grad"
                                  checked={answers.tiene_hijos === "13"}
                                  onChange={handleChange}
                                />
                                <span className="radio-indicator"></span>
                                No
                              </label>
                            </div>
                            {MessageError(errors.tiene_hijos)}
                          </div>
                        </li>
                      </div>
                      <div className="col gripy">
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Cómo describe la relación con su familia?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="relacion_familiar"
                                className="form-control custom-select-inst"
                                value={answers.relacion_familiar}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Muy buena</option>
                                <option value="10">Buena</option>
                                <option value="7">Regular</option>
                                <option value="5">Mala</option>
                              </select>
                            </div>
                            {MessageError(errors.relacion_familiar)}
                          </div>
                        </li>
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Alguien en su familia le apoya emocionalmente en
                              sus estudios?
                            </label>
                            <div className="radio-toggle">
                              <label
                                className={`option ${
                                  answers.apoyo_emocional === "13"
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="apoyo_emocional"
                                  value="13"
                                  className="radio-grad"
                                  checked={answers.apoyo_emocional === "13"}
                                  onChange={handleChange}
                                />
                                <span className="radio-indicator"></span>
                                Sí
                              </label>

                              <label
                                className={`option ${
                                  answers.apoyo_emocional === "5"
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="apoyo_emocional"
                                  value="5"
                                  className="radio-grad"
                                  checked={answers.apoyo_emocional === "5"}
                                  onChange={handleChange}
                                />
                                <span className="radio-indicator"></span>
                                No
                              </label>
                            </div>
                            {MessageError(errors.apoyo_emocional)}
                          </div>
                        </li>
                      </div>
                    </ol>
                  </div>
                </section>
              </div>
            )}
            {step === 3 && (
              <div className="tab-panel">
                {/* Personal */}
                <section>
                  <div className="card-body pt-0">
                    <ol className="numeric-li row">
                      <div className="col gripy">
                        <li>
                          <div className="form-group">
                            <label>¿Cuál es su rango de edad?</label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="rango_edad"
                                className="form-control custom-select-inst"
                                value={answers.rango_edad}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Menos de 20 años</option>
                                <option value="10">20-25 años</option>
                                <option value="7">26-30 años</option>
                                <option value="5">Más de 30 años</option>
                              </select>
                            </div>
                            {MessageError(errors.rango_edad)}
                          </div>
                        </li>
                        <li>
                          <div className="form-group">
                            <label>¿Cuál es su estado civil?</label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="estado_civil"
                                className="form-control custom-select-inst"
                                value={answers.estado_civil}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Soltero/a</option>
                                <option value="10">
                                  Casado/a o en unión libre
                                </option>
                                <option value="7">Divorciado/a</option>
                                <option value="5">Viudo/a</option>
                              </select>
                            </div>
                            {MessageError(errors.estado_civil)}
                          </div>
                        </li>
                      </div>
                      <div className="col gripy">
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Tiene alguna condición de salud especial o
                              discapacidad?
                            </label>
                            <div className="radio-toggle">
                              <label
                                className={`option ${
                                  answers.condicion_salud === "5"
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="condicion_salud"
                                  value="5"
                                  className="radio-grad"
                                  checked={answers.condicion_salud === "5"}
                                  onChange={handleChange}
                                />
                                <span className="radio-indicator"></span>
                                Sí
                              </label>

                              <label
                                className={`option ${
                                  answers.condicion_salud === "13"
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="condicion_salud"
                                  value="13"
                                  className="radio-grad"
                                  checked={answers.condicion_salud === "13"}
                                  onChange={handleChange}
                                />
                                <span className="radio-indicator"></span>
                                No
                              </label>
                            </div>
                            {MessageError(errors.condicion_salud)}
                          </div>
                        </li>
                        <li>
                          <div className="form-group">
                            <label>¿Cuál es su lugar de residencia?</label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="lugar_residencia"
                                className="form-control custom-select-inst"
                                value={answers.lugar_residencia}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Zona urbana</option>
                                <option value="5">Zona rural</option>
                              </select>
                            </div>
                            {MessageError(errors.lugar_residencia)}
                          </div>
                        </li>
                      </div>
                      <div className="col gripy">
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Qué medio de transporte utiliza con mayor
                              frecuencia para llegar a la universidad?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="medio_transporte"
                                className="form-control custom-select-inst"
                                value={answers.medio_transporte}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Transporte público</option>
                                <option value="10">Vehículo propio</option>
                                <option value="7">Bicicleta</option>
                                <option value="5">Caminando</option>
                              </select>
                            </div>
                            {MessageError(errors.medio_transporte)}
                          </div>
                        </li>
                      </div>
                    </ol>
                  </div>
                </section>
              </div>
            )}
            {step === 4 && (
              <div className="tab-panel">
                {/* Académico */}
                <section>
                  <div className="card-body pt-0">
                    <ol className="numeric-li row">
                      <div className="col gripy">
                        <li>
                          <div className="form-group">
                            <label>
                              ¿La carrera que estaba estudiando era de su
                              interés personal?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="interes_carrera"
                                className="form-control custom-select-inst"
                                value={answers.interes_carrera}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">
                                  Totalmente de mi interés
                                </option>
                                <option value="10">Algo de mi interés</option>
                                <option value="7">Poco de mi interés</option>
                                <option value="5">Nada de mi interés</option>
                              </select>
                            </div>
                            {MessageError(errors.interes_carrera)}
                          </div>
                        </li>
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Cómo califica su experiencia de aprendizaje?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="experiencia_aprendizaje"
                                className="form-control custom-select-inst"
                                value={answers.experiencia_aprendizaje}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Excelente</option>
                                <option value="10">Buena</option>
                                <option value="7">Regular</option>
                                <option value="5">Mala</option>
                              </select>
                            </div>
                            {MessageError(errors.experiencia_aprendizaje)}
                          </div>
                        </li>
                      </div>
                      <div className="col gripy">
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Qué tan útil considera que es la carrera
                              profesional?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="utilidad_carrera"
                                className="form-control custom-select-inst"
                                value={answers.utilidad_carrera}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Muy útil</option>
                                <option value="10">Bastante útil</option>
                                <option value="7">Poco útil</option>
                                <option value="5">Nada útil</option>
                              </select>
                            </div>
                            {MessageError(errors.utilidad_carrera)}
                          </div>
                        </li>
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Cuáles fueron las principales dificultades
                              académicas que enfrentó mientras estudiaba?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="dificultades_academicas"
                                className="form-control custom-select-inst"
                                value={answers.dificultades_academicas}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">
                                  Comprensión de los contenidos
                                </option>
                                <option value="10">Gestión del tiempo</option>
                                <option value="7">
                                  Relación con profesores
                                </option>
                                <option value="5">Falta de recursos</option>
                              </select>
                            </div>
                            {MessageError(errors.dificultades_academicas)}
                          </div>
                        </li>
                      </div>
                    </ol>
                  </div>
                </section>
              </div>
            )}
            {step === 5 && (
              <div className="tab-panel">
                {/* Institucional */}
                <section>
                  <div className="card-body pt-0">
                    <ol className="numeric-li row">
                      <div className="col gripy">
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Considera que recibió suficiente apoyo académico
                              por parte de la universidad?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="apoyo_academico"
                                className="form-control custom-select-inst"
                                value={answers.apoyo_academico}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Sí, en todo momento</option>
                                <option value="10">Sí, pocas ocasiones</option>
                                <option value="7">No, nunca</option>
                                <option value="5">No lo solicité</option>
                              </select>
                            </div>
                            {MessageError(errors.apoyo_academico)}
                          </div>
                        </li>
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Cómo califica la infraestructura física de la
                              institución?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="infraestructura"
                                className="form-control custom-select-inst"
                                value={answers.infraestructura}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Excelente</option>
                                <option value="10">Buena</option>
                                <option value="7">Regular</option>
                                <option value="5">Mala</option>
                              </select>
                            </div>
                            {MessageError(errors.infraestructura)}
                          </div>
                        </li>
                      </div>
                      <div className="col gripy">
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Cómo evalúa la calidad de la conectividad a
                              internet en la institución?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="conectividad"
                                className="form-control custom-select-inst"
                                value={answers.conectividad}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">Muy buena</option>
                                <option value="10">Buena</option>
                                <option value="7">Regular</option>
                                <option value="5">Mala</option>
                              </select>
                            </div>
                            {MessageError(errors.conectividad)}
                          </div>
                        </li>
                        <li>
                          <div className="form-group">
                            <label>
                              ¿Qué percepción tiene sobre la calidad del
                              servicio ofrecido por el personal administrativo?
                            </label>
                            <div className="custom-select-inst-wrapper">
                              <select
                                name="calidad_servicio"
                                className="form-control custom-select-inst"
                                value={answers.calidad_servicio}
                                onChange={handleChange}
                              >
                                <option value="-1">
                                  Selecciona una opción
                                </option>
                                <option value="13">
                                  Muy eficiente y amable
                                </option>
                                <option value="10">
                                  Eficiente pero poco amable
                                </option>
                                <option value="7">
                                  Poco eficiente pero amable
                                </option>
                                <option value="5">
                                  Poco eficiente y poco amable
                                </option>
                              </select>
                            </div>
                            {MessageError(errors.calidad_servicio)}
                          </div>
                        </li>
                      </div>
                    </ol>
                  </div>
                  <button type="submit" className="btn btn-primary mx-4 mb-4">
                    Enviar
                  </button>
                </section>
              </div>
            )}
            {step === 6 && (
              <div className="tab-panel">
                <section>
                  <div className="card-body pt-0">
                    <h4 className="font-30 mb-20">Done Successfully!</h4>
                    <p>Your form has been submitted successfully.</p>
                    <div className="mx-4">
                      INFO DEL TEST: <br />-{result.totalSum} <br />-
                      {result.factor_socio}
                    </div>
                  </div>
                </section>
              </div>
            )}
            <div style={{ justifySelf: "right", display: 'flex', alignItems: 'center' }}>
              <a className="back-but" onClick={handleBack}>
                <img src={BackButton} alt="No icon" width={27} />
              </a>
              {/* <div className="loader">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={handleNext}
                >
                  <img src={NextButton} alt="No icon" width={50} />
                </a>
              </div> */}
              <div className="loader">
                <span>{"->"}</span>
                {/* <a
                  style={{ cursor: "pointer" }}
                  onClick={handleNext}
                >
                  <img src={NextButton} alt="No icon" width={50} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={footer} alt="" />
        </div>
      </form>
    </FullLayout>
  );
};

export default Instrument;
