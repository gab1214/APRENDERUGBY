import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Login.css';

export default function Reglamento() {
  return (
    <div className="reglamento-container">
      <h2>1. El suelo</h2>
      <p>1.1 La superficie de juego debe ser segura[cite: 1].</p>
      <p>1.2 Los tipos de superficie permitidos son césped natural, arena, arcilla, nieve o césped artificial (de conformidad con el Reglamento 22 de World Rugby)[cite: 1].</p>
      <p>1.3 Las dimensiones del área de juego se muestran en el plano del terreno[cite: 1].</p>

      <h3>Dimensiones del campo</h3>
      <table className="tabla-campo">
        <thead>
          <tr>
            <th>Dimensiones</th>
            <th>Longitud del campo de juego</th>
            <th>Longitud dentro del área de gol</th>
            <th>Ancho</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Máximo (metros)</td>
            <td>100</td>
            <td>22</td>
            <td>70 [cite: 1, 2]</td>
          </tr>
          <tr>
            <td>Mínimo (metros)</td>
            <td>94</td>
            <td>6</td>
            <td>68 [cite: 1, 2]</td>
          </tr>
        </tbody>
      </table>

      <ul>
        <li>a. El área de juego tiene forma rectangular[cite: 2].</li>
        <li>b. Cualquier variación en estas dimensiones debe ser aprobada por la federación correspondiente para competiciones nacionales o por World Rugby para partidos internacionales[cite: 2, 3].</li>
        <li>c. Cuando la longitud del terreno de juego sea inferior a 100 metros, la distancia entre las líneas de 10 metros y las líneas de 22 metros se reducirá en consecuencia[cite: 2, 4].</li>
        <li>d. Cuando el ancho del área de juego sea menor a 70 metros, la distancia entre las líneas de 15 metros se reducirá en consecuencia[cite: 2, 5].</li>
        <li>e. El área perimetral deberá, en la medida de lo posible, tener cinco metros de ancho, pero no menos de 3,5 m para el juego masculino y 3,0 m para el juego femenino[cite: 2, 6].</li>
      </ul>

      <div className="info-box">
        <h2>Líneas en la cancha</h2>
        <p>1.4 Hay líneas continuas configuradas como se muestra en el diagrama de terreno. Las líneas continuas están en[cite: 6, 7]:</p>
        <ul>
          <li>a. Las líneas de balón muerto y las líneas de toque en la zona de anotación[cite: 7].</li>
          <li>b. Las líneas de ensayo[cite: 7, 8].</li>
          <li>c. Las líneas de 22 metros[cite: 7].</li>
          <li>d. La línea de medio camino[cite: 7].</li>
          <li>e. Las líneas de banda[cite: 7, 9].</li>
        </ul>

        <p>1.5 Hay líneas discontinuas configuradas como se muestra en el diagrama del terreno. Cada línea discontinua dentro de una línea discontinua tiene una longitud de cinco metros. Hay líneas discontinuas[cite: 9, 10]:</p>
        <ul>
          <li>a. A cinco metros de cada línea de banda, y paralelos a ella[cite: 10, 11].</li>
          <li>b. A 15 metros de cada línea de banda, y paralelos a ella[cite: 10, 12].</li>
          <li>c. Aproximadamente a 10 metros de cada lado de la línea central, y paralela a ella[cite: 10, 13].</li>
          <li>d. A cinco metros de cada línea de ensayo, y paralelos a ella[cite: 10, 14].</li>
        </ul>

        <p>1.6 Hay una línea de 0,5 metros de longitud que interseca el centro de la línea que marca la mitad del recorrido[cite: 14].</p>

        <h2>Postes de portería y travesaño</h2>
        <p>1.7 Cuando se colocan protecciones en los postes de la portería, la distancia desde la línea de ensayo hasta el borde exterior de las protecciones no debe exceder los 0,3 metros[cite: 14].</p>

        <h2>Postes de bandera</h2>
        <ul>
          <li>1.8 Hay 14 mástiles con banderas, cada uno con una altura mínima de 1,2 metros[cite: 14].</li>
          <li>1.9 Se coloca un mástil con bandera en cada intersección de las líneas de toque de meta y las líneas de ensayo, y otro en cada intersección de las líneas de toque de meta y las líneas de balón muerto (ocho mástiles en total)[cite: 14, 15].</li>
          <li>1.10 En cada lado del campo, se coloca un mástil alineado con la línea de 22 metros y la línea de medio campo, a dos metros de las líneas laterales y dentro del área de juego (seis mástiles en total)[cite: 15].</li>
        </ul>

        <h2>Objeciones al terreno</h2>
        <ul>
          <li>1.11 Los equipos deben informar al árbitro de cualquier objeción antes de que comience el partido[cite: 15].</li>
          <li>1.12 El árbitro intentará resolver los problemas y no dará comienzo al partido si considera que alguna parte del terreno de juego no es segura[cite: 15, 16].</li>
        </ul>
      </div>

      <div className="info-box">
        <h2>2. Balón</h2>
        <p>2.1 La pelota es ovalada y está compuesta por cuatro paneles[cite: 17].</p>
        <p>2.2 Tiene las dimensiones que se muestran aquí: [cite: 17]</p>
        <h3>Especificaciones</h3>
        <ul>
          <li>2.3 Pesa entre 410 y 460 gramos[cite: 17].</li>
          <li>2.4 Se pueden utilizar balones más pequeños para partidos entre jugadores jóvenes[cite: 17].</li>
          <li>2.5 El balón está fabricado en cuero o en un material sintético adecuado. Puede estar tratado para hacerlo resistente al agua y facilitar su agarre[cite: 17, 18].</li>
          <li>2.6 Su presión atmosférica al inicio del juego es de 65,71-68,75 kilopascales, 0,67-0,70 kilogramos por centímetro cuadrado o 9,5-10,0 libras por pulgada cuadrada[cite: 18].</li>
          <li>2.7 Es posible que haya pelotas de repuesto disponibles durante un partido[cite: 18].</li>
        </ul>
      </div>

      <div className="info-box">
        <h2>3. Jugadores</h2>
        <p>3.1 Cada equipo no puede tener más de 15 jugadores en el área de juego durante el partido[cite: 18].</p>
        <p>3.2 El organizador del partido puede autorizar que los encuentros se jueguen con menos de 15 jugadores por equipo[cite: 18].</p>
        <p>
          3.3 Un equipo puede presentar una queja ante el árbitro sobre el número de jugadores del equipo contrario. 
          Si un equipo tiene demasiados jugadores, el árbitro ordena al capitán que reduzca el número de jugadores según corresponda. 
          El marcador en el momento de la queja permanece inalterado.<br/>
          <strong>Sanción: Pena.</strong> [cite: 18, 19, 20]
        </p>
        <p>3.4 Para los partidos internacionales, una federación puede designar hasta ocho suplentes[cite: 20].</p>
        <p>3.5 Para los demás partidos, el organizador decide cuántos suplentes pueden ser designados, hasta un máximo de ocho[cite: 20].</p>
        <p>3.6 Los cambios de jugadores solo se realizan cuando el balón está fuera de juego y únicamente con el permiso del árbitro[cite: 20].</p>
        <p>
          3.7 Si un jugador se reincorpora al partido o un sustituto entra sin el permiso del árbitro y este cree que el jugador lo hizo para obtener una ventaja, el jugador es culpable de mala conducta.<br/>
          <strong>Sanción: Pena.</strong> [cite: 20]
        </p>

        <h3>3.8 Tabla de jugadores de primera línea</h3>
        <table className="tabla-campo">
          <thead>
            <tr>
              <th>Tamaño del escuadrón</th>
              <th>Número mínimo de jugadores de primera línea</th>
              <th>Debe poder reemplazarlo a la primera solicitud</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>15 o menos</td>
              <td>3</td>
              <td>- [cite: 21]</td>
            </tr>
            <tr>
              <td>16, 17 o 18</td>
              <td>4</td>
              <td>O un accesorio o una prostituta [cite: 21]</td>
            </tr>
            <tr>
              <td>19, 20, 21 o 22</td>
              <td>5</td>
              <td>Tanto un pilar como un talonador [cite: 21]</td>
            </tr>
            <tr>
              <td>23</td>
              <td>6</td>
              <td>Pilar izquierdo, pilar derecho y talonador [cite: 21]</td>
            </tr>
          </tbody>
        </table>

        <p>3.9 Cuando el organizador del partido haya determinado que las plantillas deben estar compuestas por 23 jugadores y un equipo solo pueda nombrar a dos suplentes de primera línea, dicho equipo podrá nombrar únicamente a 22 jugadores en su plantilla[cite: 21, 22].</p>
        <p>3.10 Antes del partido, cada equipo deberá informar al árbitro correspondiente sobre sus jugadores de primera línea y sus posibles suplentes... [cite: 22]</p>
        <p>3.11 Un jugador suplente de la primera línea puede comenzar el partido en otra posición[cite: 22].</p>
        <p>3.12 Es responsabilidad del equipo asegurarse de que todos los jugadores de primera línea y sus suplentes estén debidamente entrenados y tengan la experiencia necesaria[cite: 22].</p>

        <h3>Melés sin oposición</h3>
        <p>3.13 Las melés quedarán sin oposición si alguno de los equipos no puede alinear una primera línea debidamente entrenada o si el árbitro así lo ordena[cite: 22, 23].</p>
        <p>3.14 El organizador del partido puede estipular las condiciones bajo las cuales un juego puede comenzar con melés sin oposición[cite: 23].</p>
        <p>3.15 Las melés no disputadas como consecuencia de una expulsión, tarjeta amarilla o lesión deberán jugarse con ocho jugadores por equipo[cite: 23].</p>
        <p>3.16 Cuando un jugador de primera línea abandona el terreno de juego... [cite: 23]</p>
        <p>3.17 En una plantilla de 23 jugadores o a discreción del organizador... [cite: 23]</p>
        <p>3.18 Solo cuando no haya ningún jugador de reemplazo disponible en la primera fila... [cite: 23]</p>
        <p>3.19 Si un jugador de primera línea recibe una tarjeta amarilla... [cite: 23]</p>
        <p>3.20 Si un jugador de primera línea es expulsado... [cite: 23, 24]</p>

        <h3>Reemplazo permanente</h3>
        <p>3.21 Un jugador puede ser sustituido si se lesiona... [cite: 24]</p>
        <p>3.22 Se considera que un jugador está lesionado si... [cite: 24]</p>
        <p>3.23 El árbitro también podrá ordenar a un jugador lesionado que abandone el terreno de juego... [cite: 24]</p>

        <h3>Reemplazo permanente: reconocer y eliminar</h3>
        <p>3.24 Si, en cualquier momento durante un partido, un jugador sufre una conmoción cerebral... [cite: 24]</p>

        <h3>Sustitución temporal - lesión por sangre</h3>
        <p>3.25 Cuando un jugador sufre una herida con sangrado... [cite: 24]</p>
        <p>3.26 En los partidos internacionales, el médico del partido decide... [cite: 24]</p>

        <h3>Sustitución temporal - Evaluación de lesiones craneales (ELC)</h3>
        <p>3.27 En los partidos que hayan sido aprobados previamente por World Rugby... [cite: 24, 25]</p>

        <h3>Sustituciones temporales - todas</h3>
        <p>3.28 Un reemplazo temporal puede ser reemplazado temporalmente... [cite: 25]</p>
        <p>3.29 Si un jugador que se presenta como sustituto temporal se lesiona... [cite: 25]</p>
        <p>3.30 Si se envía un reemplazo temporal... [cite: 25]</p>
        <p>3.31 Si el jugador sustituto temporal recibe una tarjeta amarilla... [cite: 25]</p>
        <p>3.32 Si el tiempo permitido para un reemplazo temporal expira... [cite: 25]</p>

        <h3>Sustituciones tácticas</h3>
        <p>3.33 Los jugadores sustituidos tácticamente solo podrán volver a jugar cuando... [cite: 25]</p>

        <h3>Reemplazos continuos</h3>
        <p>3.34 El organizador del partido podrá implementar sustituciones tácticas continuas... [cite: 25]</p>
      </div>

      <div className="info-box">
        <h2>4. Prendas de vestir permitidas</h2>
        <p>4.1 Todas las prendas de vestir deben cumplir con el Reglamento 12 de World Rugby[cite: 26].</p>
        <p>4.2 Un jugador lleva camiseta, pantalones cortos, ropa interior, calcetines y botas. La manga de la camiseta debe llegar al menos hasta la mitad de la distancia entre el hombro y el codo[cite: 26, 27].</p>
        
        <h3>4.3 Se permiten artículos adicionales:</h3>
        <ul>
          <li>a. Soportes lavables fabricados con materiales elásticos o compresibles[cite: 27, 28].</li>
          <li>b. Espinilleras[cite: 28].</li>
          <li>c. Soportes para el tobillo que se usan debajo de los calcetines... [cite: 28, 29]</li>
          <li>d. Manoplas (guantes sin dedos)[cite: 29].</li>
          <li>e. Hombreras o protectores de pecho homologados[cite: 29, 30].</li>
          <li>f. Protector bucal o protector dental[cite: 30].</li>
          <li>g. Casco acolchado[cite: 30].</li>
          <li>h. Vendas, apósitos, cinta adhesiva fina u otro material similar[cite: 30, 31].</li>
          <li>i. Gafas[cite: 31].</li>
          <li>j. Tacos, incluidos los de goma moldeada, en las suelas de sus botas[cite: 31, 32].</li>
          <li>k. Medias o leggings largos de mezcla de algodón... [cite: 32, 33]</li>
          <li>l. Pañuelos o cubiertas para la cabeza... [cite: 33]</li>
          <li>m. Dispositivos de monitorización del jugador[cite: 33, 34].</li>
        </ul>

        <h3>4.4 Un jugador no puede usar:</h3>
        <ul>
          <li>a. Cualquier artículo contaminado con sangre[cite: 34].</li>
          <li>b. Cualquier objeto afilado o abrasivo[cite: 34, 35].</li>
          <li>c. Cualquier artículo con hebillas, clips, anillos, bisagras, cremalleras, tornillos o material rígido no permitido[cite: 35].</li>
          <li>d. Joyería[cite: 35, 36].</li>
          <li>e. Guantes[cite: 36].</li>
          <li>f. Pantalones cortos o mallas con relleno cosido[cite: 36].</li>
          <li>g. Cualquier artículo permitido por la ley pero que, en opinión del árbitro, pueda causar lesiones[cite: 36, 37].</li>
          <li>h. Dispositivos de comunicación[cite: 37, 38].</li>
        </ul>

        <p>4.5 El árbitro tiene la potestad de decidir en cualquier momento que alguna prenda de vestir de un jugador es peligrosa o ilegal. En tal caso, el árbitro debe ordenar al jugador que se quite la prenda. El jugador no podrá participar en el partido hasta que la prenda se haya quitado o neutralizado[cite: 38, 39, 40].</p>
        <p>
          4.6 Si, durante una inspección previa al partido, un árbitro le indica a un jugador que lleva puesto un artículo prohibido y posteriormente se descubre que el jugador lo lleva en el terreno de juego, ese jugador será expulsado por mala conducta.<br/>
          <strong>Sanción: Pena.</strong> [cite: 40]
        </p>
        <p>4.7 El árbitro no debe permitir que ningún jugador abandone el terreno de juego para cambiarse de ropa, a menos que esta esté manchada de sangre[cite: 40].</p>
      </div>

      <div className="info-box">
        <h2>5. Tiempo de juego</h2>
        <p>5.1 Un partido no dura más de 80 minutos (divididos en dos tiempos, cada uno de no más de 40 minutos más el tiempo perdido), a menos que el organizador del partido haya autorizado la práctica de tiempo extra en un partido empatado dentro de una competición eliminatoria[cite: 41].</p>
        <p>5.2 El descanso consiste en un intervalo que no excederá los 15 minutos, según lo determine el organizador del partido. Durante este tiempo, los equipos y los árbitros pueden abandonar el terreno de juego[cite: 41, 42].</p>
        <p>5.3 En partidos no internacionales, el organizador puede decidir reducir la duración del encuentro. Si el organizador no toma una decisión, los equipos acuerdan la duración del partido. Si no llegan a un acuerdo, el árbitro decide[cite: 42, 43, 44].</p>
        <p>5.4 El árbitro controla el tiempo, pero puede delegar esta función en uno o ambos árbitros asistentes y/o en un cronometrador oficial... [cite: 44]</p>
        
        <h3>5.5 El árbitro podrá detener el juego y conceder tiempo para:</h3>
        <ul>
          <li>a. Lesión de un jugador por hasta un minuto. Si un jugador está gravemente lesionado, el árbitro puede permitir más tiempo[cite: 44, 45].</li>
          <li>b. Consulta con otros funcionarios[cite: 46].</li>
        </ul>

        <h3>5.6 Una vez que el balón ya está muerto, el árbitro puede conceder tiempo para:</h3>
        <ul>
          <li>a. Sustitución de jugadores[cite: 46, 47].</li>
          <li>b. Reemplazar o reparar la ropa de los jugadores[cite: 47].</li>
          <li>c. Volver a atar un cordón de la bota[cite: 47, 48].</li>
          <li>d. Recuperar la pelota[cite: 48].</li>
        </ul>

        <h3>5.7 Una mitad termina cuando el balón queda muerto después de que haya expirado el tiempo, a menos que:</h3>
        <ul>
          <li>a. Una melé, saque de banda o patada de reinicio concedidos antes de finalizar el tiempo no se han completado[cite: 48, 49].</li>
          <li>b. El árbitro concede un tiro libre o un penalti[cite: 50].</li>
          <li>c. Un penal se patea fuera del campo sin que el balón toque a otro jugador[cite: 51].</li>
          <li>d. Se ha marcado un ensayo, en cuyo caso el árbitro concede tiempo para realizar la conversión[cite: 52].</li>
        </ul>

        <h3>5.8 Conversión tras un try</h3>
        <ul>
          <li>a. La decisión de rechazar la conversión debe ser comunicada por el anotador del try al árbitro diciendo “no pateó”[cite: 53].</li>
          <li>b. Siempre que se intente o se rechace la conversión antes de que transcurra el tiempo, el árbitro concederá un saque de reinicio[cite: 54].</li>
          <li>c. Si se intenta la conversión, el tiempo se toma desde el momento en que se golpea la pelota[cite: 55].</li>
        </ul>

        <p>5.9 Cuando las condiciones climáticas son excepcionalmente calurosas o húmedas, el árbitro puede autorizar una pausa para hidratación de dos minutos[cite: 55].</p>
        <p>5.10 El árbitro tiene la potestad de finalizar o suspender el partido en cualquier momento si considera que continuar sería peligroso[cite: 55].</p>
      </div>

      <div className="info-box">
        <h2>6. Árbitros</h2>
        <h3>Principio</h3>
        <p>Cada partido está bajo el control de los oficiales del partido, que incluyen al árbitro principal y dos jueces de línea o árbitros asistentes. Otras personas autorizadas pueden incluir personal médico, recogepelotas y miembros de los equipos que no participan en el juego[cite: 56, 57].</p>
        
        <h3>Nombramiento del árbitro</h3>
        <p>6.1 El árbitro es designado por el organizador del partido. Si no se designa, ambos equipos eligen uno; si no hay acuerdo, el equipo local lo designa[cite: 57, 58].</p>
        <p>6.2 Si el árbitro no puede completar el partido, se designa un sustituto según las instrucciones del organizador o, en su defecto, por el árbitro o el equipo local[cite: 58].</p>

        <h3>Deberes antes del partido</h3>
        <p>6.3 El árbitro organiza el sorteo con moneda y elección de saque o lado[cite: 58].</p>
        <p>6.4 Los árbitros inspeccionan ropa y tacos de los jugadores para verificar que cumplen con la Regla 4[cite: 58].</p>

        <h3>Deberes durante el partido</h3>
        <ul>
          <li>6.5a. El árbitro es el único juez de los hechos y las leyes[cite: 58, 59].</li>
          <li>6.5b. Controla el tiempo (o delega en un cronometrador)[cite: 60].</li>
          <li>6.5c. Lleva la puntuación[cite: 60].</li>
        </ul>
        <p>6.6 Permite acceso al terreno de juego a jugadores y suplentes cuando es seguro[cite: 60].</p>
        <p>6.7 Autoriza a los jugadores a abandonar el terreno de juego; acceso al agua permitido tras un ensayo sin necesidad de permiso[cite: 60, 61].</p>

        <h3>El silbato</h3>
        <ul>
          <li>6.8a. Inicio y final de cada mitad[cite: 61, 62].</li>
          <li>6.8b. Detener el juego[cite: 62].</li>
          <li>6.8c. Indicar una puntuación[cite: 62].</li>
          <li>6.8d. Amonestar o expulsar[cite: 62].</li>
          <li>6.8e-h. Señalar balón muerto, pelota injugable, penales, melés o situaciones peligrosas[cite: 63].</li>
        </ul>

        <h3>La pelota queda muerta</h3>
        <ul>
          <li>6.9a-f. Cuando el balón está fuera de juego, apoyado en el área de gol, tras conversión, ensayo, penal, drop goal, o toca la línea de balón muerto[cite: 64].</li>
        </ul>

        <h3>Interacción con asistentes</h3>
        <p>6.13 El árbitro puede consultar con asistentes sobre juego sucio y cronometraje[cite: 64].</p>
        <p>6.14 Puede modificar decisiones tras señalización de jueces de línea[cite: 64].</p>

        <h3>Oficial de televisión (TMO)</h3>
        <p>6.15 El organizador puede designar un árbitro de vídeo para aclarar situaciones de anotación, tiros a portería, infracciones y juego sucio[cite: 64].</p>
        <p>6.16 Cualquier árbitro puede recomendar revisión al TMO[cite: 64].</p>

        <h3>Deberes después del partido</h3>
        <p>6.17 El árbitro comunica el resultado a equipos y organizador[cite: 64].</p>
        <p>6.18 Si un jugador es expulsado, entrega informe escrito al organizador[cite: 64, 65].</p>

        <h3>Árbitros asistentes y jueces de línea</h3>
        <p>6.19 Cada partido tiene dos asistentes o jueces de línea[cite: 65].</p>
        <p>6.20 El organizador puede designar suplentes[cite: 65].</p>
        <p>6.21 El árbitro tiene autoridad sobre ellos y puede solicitar sustitución o expulsión[cite: 65].</p>

        <h3>Durante el partido</h3>
        <p>6.22 Un asistente en cada lado del campo, dentro del área de anotación[cite: 65].</p>
        <p>6.23 Puede entrar al campo para reportar una falta en la siguiente interrupción[cite: 65].</p>

        <h3>Señales</h3>
        <ul>
          <li>6.24 Cada asistente lleva bandera[cite: 65].</li>
          <li>6.25 Señalan goles levantando banderas[cite: 65].</li>
          <li>6.26 Señalan saques de banda y lanzamientos incorrectos[cite: 65].</li>
          <li>6.27 Señalan juego sucio con bandera horizontal[cite: 65, 66].</li>
        </ul>

        <h3>Personas adicionales</h3>
        <p>6.28 Personal médico acreditado puede entrar al campo para atender jugadores[cite: 66].</p>
        <p>6.29 Aguadores y entrenadores pueden entrar en momentos específicos, con restricciones[cite: 66].</p>
        <p>6.30 Ninguna otra persona debe acercarse a los árbitros[cite: 66].</p>
        <p>6.31 La gestión de suplentes puede delegarse a responsables de banda[cite: 66].</p>
      </div>

      <div className="info-box">
        <h2>7. Ventajas</h2>
        <h3>Principio</h3>
        <p>Si un equipo obtiene ventaja tras una infracción de sus oponentes, el árbitro puede permitir que el juego continúe para mantener la fluidez del partido[cite: 67, 68].</p>
        
        <h3>7.1 Ventaja</h3>
        <ul>
          <li>a. Puede ser táctica: el equipo que no cometió la infracción es libre de jugar el balón como desee[cite: 68].</li>
          <li>b. Puede ser territorial: el juego se ha movido hacia la línea de balón muerto del equipo infractor[cite: 68, 69].</li>
          <li>c. Puede ser una combinación de táctica y territorial[cite: 68, 70].</li>
          <li>d. Debe ser clara y real. Una simple oportunidad no es suficiente[cite: 68, 71].</li>
        </ul>

        <h3>7.2 La ventaja termina cuando:</h3>
        <ul>
          <li>a. El árbitro considera que el equipo que no cometió la infracción ha obtenido ventaja[cite: 71, 72].</li>
          <li>b. El árbitro considera que es improbable que el equipo obtenga ventaja, detiene el juego y aplica la sanción[cite: 73].</li>
          <li>c. El equipo que no cometió la infracción comete otra antes de obtener ventaja. Se aplica la sanción de la primera infracción[cite: 74, 75].</li>
          <li>d. El equipo infractor comete una segunda infracción de la que no puede obtener ventaja. El capitán del equipo no infractor elige la sanción más ventajosa[cite: 75, 76].</li>
        </ul>

        <h3>7.3 No se debe aplicar ventaja y el árbitro debe pitar inmediatamente cuando:</h3>
        <ul>
          <li>a. El balón o un jugador que lo posee toca al árbitro y se obtiene ventaja[cite: 76, 77].</li>
          <li>b. El balón sale por cualquiera de los extremos del túnel en una melé[cite: 78].</li>
          <li>c. Una melé se desplaza girando más de 90 grados[cite: 79].</li>
          <li>d. Un jugador en una melé es levantado o forzado hacia arriba y pierde contacto con el suelo[cite: 80].</li>
          <li>e. Se ejecuta incorrectamente un lanzamiento rápido, un tiro libre o un penalti[cite: 81].</li>
          <li>f. La pelota queda inerte[cite: 81].</li>
          <li>g. Sería peligroso dejar que el juego continúe[cite: 82].</li>
          <li>h. Se sospecha que un jugador está gravemente herido[cite: 82].</li>
        </ul>
      </div>

      <div className="info-box">
        <h2>8. Puntaje</h2>
        <h3>8.1 Métodos y valor de los puntos</h3>
        <ul>
          <li>a. Try – 5 puntos[cite: 83].</li>
          <li>b. Conversión – 2 puntos[cite: 83].</li>
          <li>c. Try de penal – 7 puntos[cite: 83].</li>
          <li>d. Gol de penal – 3 puntos[cite: 83, 84].</li>
          <li>e. Drop goal – 3 puntos[cite: 83].</li>
        </ul>

        <h3>Try</h3>
        <p>8.2 Un try se marca cuando un jugador atacante:</p>
        <ul>
          <li>a. Apoya primero el balón en el área de gol rival[cite: 84, 85].</li>
          <li>b. Apoya primero el balón cuando una melé, ruck o maul alcanza la línea de ensayo[cite: 85, 86].</li>
          <li>c. Es placado antes de la línea de ensayo y su inercia lo lleva en movimiento continuo hasta el área de gol, donde apoya el balón[cite: 86, 87].</li>
          <li>d. Es placado cerca de la línea de ensayo y alcanza inmediatamente para apoyar el balón[cite: 87, 88].</li>
          <li>e. Estando en touche o touche de gol, apoya el balón en el área de gol rival siempre que no lo esté sosteniendo[cite: 88, 89].</li>
        </ul>

        <h3>Try de penal</h3>
        <p>8.3 Se concede entre los postes si una falta del equipo contrario impide un try probable. El jugador culpable recibe tarjeta amarilla o roja. No se intenta conversión[cite: 89, 90, 91].</p>

        <h3>Conversión, gol de penal y drop goal</h3>
        <p>8.4–8.6 Para que un gol sea válido, el balón debe pasar por encima del travesaño y entre los postes[cite: 91].</p>

        <h3>Conversión</h3>
        <ul>
          <li>8.7 Tras un try, el equipo puede intentar conversión con place-kick o drop-kick[cite: 91].</li>
          <li>8.8 El pateador debe ejecutar el kick en línea paralela a las touchlines, usando solo suelo, arena, aserrín o tee[cite: 91].</li>
          <li>8.9 El equipo del pateador debe permanecer detrás del balón[cite: 91].</li>
          <li>8.10–8.13 Reglas sobre caída del balón antes o durante el intento[cite: 91].</li>
          <li>8.14–8.15 El equipo contrario debe retirarse a su línea de ensayo y no gritar durante el intento[cite: 91].</li>
          <li>8.16–8.17 Si el balón es tocado por la oposición y entra, el gol cuenta[cite: 91, 92].</li>
        </ul>

        <h3>Gol de penal</h3>
        <ul>
          <li>8.18 Solo puede marcarse desde un penal[cite: 92].</li>
          <li>8.19–8.21 El equipo debe indicar intención de patear y hacerlo en 60 segundos[cite: 92].</li>
          <li>8.22–8.27 Reglas de conducta de la oposición y sanciones[cite: 92].</li>
        </ul>

        <h3>Drop goal</h3>
        <p>8.28 Se marca mediante drop-kick en juego abierto[cite: 92].</p>
        <p>8.29 No puede marcarse drop goal directamente desde un free-kick hasta que el balón esté muerto o jugado por un rival[cite: 92].</p>
      </div>

      <div className="info-box">
        <h2>9. Juego sucio</h2>
        <h3>Principio</h3>
        <p>Un jugador que comete una falta debe ser amonestado, recibir una tarjeta amarilla o ser expulsado[cite: 93].</p>

        <h3>Obstrucción</h3>
        <ul>
          <li>9.1 Ningún jugador puede embestir ni empujar al otro, excepto hombro con hombro.<br/><strong>Sanción: Pena.</strong> [cite: 93, 94]</li>
          <li>9.2 Un jugador en fuera de juego no debe obstruir intencionadamente.<br/><strong>Sanción: Pena.</strong> [cite: 94, 95]</li>
          <li>9.3 No impedir intencionadamente que un oponente placque.<br/><strong>Sanción: Pena.</strong> [cite: 95, 96]</li>
          <li>9.4 No impedir intencionadamente que un oponente juegue el balón.<br/><strong>Sanción: Pena.</strong> [cite: 96, 97]</li>
          <li>9.5 El portador no debe chocar con un compañero en fuera de juego.<br/><strong>Sanción: Pena.</strong> [cite: 97, 98]</li>
          <li>9.6 No obstruir mientras el balón esté fuera de juego.<br/><strong>Sanción: Pena.</strong> [cite: 98, 99]</li>
        </ul>

        <h3>Juego sucio</h3>
        <ul>
          <li>9.7a Infringir intencionalmente cualquier ley.<br/><strong>Sanción: Pena.</strong> [cite: 99, 100]</li>
          <li>9.7b Golpear o lanzar la pelota fuera del área.<br/><strong>Sanción: Pena.</strong> [cite: 100]</li>
          <li>9.7c Simular infracciones.<br/><strong>Sanción: Pena.</strong> [cite: 100, 101]</li>
          <li>9.7d Perder tiempo.<br/><strong>Sanción: Tiro libre.</strong> [cite: 101]</li>
        </ul>

        <h3>Infracciones reiteradas</h3>
        <p>9.8–9.10 Un equipo o jugador no debe cometer repetidamente la misma infracción.<br/><strong>Sanción: Pena.</strong> [cite: 101, 102]</p>

        <h3>Juego peligroso</h3>
        <ul>
          <li>9.11 Acciones imprudentes o peligrosas.<br/><strong>Sanción: Pena.</strong> [cite: 102, 103]</li>
          <li>9.12 Abuso físico o verbal (morder, golpear, pisotear, etc.).<br/><strong>Sanción: Pena.</strong> [cite: 103, 104]</li>
          <li>9.13 Placajes peligrosos, por encima de los hombros.<br/><strong>Sanción: Pena.</strong> [cite: 104, 105]</li>
          <li>9.14 No entrar al balón si el oponente no lo tiene.<br/><strong>Sanción: Pena.</strong> [cite: 105, 106]</li>
          <li>9.15 Sujetar o empujar a un oponente sin balón.<br/><strong>Sanción: Pena.</strong> [cite: 106]</li>
          <li>9.16 Embestir sin intentar agarrar.<br/><strong>Sanción: Pena.</strong> [cite: 106, 107]</li>
          <li>9.17 Placajes a oponentes en el aire.<br/><strong>Sanción: Pena.</strong> [cite: 107]</li>
          <li>9.18 Levantar y dejar caer a un oponente.<br/><strong>Sanción: Pena.</strong> [cite: 107, 108]</li>
        </ul>

        <h3>Juego peligroso en melé</h3>
        <ul>
          <li>9.19a No abalanzarse sobre la primera línea.<br/><strong>Sanción: Pena.</strong> [cite: 108, 109]</li>
          <li>9.19b No tirar de un oponente.<br/><strong>Sanción: Pena.</strong> [cite: 109]</li>
          <li>9.19c No levantar intencionadamente.<br/><strong>Sanción: Pena.</strong> [cite: 109]</li>
          <li>9.19d No provocar colapso.<br/><strong>Sanción: Pena.</strong> [cite: 109, 110]</li>
        </ul>

        <h3>Juego peligroso en ruck o maul</h3>
        <ul>
          <li>9.20a No cargar sin agarre.<br/><strong>Sanción: Pena.</strong> [cite: 110, 111]</li>
          <li>9.20b No contacto por encima de los hombros.<br/><strong>Sanción: Pena.</strong> [cite: 111]</li>
          <li>9.20c No derrumbar intencionadamente.<br/><strong>Sanción: Pena.</strong> [cite: 111, 112]</li>
          <li>9.20d No rodar o torcer al oponente.<br/><strong>Sanción: Pena.</strong> [cite: 112]</li>
          <li>9.20e No dejar caer peso sobre un oponente.<br/><strong>Sanción: Pena.</strong> [cite: 112, 113]</li>
        </ul>

        <h3>Otras conductas</h3>
        <ul>
          <li>9.21 No tomar represalias.<br/><strong>Sanción: Pena.</strong> [cite: 113]</li>
          <li>9.22 No usar la “cuña voladora”.<br/><strong>Sanción: Pena.</strong> [cite: 113, 114]</li>
          <li>9.23 No intentar patear el balón de las manos.<br/><strong>Sanción: Pena.</strong> [cite: 114, 115]</li>
          <li>9.24 El portador puede pasar el balón a un oponente sin fuerza excesiva.<br/><strong>Sanción: Pena.</strong> [cite: 115, 116]</li>
          <li>9.25 No cargar intencionadamente al pateador.<br/><strong>Sanción: Penalización.</strong> [cite: 116]</li>
          <li>9.26 Levantar a un compañero debe hacerse con seguridad.<br/><strong>Sanción: Tiro libre.</strong> [cite: 116, 117]</li>
        </ul>

        <h3>Mala conducta</h3>
        <ul>
          <li>9.27 No actúan contra el espíritu deportivo.<br/><strong>Sanción: Pena.</strong> [cite: 117, 118]</li>
          <li>9.28 Respetar la autoridad del árbitro.<br/><strong>Sanción: Pena.</strong> [cite: 118]</li>
        </ul>

        <h3>Tarjetas</h3>
        <p>9.29 Tarjeta amarilla: suspensión por 10 minutos. Reincidencia implica expulsión[cite: 118, 119].</p>
        <p>9.30 Tarjeta roja: expulsión definitiva. En rugby de élite, algunas acciones peligrosas impiden sustitución; otras permiten reemplazo tras 20 minutos[cite: 119, 120].</p>
      </div>

      <div className="info-box">
        <h2>10. Fuera de juego y en posición reglamentaria en juego abierto</h2>
        <h3>Principio</h3>
        <p>El juego solo lo juegan los jugadores que están en posición legal[cite: 121].</p>
        
        <h3>10.1 Fuera de juego en juego abierto</h3>
        <p>Un jugador está en fuera de juego si se encuentra delante de un compañero que lleva el balón o que lo tocó por última vez. No debe interferir en la jugada, lo que incluye[cite: 121, 122]:</p>
        <ul>
          <li>a. Jugar con la pelota[cite: 122].</li>
          <li>b. Derribar al portador del balón[cite: 122, 123].</li>
          <li>c. Impedir que la oposición juegue como desee[cite: 123].</li>
          <li>d. Merodear en posición de fuera de juego[cite: 123, 124].</li>
        </ul>

        <p>10.2 Un jugador puede estar en fuera de juego en cualquier punto del área de juego[cite: 124].</p>
        <p>10.3 Un jugador que recibe un lanzamiento hacia adelante no intencional no está en fuera de juego[cite: 124].</p>

        <h3>10.4 Penalización por fuera de juego</h3>
        <ul>
          <li>a. No retroceder e interferir con el juego. <strong>Sanción: Pena o melé.</strong> [cite: 124, 125]</li>
          <li>b. Moverse hacia la pelota. <strong>Sanción: Pena o melé.</strong> [cite: 125, 126]</li>
          <li>c. Estar delante de un compañero que pateó el balón y no retroceder inmediatamente detrás de la línea de 10 metros. <strong>Sanción: Pena o melé.</strong> [cite: 126, 127]</li>
        </ul>

        <p>10.5 Fuera de juego accidental: el juego solo se detiene si el equipo infractor obtiene ventaja. <strong>Sanción: Melé.</strong> [cite: 127, 128]</p>

        <h3>10.6 Puesto en posición reglamentaria</h3>
        <ul>
          <li>a. Retrocediendo detrás del último compañero que tocó el balón[cite: 128].</li>
          <li>b. Retrocediendo detrás de un compañero en posición reglamentaria[cite: 128, 129].</li>
        </ul>

        <h3>10.7 Puesto en posición reglamentaria por acción de un compañero u oponente</h3>
        <ul>
          <li>a. Un compañero en posición reglamentaria pasa al jugador en fuera de juego[cite: 129, 130].</li>
          <li>b. Un oponente patea o toca intencionadamente el balón sin tomar posesión[cite: 130, 131].</li>
        </ul>

        <p>10.8 Un jugador en fuera de juego según la regla de los 10 metros no puede ser puesto en posición reglamentaria por acción de un oponente, exceptuando una carga hacia abajo[cite: 131].</p>

        <h3>10.9 Fuera de juego en ruck, maul, scrum o lineout</h3>
        <p>Un jugador que está en fuera de juego en un ruck, maul, scrum o lineout permanece en fuera de juego, incluso después de que la formación haya terminado[cite: 131, 132].</p>

        <h3>10.10 Puesto en posición reglamentaria</h3>
        <p>El jugador solo puede ponerse en posición reglamentaria si[cite: 132]:</p>
        <ul>
          <li>a. Se retira inmediatamente detrás de la línea de fuera de juego correspondiente[cite: 132, 133].</li>
          <li>b. Un jugador del equipo contrario lleva el balón cinco metros en cualquier dirección[cite: 133, 134].</li>
          <li>c. Un jugador del equipo contrario patea el balón[cite: 134, 135].</li>
        </ul>

        <h3>10.11 Penalización</h3>
        <ul>
          <li>a. No retirarse sin demora indebida. <strong>Sanción: Pena.</strong> [cite: 135, 136]</li>
          <li>b. Interferir con el juego. <strong>Sanción: Pena.</strong> [cite: 136]</li>
          <li>c. Moverse hacia la pelota. <strong>Sanción: Pena.</strong> [cite: 136, 137]</li>
        </ul>
      </div>

      <div className="info-box">
        <h2>11. Golpear hacia adelante o lanzar hacia adelante</h2>
        <h3>Golpear hacia adelante</h3>
        <ul>
          <li>
            11.1 Un despeje hacia adelante puede ocurrir en cualquier punto del área de juego. 
            <strong>Sanción: Melé</strong> (si el balón sale del campo, el equipo no infractor puede optar por lanzamiento rápido o saque de banda)[cite: 138, 139].
          </li>
          <li>
            11.2 Se considera avance del balón cuando, al intentar placar, un jugador hace contacto con el balón y este avanza. 
            <strong>Sanción: Melé</strong>[cite: 139, 140].
          </li>
          <li>
            11.3 Un jugador no debe golpear intencionadamente el balón hacia adelante con la mano o el brazo. 
            <strong>Sanción: Pena</strong>[cite: 140, 141].
          </li>
          <li>
            11.4 No se considera intencional si, al intentar atrapar el balón, lo golpea sin querer y había expectativa razonable de posesión[cite: 141, 142].
          </li>
          <li>
            11.5 No hay sanción si:
            <ul>
              <li>a. El jugador golpea el balón hacia adelante inmediatamente tras una patada rival (carga hacia abajo)[cite: 142].</li>
              <li>b. El jugador arranca o golpea la pelota de un oponente y esta avanza desde la mano o brazo del oponente[cite: 142, 143].</li>
            </ul>
          </li>
        </ul>

        <h3>Lanzar hacia adelante</h3>
        <ul>
          <li>
            11.6 Un lanzamiento hacia adelante puede ocurrir en cualquier punto del área de juego. 
            <strong>Sanción: Melé</strong>[cite: 143, 144].
          </li>
          <li>
            11.7 Un jugador no debe lanzar ni pasar el balón hacia adelante intencionadamente. 
            <strong>Sanción: Pena</strong>[cite: 144, 145].
          </li>
        </ul>
      </div>

      <div className="info-box">
        <h2>12. Saques de inicio y reinicio</h2>
        <h3>Principio</h3>
        <p>Los saques iniciales se utilizan para comenzar cada mitad del partido o período de tiempo extra. Los saques de reinicio se utilizan para reanudar el juego[cite: 146, 147, 148].</p>
        
        <h3>12.1 Saques iniciales y reinicios</h3>
        <p>Todos los saques iniciales y las patadas de reinicio son patadas de bote. <strong>Sanción: El equipo no infractor puede repetir el saque o formar una melé.</strong> [cite: 148, 149]</p>

        <h3>12.2–12.4 Ubicación y orden</h3>
        <ul>
          <li>12.2 Saques iniciales desde la línea de medio campo o detrás de ella. <strong>Sanción: Repetir saque o melé.</strong> [cite: 149, 150]</li>
          <li>12.3 El equipo contrario al que dio el saque inicial comienza la segunda mitad[cite: 150].</li>
          <li>12.4 Tras una anotación, los oponentes reanudan el juego desde medio campo. <strong>Sanción: Repetir saque o melé.</strong>[cite: 150, 151].</li>
        </ul>

        <h3>12.5 Posiciones de jugadores</h3>
        <ul>
          <li>a. Los compañeros del pateador deben estar detrás del balón. <strong>Sanción: Melé.</strong> [cite: 151, 152]</li>
          <li>b. Los rivales deben estar sobre o detrás de la línea de 10 metros. <strong>Sanción: Repetir tiro.</strong>[cite: 152, 153, 154].</li>
        </ul>

        <h3>12.6–12.7 Distancia mínima</h3>
        <p>El balón debe llegar a la línea de 10 metros. Si el viento lo devuelve o un rival lo juega antes, el juego continúa[cite: 154, 155].</p>

        <h3>12.8–12.10 Balón fuera o en zona de ensayo</h3>
        <ul>
          <li>12.8 Si el balón sale directamente fuera, el equipo no pateador elige: repetir tiro, melé, saque de banda o lanzamiento rápido[cite: 155].</li>
          <li>12.9 Si el balón llega a la zona de ensayo rival y es apoyado o sale muerto, el equipo no pateador elige repetir tiro o melé[cite: 155].</li>
          <li>12.10 Si el balón llega a la zona de ensayo del equipo que patea y es detenido o sale, el rival obtiene melé de 5 metros[cite: 155].</li>
        </ul>

        <h3>12.11–12.12 Otros reinicios</h3>
        <p>El juego se reanuda con saque de meta a 22 metros o pérdida de línea de try según corresponda[cite: 155, 156].</p>

        <table className="tabla-campo">
          <thead>
            <tr>
              <th>Tipo de reinicio</th>
              <th>Ubicación del lanzamiento</th>
              <th>Línea de sanción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Caída de 22 metros</td>
              <td>Sobre o detrás de la línea de 22 m del equipo defensor</td>
              <td>Línea de 22 metros [cite: 156]</td>
            </tr>
            <tr>
              <td>Pérdida de línea de try</td>
              <td>En la línea de ensayo del equipo defensor o detrás de ella</td>
              <td>Línea de 5 metros [cite: 156]</td>
            </tr>
          </tbody>
        </table>

        <h3>12.13–12.19 Normas adicionales</h3>
        <ul>
          <li>12.13 El saque debe tomarse en el lugar especificado, sin demora y cruzando la línea de sanción. <strong>Sanción: Melé o tiro libre.</strong> [cite: 156, 157]</li>
          <li>12.14 Un oponente no debe avanzar más allá de la línea de sanción antes de la patada. <strong>Sanción: Tiro libre.</strong>[cite: 157, 158].</li>
          <li>12.15 Un oponente delante de la línea no puede obstaculizar la retirada. <strong>Sanción: Pena.</strong>[cite: 158, 159].</li>
          <li>12.16–12.17 Si el balón cruza la línea y vuelve por el viento, el juego continúa; si no cruza, puede aplicarse ventaja[cite: 159, 160].</li>
          <li>12.18 Si un saque de meta llega a la zona de ensayo rival y es apoyado o sale, el equipo no pateador elige repetir saque o melé[cite: 160].</li>
          <li>12.19 Los compañeros del pateador deben estar detrás del balón. <strong>Sanción: Melé.</strong>[cite: 160, 161].</li>
        </ul>
      </div>
    </div>
  );
}