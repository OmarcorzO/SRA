import React from "react";
import FullLayout from "../../Layouts/FullLayout";

const Instrument = () => {
  return (
    <FullLayout>
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
                <select className="form-control">
                  <option value="empleado_directo">Empleado directo</option>
                  <option value="contratista_informal">
                    Contratista o informal
                  </option>
                  <option value="emprendedor">Emprendedor</option>
                  <option value="sin_ingresos_economicos">
                    Sin ingresos economicos
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cuál es el rango de ingresos mensuales de su actividad
                  economica?
                </label>
                <select className="form-control">
                  <option value="menos_1">Menos de 1 SMMLV</option>
                  <option value="entre_1_2">Entre 1 y 2 SMMLV</option>
                  <option value="entre_2_4">Entre 2 y 4 SMMLV</option>
                  <option value="mas_4">Más de 4 SMMLV</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cuál es el rango de ingresos mensuales del hogar?
                </label>
                <select className="form-control">
                  <option value="menos_1">Menos de 1 SMMLV</option>
                  <option value="entre_1_2">Entre 1 y 2 SMMLV</option>
                  <option value="entre_2_4">Entre 2 y 4 SMMLV</option>
                  <option value="mas_4">Más de 4 SMMLV</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cuenta con un dispositivo electronico para estudiar?
                </label>
                <select className="form-control">
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cuál es la fuente principal de ingresos con mayor cuantia en
                  su hogar?
                </label>
                <select className="form-control">
                  <option value="trabajo_formal">Trabajo formal</option>
                  <option value="trabajo_informal">Trabajo informal</option>
                  <option value="apoyo_familiar">Apoyo familiar</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cuántas personas dependen económicamente de usted?
                </label>
                <select className="form-control">
                  <option value="ninguna">Ninguna</option>
                  <option value="1_2">1-2</option>
                  <option value="3_5">3-5</option>
                  <option value="mas_de_5">Más de 5</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Posee acceso a internet en su hogar?
                </label>
                <select className="form-control">
                  <option value="si">Sí</option>
                  <option value="no">No</option>
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
                <select className="form-control">
                  <option value="familia">Con mi familia</option>
                  <option value="solo/a">Solo/a</option>
                  <option value="universitaria">
                    En residencia universitaria
                  </option>
                  <option value="amigos">Con amigos</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cuál es el nivel educativo más alto alcanzado por su padre?
                </label>
                <select className="form-control">
                  <option value="primaria_incompleta">
                    Primaria incompleta
                  </option>
                  <option value="primaria_completa">Primaria completa</option>
                  <option value="secundaria">Secundaria</option>
                  <option value="universitarios">
                    Estudios técnicos o universitarios
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cuál es el nivel educativo más alto alcanzado por su madre?
                </label>
                <select className="form-control">
                  <option value="primaria_incompleta">
                    Primaria incompleta
                  </option>
                  <option value="primaria_completa">Primaria completa</option>
                  <option value="secundaria">Secundaria</option>
                  <option value="universitarios">
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
                <select className="form-control">
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cómo describe la relación con su familia?
                </label>
                <select className="form-control">
                  <option value="muy_buena">Muy buena</option>
                  <option value="buena">Buena</option>
                  <option value="regular">Regular</option>
                  <option value="mala">Mala</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Alguien en su familia le apoya emocionalmente en sus
                  estudios?
                </label>
                <select className="form-control">
                  <option value="si">Sí</option>
                  <option value="no">No</option>
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
                <select className="form-control">
                  <option value="menos_20_anios">Menos de 20 años</option>
                  <option value="entre_20_25_anios">20-25 años</option>
                  <option value="entre_26_30_anios">26-30 años</option>
                  <option value="mas_30_anios">Más de 30 años</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cuál es su estado civil?
                </label>
                <select className="form-control">
                  <option value="soltero/a">Soltero/a</option>
                  <option value="casado/a">Casado/a o en unión libre</option>
                  <option value="divorciado/a">Divorciado/a</option>
                  <option value="viudo/a">Viudo/a</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Tiene alguna condición de salud especial o discapacidad?
                </label>
                <select className="form-control">
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cuál es su lugar de residencia?
                </label>
                <select className="form-control">
                  <option value="urbana">Zona urbana</option>
                  <option value="rural">Zona rural</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Qué medio de transporte utiliza con mayor frecuencia para
                  llegar a la universidad?
                </label>
                <select className="form-control">
                  <option value="transporte_publico">Transporte público</option>
                  <option value="vehiculo_propio">Vehículo propio</option>
                  <option value="bicicleta">Bicicleta</option>
                  <option value="caminando">Caminando</option>
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
                  ¿La carrera que estaba estudiando era de su interés personal?
                </label>
                <select className="form-control">
                  <option value="totalmente_interés">Totalmente de mi interés</option>
                  <option value="algo_interés">Algo de mi interés</option>
                  <option value="poco_interés">Poco de mi interés</option>
                  <option value="nada_interés">Nada de mi interés</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cómo califica su experiencia de aprendizaje?
                </label>
                <select className="form-control">
                  <option value="excelente">Excelente</option>
                  <option value="buena">Buena</option>
                  <option value="regular">Regular</option>
                  <option value="mala">Mala</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Qué tan útil considera que es la carrera estudiada con su
                  actualproyecto de vida y profesional?
                </label>
                <select className="form-control">
                  <option value="muy_util">Muy útil</option>
                  <option value="bastante_util">Bastante útil</option>
                  <option value="poco_util">Poco útil</option>
                  <option value="nada_util">Nada útil</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cuáles fueron las principales dificultades académicas que
                  enfrentó mientras estudiaba?
                </label>
                <select className="form-control">
                  <option value="comprension_contenidos">Comprensión de los contenidos</option>
                  <option value="gestion_tiempo">Gestión del tiempo</option>
                  <option value="relacion_profesores">Relación con profesores</option>
                  <option value="falta_recursos">Falta de recursos</option>
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
                  ¿Considera que recibió suficiente apoyo académico por parte de
                  la universidad?
                </label>
                <select className="form-control">
                  <option value="si_todo_momento">Sí, en todo momento</option>
                  <option value="si_pocas_ocasiones">Sí, pocas ocasiones</option>
                  <option value="no_nunca">No, nunca</option>
                  <option value="no_solicite">No lo solicité</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cómo califica la infraestructura física de la institución?
                </label>
                <select className="form-control">
                  <option value="excelente">Excelente</option>
                  <option value="buena">Buena</option>
                  <option value="regular">Regular</option>
                  <option value="mala">Mala</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Cómo evalúa la calidad de la conectividad a internet en la
                  institución?
                </label>
                <select className="form-control">
                  <option value="muy_buena">Muy buena</option>
                  <option value="buena">Buena</option>
                  <option value="regular">Regular</option>
                  <option value="mala">Mala</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-14 bold mb-2">
                  ¿Qué percepción tiene sobre la calidad del servicio ofrecido
                  por el personal administrativo?
                </label>
                <select className="form-control">
                  <option value="muy_eficiente_amable">Muy eficiente y amable</option>
                  <option value="eficiente_poco_amable">Eficiente pero poco amable</option>
                  <option value="poco_eficiente_pero_amable">Poco eficiente pero amable</option>
                  <option value="poco_eficiente_poco_amable">Poco eficiente y poco amable</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FullLayout>
  );
};

export default Instrument;
