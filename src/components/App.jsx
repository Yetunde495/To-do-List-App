import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TodoList from './TodoList';


var numbers = [3, 6, 9, 12, 20];


const newNumber = numbers.map( x => x * 2);

console.log(newNumber);


//function createTask(singleTask) {
    //return  <Note 
        //key={singleTask.id}
        //task={singleTask.taskText}
        //date={singleTask.dueDate}
    ///>
    
    
    
//}

/*<Row>
                  <Col md={4}> <Form /> </Col>
                  <Col md={8}> <div className="Note-c">
            {tasks.map(singleTask => <Note 
        key={singleTask.id}
        task={singleTask.taskText}
        date={singleTask.dueDate}
    />)}
            </div> 
            </Col>
              </Row>*/

function App() {
    return (
        <div >
           
            
            <div className='container'>
            <TodoList />
            </div>
           
                

            
            
            
            
            
            
            
        </div>


    );
}

export {App};