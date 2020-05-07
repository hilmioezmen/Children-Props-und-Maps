import React ,{Component} from 'react';
import './App.css';
import PersonCard from './PersonCard/PersonCard'


class App extends Component {
// state tanimlarken direk state yazip obje mantiginda yazabiliyoruz.constructur ve super yazmak gerekmiyor. EC6 ile gelen bir kullanim kolayligi
  

state ={
    persons:[
      {name:"Hilmi", age :"33"},
      {name:"Ridvan", age: "34"},
      {name:"Atike", age: "20"},
      {name:"Numeric", age: "20"}
    ]
  }

// Önrmli: state tanimlarken illaki ismi state olacak diye bisey yok.ismini biz istedigimiz gibi verebiliyoruz ama 
// sonrisindan asagida statetimizi cagicagimizda this .state yazmiyouz.
// onun yerine this. ismini verdigimiz state adini yaziyoruz. asgidaki örnektede görüldügü gibi this.ahmet gibi

  // ahmet ={
  //   persons:[
  //     {name:"Hilmi", age :"33"},
  //     {name:"Ridvan", age: "34"}
  //   ]
  // }

  // ahmet2={
  //   personen :[
  //     {name:"veli", age:"44"}
  //   ]
  // }

  render() {
    let personsOutput = this.state.persons.map( (item,i) => 
                <PersonCard key= {i}
                            pName = {item.name} 
                            pAge= {item.age} />
    );


    return (
      <div className ="App">

        {/* <PersonCard pName ={this.ahmet.persons[0].name} 
                    pAge= {this.ahmet.persons[0].age} /> */}

        {/* <PersonCard pName ={this.ahmet.persons[1].name} 
                    pAge= {this.ahmet.persons[1].age}/>
                    
        <PersonCard pName = {this.ahmet2.personen[0].name} 
                    pAge= {this.ahmet2.personen[0].age} /> */}


      
                    {/* buradaki item  state deki objeckleri temsil eder */}

        {/*  bu asagidaki ifadeli aslinda render ile return arasina tasisak daha sik bir görüntü olur. yani clean bir kod yazmis oluruz. */}           
       
       
        {/* {this.state.persons.map((item,i)=>
          <PersonCard key= {i}
                      pName = {item.name} 
                      pAge= {item.age} />   
          )} */    }     
          
          {personsOutput}

      </div>
    );
  }
}

export default App;