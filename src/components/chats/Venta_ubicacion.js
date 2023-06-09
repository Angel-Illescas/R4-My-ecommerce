import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
      subject: 'Zona Sur',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Zona Sureste',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Zona Este',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Zona Noreste',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Zona Norte',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Zona Centro',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  const Venta_ubicacion = () => {
    return (
        <ResponsiveContainer width="100%" aspect={2}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}  
            margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#FF5252" fill="#FF5252" fillOpacity={0.5} />
          </RadarChart>
        </ResponsiveContainer>
      );
  };

  export default Venta_ubicacion