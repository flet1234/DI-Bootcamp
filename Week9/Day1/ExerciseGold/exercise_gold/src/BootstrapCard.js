function BootstrapCard(props) {
    return <div className="card m-5" style={{width: '30rem'}}>
    <img className="card-img-top" src={props.info.imageUrl} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{props.info.title}</h5>
      <p className="card-text">{props.info.description}</p>
      <a href={props.info.buttonUrl} class="btn btn-primary"> {props.info.buttonLabel}</a>
    </div>
  </div>
}

export default BootstrapCard