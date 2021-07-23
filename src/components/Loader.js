import React from 'react'
import "./loader.css"
import { Row,Col } from 'react-bootstrap'

const Loader = () => {
    return (
		<Row style={{height:'90vh'}}>
			<Col xs={12} xl={12}>
				<div  className="sk-folding-cube">
					<div className="sk-cube1 sk-cube"></div>
					<div className="sk-cube2 sk-cube"></div>
					<div className="sk-cube4 sk-cube"></div>
					<div className="sk-cube3 sk-cube"></div>
				</div>
				</Col>
		</Row>
       
    )
}

export default Loader
