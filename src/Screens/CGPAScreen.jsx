import React from 'react';
import Jumbo from '../Components/Jambo';
import Calc from '../tools/CalcApp';
import unidata from '../unidata';
import {Helmet} from 'react-helmet';
const CGPAScreen = (props) =>
{
    const university = unidata.universities.find((x)=> x._name === props.match.params.name);
    if(!university)
    {
        return( 
            <div>University Not found!</div>
        )
    }
    return(
        <div>
            <Helmet>
                    <title>{university.name} CGPA Calculator </title>
            </Helmet>
            <Jumbo header={university.header} message={university.description} />
            <Calc points={university.points} grades={university.grades}/>
           
        </div>
    )
}
export default CGPAScreen;