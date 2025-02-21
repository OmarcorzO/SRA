import React from "react";
import FullLayout from "../../Layouts/FullLayout";
import StepWizard from "react-step-wizard";


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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

  const handleStepChange = (e: any) => {
    console.log(e)
    setStep(e.activeStep - 1)
  }

  const handleBack = () => {

  }

  const handleNext = () => {

  }

  return (
    <FullLayout>
      <StepWizard onStepChange={handleStepChange}>
        <div>1</div>
        <div>2</div>
      </StepWizard>
      <button onClick={handleBack}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <form>
        <h3 className="font-20 mt-30 mx-4">Cuestionario Sociodemográfico</h3>
        <div id="smartwizard" className="custom-wizard">
          <ul className="nav">
            <li>
              <a
                type="button"
                className={`nav-link ${step === 1 ? "active" : ""}`}
                onClick={() => setStep(1)}
              >
                Socioeconómico
              </a>
            </li>
            <li>
              <a
                type="button"
                className={`nav-link ${step === 2 ? "active" : ""}`}
                onClick={() => setStep(2)}
              >
                Familiar
              </a>
            </li>
            <li>
              <a
                type="button"
                className={`nav-link ${step === 3 ? "active" : ""}`}
                onClick={() => setStep(3)}
              >
                Personal
              </a>
            </li>
            <li>
              <a
                type="button"
                className={`nav-link ${step === 3 ? "active" : ""}`}
                onClick={() => setStep(4)}
              >
                Académico
              </a>
            </li>
            <li>
              <a
                type="button"
                className={`nav-link ${step === 3 ? "active" : ""}`}
                onClick={() => setStep(5)}
              >
                Institucional
              </a>
            </li>
            <li>
              <a
                type="button"
                className={`nav-link ${step === 3 ? "active" : ""}`}
                onClick={() => setStep(6)}
              >
                <i className="icofont-check-alt"></i>
              </a>
            </li>
          </ul>

          <div className="tab-content">
            {step === 1 && (
              <div className="tab-panel">
                {/* Socioeconómico */}
                <section>
                  <div className="card-body pt-0">
                    <h4 className="font-20 mb-20">Socioeconómico</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Tiene una forma de ingresos económicos actualmente?
                          </label>
                          <select
                            name="ingresos_economicos"
                            className="form-control"
                            value={answers.ingresos_economicos}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Empleado directo</option>
                            <option value="10">Contratista o informal</option>
                            <option value="7">Emprendedor</option>
                            <option value="5">Sin ingresos economicos</option>
                          </select>
                          {MessageError(errors.ingresos_economicos)}
                        </div>
                        {answers.ingresos_economicos !== "5" && (
                          <div className="form-group">
                            <label className="font-14 bold mb-2">
                              ¿Cuál es el rango de ingresos mensuales de su
                              actividad economica?
                            </label>
                            <select
                              name="rango_ingresos_mensuales"
                              className="form-control"
                              value={answers.rango_ingresos_mensuales}
                              onChange={handleChange}
                            >
                              <option value="-1">---Seleccione---</option>
                              <option value="5">Menos de 1 SMMLV</option>
                              <option value="7">Entre 1 y 2 SMMLV</option>
                              <option value="10">Entre 2 y 4 SMMLV</option>
                              <option value="13">Más de 4 SMMLV</option>
                            </select>
                            {MessageError(errors.rango_ingresos_mensuales)}
                          </div>
                        )}
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cuál es el rango de ingresos mensuales del hogar?
                          </label>
                          <select
                            name="rango_ingresos_hogar"
                            className="form-control"
                            value={answers.rango_ingresos_hogar}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="5">Menos de 1 SMMLV</option>
                            <option value="7">Entre 1 y 2 SMMLV</option>
                            <option value="10">Entre 2 y 4 SMMLV</option>
                            <option value="13">Más de 4 SMMLV</option>
                          </select>
                          {MessageError(errors.rango_ingresos_hogar)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cuenta con un dispositivo electronico para
                            estudiar?
                          </label>
                          <select
                            name="dispositivo_electronico"
                            className="form-control"
                            value={answers.dispositivo_electronico}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                          </select>
                          {MessageError(errors.dispositivo_electronico)}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cuál es la fuente principal de ingresos con mayor
                            cuantia en su hogar?
                          </label>
                          <select
                            name="fuente_ingresos_hogar"
                            className="form-control"
                            value={answers.fuente_ingresos_hogar}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Trabajo formal</option>
                            <option value="10">Trabajo informal</option>
                            <option value="7">Apoyo familiar</option>
                            <option value="5">Otros</option>
                          </select>
                          {MessageError(errors.fuente_ingresos_hogar)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cuántas personas dependen económicamente de usted?
                          </label>
                          <select
                            name="personas_dependen"
                            className="form-control"
                            value={answers.personas_dependen}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Ninguna</option>
                            <option value="10">1-2</option>
                            <option value="7">3-5</option>
                            <option value="5">Más de 5</option>
                          </select>
                          {MessageError(errors.personas_dependen)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Posee acceso a internet en su hogar?
                          </label>
                          <select
                            name="acceso_internet"
                            className="form-control"
                            value={answers.acceso_internet}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Sí</option>
                            <option value="5">No</option>
                          </select>
                          {MessageError(errors.acceso_internet)}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
            {step === 2 && (
              <div className="tab-panel">
                {/* Familiar */}
                <section>
                  <div className="card-body pt-0">
                    <h4 className="font-20 mb-20">Familiar</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Con quién vive actualmente?
                          </label>
                          <select
                            name="vive_con"
                            className="form-control"
                            value={answers.vive_con}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Con mi familia</option>
                            <option value="10">Solo/a</option>
                            <option value="7">
                              En residencia universitaria
                            </option>
                            <option value="5">Con amigos</option>
                          </select>
                          {MessageError(errors.vive_con)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cuál es el nivel educativo más alto alcanzado por
                            su padre?
                          </label>
                          <select
                            name="nivel_educativo_padre"
                            className="form-control"
                            value={answers.nivel_educativo_padre}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="5">Primaria incompleta</option>
                            <option value="7">Primaria completa</option>
                            <option value="10">Secundaria</option>
                            <option value="13">
                              Estudios técnicos o universitarios
                            </option>
                          </select>
                          {MessageError(errors.nivel_educativo_padre)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cuál es el nivel educativo más alto alcanzado por
                            su madre?
                          </label>
                          <select
                            name="nivel_educativo_madre"
                            className="form-control"
                            value={answers.nivel_educativo_madre}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="5">Primaria incompleta</option>
                            <option value="7">Primaria completa</option>
                            <option value="10">Secundaria</option>
                            <option value="13">
                              Estudios técnicos o universitarios
                            </option>
                          </select>
                          {MessageError(errors.nivel_educativo_madre)}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Tiene hijos a su cargo?
                          </label>
                          <select
                            name="tiene_hijos"
                            className="form-control"
                            value={answers.tiene_hijos}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="5">Sí</option>
                            <option value="13">No</option>
                          </select>
                          {MessageError(errors.tiene_hijos)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cómo describe la relación con su familia?
                          </label>
                          <select
                            name="relacion_familiar"
                            className="form-control"
                            value={answers.relacion_familiar}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Muy buena</option>
                            <option value="10">Buena</option>
                            <option value="7">Regular</option>
                            <option value="5">Mala</option>
                          </select>
                          {MessageError(errors.relacion_familiar)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Alguien en su familia le apoya emocionalmente en
                            sus estudios?
                          </label>
                          <select
                            name="apoyo_emocional"
                            className="form-control"
                            value={answers.apoyo_emocional}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Sí</option>
                            <option value="5">No</option>
                          </select>
                          {MessageError(errors.apoyo_emocional)}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
            {step === 3 && (
              <div className="tab-panel">
                {/* Personal */}
                <section>
                  <div className="card-body pt-0">
                    <h4 className="font-20 mb-20">Personal</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cuál es su rango de edad?
                          </label>
                          <select
                            name="rango_edad"
                            className="form-control"
                            value={answers.rango_edad}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Menos de 20 años</option>
                            <option value="10">20-25 años</option>
                            <option value="7">26-30 años</option>
                            <option value="5">Más de 30 años</option>
                          </select>
                          {MessageError(errors.rango_edad)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cuál es su estado civil?
                          </label>
                          <select
                            name="estado_civil"
                            className="form-control"
                            value={answers.estado_civil}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Soltero/a</option>
                            <option value="10">
                              Casado/a o en unión libre
                            </option>
                            <option value="7">Divorciado/a</option>
                            <option value="5">Viudo/a</option>
                          </select>
                          {MessageError(errors.estado_civil)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Tiene alguna condición de salud especial o
                            discapacidad?
                          </label>
                          <select
                            name="condicion_salud"
                            className="form-control"
                            value={answers.condicion_salud}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="5">Sí</option>
                            <option value="13">No</option>
                          </select>
                          {MessageError(errors.condicion_salud)}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cuál es su lugar de residencia?
                          </label>
                          <select
                            name="lugar_residencia"
                            className="form-control"
                            value={answers.lugar_residencia}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Zona urbana</option>
                            <option value="5">Zona rural</option>
                          </select>
                          {MessageError(errors.lugar_residencia)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Qué medio de transporte utiliza con mayor
                            frecuencia para llegar a la universidad?
                          </label>
                          <select
                            name="medio_transporte"
                            className="form-control"
                            value={answers.medio_transporte}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Transporte público</option>
                            <option value="10">Vehículo propio</option>
                            <option value="7">Bicicleta</option>
                            <option value="5">Caminando</option>
                          </select>
                          {MessageError(errors.medio_transporte)}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
            {step === 4 && (
              <div className="tab-panel">
                {/* Académico */}
                <section>
                  <div className="card-body pt-0">
                    <h4 className="font-20 mb-20">Académico</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿La carrera que estaba estudiando era de su interés
                            personal?
                          </label>
                          <select
                            name="interes_carrera"
                            className="form-control"
                            value={answers.interes_carrera}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Totalmente de mi interés</option>
                            <option value="10">Algo de mi interés</option>
                            <option value="7">Poco de mi interés</option>
                            <option value="5">Nada de mi interés</option>
                          </select>
                          {MessageError(errors.interes_carrera)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cómo califica su experiencia de aprendizaje?
                          </label>
                          <select
                            name="experiencia_aprendizaje"
                            className="form-control"
                            value={answers.experiencia_aprendizaje}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Excelente</option>
                            <option value="10">Buena</option>
                            <option value="7">Regular</option>
                            <option value="5">Mala</option>
                          </select>
                          {MessageError(errors.experiencia_aprendizaje)}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Qué tan útil considera que es la carrera estudiada
                            con su actualproyecto de vida y profesional?
                          </label>
                          <select
                            name="utilidad_carrera"
                            className="form-control"
                            value={answers.utilidad_carrera}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Muy útil</option>
                            <option value="10">Bastante útil</option>
                            <option value="7">Poco útil</option>
                            <option value="5">Nada útil</option>
                          </select>
                          {MessageError(errors.utilidad_carrera)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cuáles fueron las principales dificultades
                            académicas que enfrentó mientras estudiaba?
                          </label>
                          <select
                            name="dificultades_academicas"
                            className="form-control"
                            value={answers.dificultades_academicas}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">
                              Comprensión de los contenidos
                            </option>
                            <option value="10">Gestión del tiempo</option>
                            <option value="7">Relación con profesores</option>
                            <option value="5">Falta de recursos</option>
                          </select>
                          {MessageError(errors.dificultades_academicas)}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
            {step === 5 && (
              <div className="tab-panel">
                {/* Institucional */}
                <section>
                  <div className="card-body pt-0">
                    <h4 className="font-20 mb-20">Institucional</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Considera que recibió suficiente apoyo académico
                            por parte de la universidad?
                          </label>
                          <select
                            name="apoyo_academico"
                            className="form-control"
                            value={answers.apoyo_academico}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Sí, en todo momento</option>
                            <option value="10">Sí, pocas ocasiones</option>
                            <option value="7">No, nunca</option>
                            <option value="5">No lo solicité</option>
                          </select>
                          {MessageError(errors.apoyo_academico)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cómo califica la infraestructura física de la
                            institución?
                          </label>
                          <select
                            name="infraestructura"
                            className="form-control"
                            value={answers.infraestructura}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Excelente</option>
                            <option value="10">Buena</option>
                            <option value="7">Regular</option>
                            <option value="5">Mala</option>
                          </select>
                          {MessageError(errors.infraestructura)}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Cómo evalúa la calidad de la conectividad a
                            internet en la institución?
                          </label>
                          <select
                            name="conectividad"
                            className="form-control"
                            value={answers.conectividad}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Muy buena</option>
                            <option value="10">Buena</option>
                            <option value="7">Regular</option>
                            <option value="5">Mala</option>
                          </select>
                          {MessageError(errors.conectividad)}
                        </div>
                        <div className="form-group">
                          <label className="font-14 bold mb-2">
                            ¿Qué percepción tiene sobre la calidad del servicio
                            ofrecido por el personal administrativo?
                          </label>
                          <select
                            name="calidad_servicio"
                            className="form-control"
                            value={answers.calidad_servicio}
                            onChange={handleChange}
                          >
                            <option value="-1">---Seleccione---</option>
                            <option value="13">Muy eficiente y amable</option>
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
                          {MessageError(errors.calidad_servicio)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mx-4 mb-4">
                    Enviar
                  </button>
                </section>
              </div>
            )}
            {step === 6 && (
              <div className="tab-panel">
                <h2 className="text_color font-30 mb-20">Done Successfully!</h2>
                <p>Your form has been submitted successfully.</p>
              </div>
            )}
          </div>
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <div className="mx-4">
          INFO DEL TEST: <br />-{result.totalSum} <br />-{result.factor_socio}
        </div>
      </form>
    </FullLayout>
  );
};

export default Instrument;
