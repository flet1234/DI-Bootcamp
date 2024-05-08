import data2 from './data2.json'

const { Skills } = data2

const Example2 = (props) => {
    return (<div>
        {Skills.map((item,i) => {
        
        return <ol key={i}>{item.Area}:
        {item.SkillSet.map((element,i)=> {
           return <li key={i}>{element.Name}</li>
            
        })}
        </ol>
        })}
    </div>)
}

export default Example2