import data2 from './data2.json'
// import { Link } from 'react-router-dom'

const { Experiences } = data2

const Example3 = (props) => {
    return (<div>
        {Experiences.map((item,i) => { 
        return  (<div key={i}>
            <img  src={`${item.logo}`} alt="picshmic"/>
            <h3>{<a href={`${item.url}`}>{item.companyName}</a>}</h3>
            {item.roles.map((item,i) => {
                return(<div key={i}>
                        <h3>{item.title}</h3>
                        <div>{item.startDate} {item.location}</div>
                        <div>{item.description}</div>
                        <br/> <hr/>
                        </div>
                )
            })}
            </div>
        )})}
      
    </div>)
}

export default Example3