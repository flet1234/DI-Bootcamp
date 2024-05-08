import data2 from './data2.json'

const { SocialMedias } = data2

const Example1 = (props) => {
    return (<div>
        {SocialMedias.map((item,i) => { 
        return  (
            <li key={i}>{item}</li>
        )})}
      
    </div>)
}

export default Example1