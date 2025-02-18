import React from "react";
import FullLayout from "../../Layouts/FullLayout";

const initialAnswers = {
  ingresos_economicos: "",
  rango_ingresos_mensuales: "",
  rango_ingresos_hogar: "",
  dispositivo_electronico: "",
  fuente_ingresos_hogar: "",
  personas_dependen: "",
  acceso_internet: "",
  vive_con: "",
  nivel_educativo_padre: "",
  nivel_educativo_madre: "",
  tiene_hijos: "",
  relacion_familiar: "",
  apoyo_emocional: "",
  rango_edad: "",
  estado_civil: "",
  condicion_salud: "",
  lugar_residencia: "",
  medio_transporte: "",
  interes_carrera: "",
  experiencia_aprendizaje: "",
  utilidad_carrera: "",
  dificultades_academicas: "",
  apoyo_academico: "",
  infraestructura: "",
  conectividad: "",
  calidad_servicio: "",
};

const Instrument = () => {
  const [answers, setAnswers] = React.useState(initialAnswers);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const totalSum = Object.values(answers).reduce((sum, value) => sum + (parseInt(value) || 0), 0);
    console.log("Sumatoria total:", totalSum);

    const puntaje_socio_normalizado = (totalSum - 130) / (338 - 130) // Normalización del puntaje
    let factor_socio = (puntaje_socio_normalizado * 0.4) + ((parseInt(answers.nivel_educativo_padre) + parseInt(answers.nivel_educativo_madre)) / 8) * 0.3 + (parseInt(answers.fuente_ingresos_hogar) / 4) * 0.3 - (parseInt(answers.personas_dependen) * 0.05)
    factor_socio = Math.max(0, Math.min(1, factor_socio))

    console.log('EL FACTOR ES:', factor_socio)
  };

  return (
    <FullLayout>
      <form onSubmit={handleSubmit}>
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
                </div>
                {answers.ingresos_economicos !== "5" && (
                  <div className="form-group">
                    <label className="font-14 bold mb-2">
                      ¿Cuál es el rango de ingresos mensuales de su actividad
                      economica?
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
                </div>
                <div className="form-group">
                  <label className="font-14 bold mb-2">
                    ¿Cuenta con un dispositivo electronico para estudiar?
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
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="font-14 bold mb-2">
                    ¿Cuál es la fuente principal de ingresos con mayor cuantia
                    en su hogar?
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
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    <option value="7">En residencia universitaria</option>
                    <option value="5">Con amigos</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="font-14 bold mb-2">
                    ¿Cuál es el nivel educativo más alto alcanzado por su padre?
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
                </div>
                <div className="form-group">
                  <label className="font-14 bold mb-2">
                    ¿Cuál es el nivel educativo más alto alcanzado por su madre?
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
                </div>
                <div className="form-group">
                  <label className="font-14 bold mb-2">
                    ¿Alguien en su familia le apoya emocionalmente en sus
                    estudios?
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
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    <option value="10">Casado/a o en unión libre</option>
                    <option value="7">Divorciado/a</option>
                    <option value="5">Viudo/a</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="font-14 bold mb-2">
                    ¿Tiene alguna condición de salud especial o discapacidad?
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
                </div>
                <div className="form-group">
                  <label className="font-14 bold mb-2">
                    ¿Qué medio de transporte utiliza con mayor frecuencia para
                    llegar a la universidad?
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
                </div>
              </div>
            </div>
          </div>
        </section>

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
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="font-14 bold mb-2">
                    ¿Qué tan útil considera que es la carrera estudiada con su
                    actualproyecto de vida y profesional?
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
                </div>
                <div className="form-group">
                  <label className="font-14 bold mb-2">
                    ¿Cuáles fueron las principales dificultades académicas que
                    enfrentó mientras estudiaba?
                  </label>
                  <select
                    name="dificultades_academicas"
                    className="form-control"
                    value={answers.dificultades_academicas}
                    onChange={handleChange}
                  >
                    <option value="-1">---Seleccione---</option>
                    <option value="13">Comprensión de los contenidos</option>
                    <option value="10">Gestión del tiempo</option>
                    <option value="7">Relación con profesores</option>
                    <option value="5">Falta de recursos</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institucional */}
        <section>
          <div className="card-body pt-0">
            <h4 className="font-20 mb-20">Institucional</h4>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="font-14 bold mb-2">
                    ¿Considera que recibió suficiente apoyo académico por parte
                    de la universidad?
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
                </div>
                <div className="form-group">
                  <label className="font-14 bold mb-2">
                    ¿Cómo califica la infraestructura física de la institución?
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
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="font-14 bold mb-2">
                    ¿Cómo evalúa la calidad de la conectividad a internet en la
                    institución?
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
                </div>
                <div className="form-group">
                  <label className="font-14 bold mb-2">
                    ¿Qué percepción tiene sobre la calidad del servicio ofrecido
                    por el personal administrativo?
                  </label>
                  <select
                    name="calidad_servicio"
                    className="form-control"
                    value={answers.calidad_servicio}
                    onChange={handleChange}
                  >
                    <option value="-1">---Seleccione---</option>
                    <option value="13">Muy eficiente y amable</option>
                    <option value="10">Eficiente pero poco amable</option>
                    <option value="7">Poco eficiente pero amable</option>
                    <option value="5">Poco eficiente y poco amable</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </FullLayout>
  );
};

export default Instrument;
