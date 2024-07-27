import React from 'react'

const idPage = ({ 
    params,
} : {
    params: { id: string} 
}) => {
  return (
    <div>
       ID : {params.id}
    </div>
  );
};

export default idPage;
