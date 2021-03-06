import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({ items, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />

        )
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        )
    }
    else if (items != null) {
        return (
            <Card>

                <CardImg src={items.image} alt={items.name} />
                <CardBody>
                    <CardTitle>
                        {items.name}
                    </CardTitle>
                    {items.designation ? <CardSubtitle>{items.designation}</CardSubtitle> : null}
                    <CardText>{items.description}</CardText>
                </CardBody>
            </Card>



        );
    }
    else {
        return (
            <h1>error</h1>
        );
    }
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard items={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard items={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard items={props.leader} />
                </div>
            </div>
        </div>
    );
}
export default Home;
