"use client";
import React from "react";
import styles from "./AvisoDePrivacidad.module.css";
import Image from "next/image";
import logo from "../../../../../public/logo.svg";

export default function AvisoDePrivacidadPageClient({ texts }) {
  return (
    <>
      {/* Dynamic Header */}
      <article
        className={styles.header}
        style={{
          backgroundColor: "#002169",
          zIndex: 0,
        }}
      >
        <h1>{texts}</h1>
      </article>
      <article className={styles.textWrapper}>
        <h6>Aviso de Privacidad</h6>
        <p>
          Innovak Global, S.A. de C.V., con domicilio en Blvd. Vicente Lombardo
          Toledano 6615, Col. La Concordia, Chihuahua, Chihuahua., C.P. 31375,
          (Innovak Global), es el responsable del uso y protección de sus datos
          personales de conformidad con la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares (La Ley).
        </p>
        <h6>Datos Personales</h6>
        <p>
          Los datos personales que usted nos proporcione con motivo de
          aclaración de dudas, comentarios, solicitud de información respecto de
          nuestros productos, procesos de reclutamiento o bien al ingresar a
          cualquiera de nuestras instalaciones son:1. Datos de identificación
          como: nombre, domicilio, teléfono, correo electrónico, CURP, fecha de
          nacimiento, edad, nacionalidad, país de residencia, número de
          seguridad social, forma de contacto preferida.2. Datos de empleos
          anteriores como: puesto, correo electrónico, teléfono y fax del
          trabajo, compañía para la que labora o laboró y duración en el
          empleo.3. Datos de educación como: educación, título obtenido,
          especialidad, tipos de práctica, certificados de estudios.
        </p>
        <h6>Innovak Global no solicita datos personales</h6>
        <p>
          considerados como sensibles, como son: enfermedades que padece,
          alergias y medicamentos que toma, religión o partido político con el
          que simpatiza.
        </p>
        <h6>Finalidades del tratamiento de sus personales </h6>
        <p>
          Los datos personales que recabamos de usted, los utilizaremos para las
          siguientes finalidades que son necesarias para el servicio o empleo
          que solicita:Si usted es cliente o está interesado en nuestros
          productos, para:
        </p>
        <p>
          1. Dar respuesta a las interrogantes y/o comentarios que usted pueda
          tener siempre que estos sean relacionadas con nuestros servicios o el
          uso de nuestros productos.
        </p>
        <p>
          2. Contactarlo y hacerle llegar comunicaciones con fines
          promocionales, realizar encuestas y participar en programas de
          beneficios.
        </p>
        <p style={{ marginBottom: "12px" }}>
          3. Desarrollar nuevos productos y servicios, conocer el mercado y el
          desempeño de la empresa dentro de éste, servicios de atención al
          cliente, registrarlo en concursos, eventos, congresos o simposios,
          presentar un testimonio o anécdota, registrarlo para recibir
          información de interés.
        </p>
        <p>
          Si está usted interesado en formar parte del equipo de Innovak Global,
          su información será utilizada para:
        </p>
        <p>
          1. Contactarlo en caso de que su perfil resulte de interés para
          Innovak Global y participar en el proceso de selección de personal de
          ser el caso.
        </p>
        <p>2. Llevar a cabo evaluaciones previas a la contratación.</p>
        <p>Si visita nuestras instalaciones, para: </p>
        <p>
          • Controlar el acceso, mantener la confidencialidad de la información
          propiedad de Innovak Global, así como la seguridad dentro de nuestras
          instalaciones.Sus datos personales serán tratados únicamente por el
          tiempo necesario a fin de cumplir con las finalidades descritas en
          este Aviso de Privacidad o en aquel que se ponga a su disposición.
        </p>
        <h6>Uso de tecnologías de rastreo en nuestro portal de internet.</h6>
        <p>
          Le informamos que en nuestra página de internet utilizamos cookies, a
          través de las cuales es posible monitorear su comportamiento como
          usuario de internet, brindarle mejor servicio, así como ofrecerle
          nuevos productos y servicios basados en sus preferencias.Los datos
          personales que obtenemos de estas tecnologías de rastreo son las
          siguientes: horario de navegación, tiempo de navegación en nuestra
          página de internet, secciones consultadas, y páginas de internet
          accedidas previo a la nuestra.Asimismo le informamos que sus datos
          personales que se obtienen a través de estas tecnologías NO serán
          compartidos con terceros.
        </p>
        Estas tecnologías podrán desactivarse siguiendo los siguientes pasos: 1.
        Acceder en su navegador a la opción de Menú 2. Dar clic en Opciones /
        Privacidad 3. Buscar la opción de Historial y seleccionar Usar
        configuraciones personalizadas para el historial 4. Deshabilitas la
        opción de Aceptar cookies
        <h6>Medidas de Seguridad</h6>
        Innovak Global ha implementado y mantiene las medidas de seguridad,
        técnicas, administrativas y físicas, necesarias para proteger sus datos
        personales y evitar su daño, pérdida, alteración, destrucción o el uso,
        acceso o tratamiento no autorizado.Transferencias de datos personales
        Innovak Global NO transferirá sus datos personales a terceros,
        nacionales o extranjeros, salvo los casos previstos y autorizados por la
        Ley.En caso de que Innovak Global sea adquirido o fusionado con un ente
        comercial diverso, sus datos personales serán resguardados por la nueva
        entidad a fin de que esta última pueda utilizarlos de la misma manera en
        que Innovak Global los utilizaba.
        <h6>Derechos del titular de los datos personales (ARCO) </h6>
        Usted tiene el derecho a conocer que datos personales tenemos de usted,
        para que los utilizamos y las condiciones del uso que les damos
        (Acceso). Asimismo, es su derecho solicitar la corrección de su
        información personal en caso de que esté desactualizada, sea inexacta o
        incompleta (Rectificación); que la eliminemos de nuestros registros o
        bases de datos cuando considere que la misma no está siendo utilizada
        conforme a los principios, deberes y obligaciones previstas en la
        normativa (Cancelación); así como a oponerse al uso de sus datos
        personales para fines específicos (Oposición); Estos derechos se conocen
        como derechos ARCO. Usted podrá ejercer cualquiera de los derechos
        descritos en el párrafo que antecede a través del envío de su solicitud,
        en los términos establecidos por La Ley y su Reglamento, al departamento
        de Protección de Datos de Innovak Global ubicado en Blvd. Vicente
        Lombardo Toledano 6615, Col. La Concordia, Chihuahua, Chihuahua C.P.
        31372 o al correo electrónico departamento.privacidad@innovakglobal.com.
        También puede revocar el consentimiento que, en su caso, nos haya
        otorgado para el tratamiento de sus datos personales. Sin embargo es
        importante que tenga en cuenta que no en todos los casos podremos
        atender su solicitud o concluir de forma inmediata, ya que es posible
        que por alguna obligación legal requiramos seguir tratando sus datos
        personales. Asimismo deberá considerar que para ciertos fines, la
        revocación de su consentimiento implicará que no le podamos prestar o
        seguir prestando el servicio solicitado o bien puede significar la
        conclusión de la relación con nosotros. Para presentar su revocación
        puede hacerlo de la misma forma que para ejercer sus derechos ARCO
        descritos líneas atrás. Modificaciones al Aviso de Privacidad El
        presente aviso de privacidad puede sufrir modificaciones, cambios o
        actualizaciones derivadas de nuevos requerimientos legales; de nuestras
        propias necesidades por los productos o servicios que ofrecemos; de
        nuestras políticas de selección de personal; de nuestras prácticas de
        privacidad; de cambios en nuestro modelo de negocio o por otras
        causas.Nos comprometemos a mantenerlo informado sobre los cambios que
        pueda sufrir el presente aviso de privacidad a traves de nuestro sitio
        web www.innovakglobal.com o del comunicado respectivo al correo
        electrónico que nos haya proporcionado.
        <h6>Contacto</h6>
        <p>
          Para dudas, aclaraciones o comentarios respecto a este Aviso de
          Privacidad y otras cuestiones de privacidad y protección de datos
          personales, Innovak Global pone a su disposición los siguientes medios
          de contacto:
        </p>
        <p>Departamento de Privacidad de Datos Innovak </p>
        <p>José Fernando Urías RamírezInnovak Global, S.A. de C.V. </p>
        <p>Blvd. Vicente Lombardo Toledano 6615</p>
        <p>departamento.privacidad@innovakglobal.com</p>
        <p>Tel: +52 614 436 0138 Ext 124</p>
        <p>E-mail:departamento.privacidad@innovakglobal.com</p>
        Versión 1.1 17.06.2019
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          <Image
            style={{
              marginInline: "auto",
            }}
            src={logo}
            alt="Innovak Global"
            width={200}
            objectFit="contain"
            height={200}
          />
        </div>
      </article>
      {/* Dynamic Header */}
    </>
  );
}
