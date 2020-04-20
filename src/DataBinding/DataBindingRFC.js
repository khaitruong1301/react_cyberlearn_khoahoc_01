import React from 'react'


const school = 'cyberlearn';
const student1 = {
    name: 'Covid 19',
    age: 2
}

export default function DataBindingRFC() {

    const name = "Khải cyberlearn";
    const renderInfoVirus = () => {
        const virus = {
            id: 'covid-19',
            name: 'corona',
            img: 'http://casestudy.cyberlearn.vn/image/covid.jpg',
            alias: 'SARS-CoV-2'
        }
        return (
            <div className="card text-white bg-primary w-50 h-50">
                <img className="card-img-top" src={virus.img} alt={virus.id} />
                <div className="card-body">
                    <h4 className="card-title">{virus.name}</h4>
                    <p className="card-text">{virus.alias}</p>
                </div>
            </div>
        )

    }

    return (
        <div>
            <h1>React functional component data binding</h1>
            <hr />

            <h1 className="text-danger">{name}</h1>

            <h1>name : {student1.name} age : {student1.age} school: {school}</h1>
            <h3>Info virus</h3>
            {renderInfoVirus()}


        </div>
    )
}
