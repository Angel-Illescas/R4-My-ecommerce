import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/es';

const Horario = () => {
  const [currentDateTime, setCurrentDateTime] = useState(moment().format('dddd, D [de] MMMM YYYY | HH:mm:ss'));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(moment().format('dddd, D [de] MMMM YYYY | HH:mm:ss'));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedDateTime = currentDateTime.split(' | ');
  const formattedDate = formattedDateTime[0].replace(/^\w/, (c) => c.toUpperCase()).trim(); // Primera letra en mayúscula y eliminación de espacios
  const formattedTime = formattedDateTime[1].trim(); // Eliminación de espacios

  return (
    <div>
      <span className="font-bold">{formattedDate}</span>
      <span> | </span> {/* Espacios antes y después del carácter "|" */}
      <span className="font-light">{formattedTime}</span>
    </div>
  );
};

export default Horario;
