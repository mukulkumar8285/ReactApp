import React from 'react';

import Card from './Card';
import Data from './Card.json';

function MultiCard(){

    return(
        <>
{
    Data.map((Information , index) =>
    <Card key={index} Movie={Information.Movie} background={Information.background}  Name={Information.Name} Image={Information.Image} Date={Information.Date} Timing={Information.Timing}  Text={Information.Text} /> 
  )}
  </>
    );
}

export default MultiCard;