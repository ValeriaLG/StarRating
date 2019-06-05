import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const pathForImages = {
  true: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Star_empty_font_awesome.svg/240px-Star_empty_font_awesome.svg.png",
  false: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/236px-Star_empty.svg.png"
};

const listing = {

}


const ids = [1, 2, 3, 4];

class Page extends React.Component {
 renderRating(i){
   return <RatingSystem />;
 }

render(){
  return (
    <div className="pageArea">
      <h1>Items Claimed</h1>
      <div className="listing">
      <img className="imageSpot" src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg" />
      <span className="description">Some Text</span>
      <span className="rating">
        {this.renderRating(0)}
        </span>
        </div>
        <div className="listing">
        <img className="imageSpot" src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg" />
        <span className="description">Some Text</span>
        <span className="rating">
        {this.renderRating(1)}
        </span>
        </div>
        <div className="listing">
        <img className="imageSpot" src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg" />
        <span className="description">Some Text</span>
        <span className="rating">
        {this.renderRating(2)}
        </span>
      </div>
    </div>

  );
}

}


class RatingSystem extends React.Component {
    constructor(props){
    super(props);

     //this.setState = {on: true};

    //for binding to make this work since class methods aren't bound by default
    this.onClick = this.onClick.bind(this);


   /*state = {
      on: true,
    },*/

      this.state = {
        array : [
        {id: 1, on: true },
        {id: 2, on: true },
        {id: 3, on: true },
        {id: 4, on: true }
      ],
        chosenStar : 0
    };

    //TODO: handle logic for resetting of the rating
  }



  onClick = (index) => {
    //const currentState = this.state.on;
    //this.setState(state => ({ on: !this.state.on }))

    /*if (this.state.imageURL == "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Star_empty_font_awesome.svg/240px-Star_empty_font_awesome.svg.png")
      this.setState({imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/236px-Star_empty.svg.png"})
    else
      this.setState({imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Star_empty_font_awesome.svg/240px-Star_empty_font_awesome.svg.png"})*/



    let temporary = this.state.array;
    temporary[3].on = true;
    temporary[2].on = true;
    temporary[1].on = true;
    temporary[0].on = true;

    //temporary[index].on = !temporary[index].on;
    if (index == 3){
      temporary[3].on = !temporary[3].on;
      temporary[2].on = !temporary[2].on;
      temporary[1].on = !temporary[1].on;
      temporary[0].on = !temporary[0].on;
    } else if (index == 2){
      temporary[2].on = !temporary[2].on;
      temporary[1].on = !temporary[1].on;
      temporary[0].on = !temporary[0].on;
    } else if (index == 1){
      temporary[1].on = !temporary[1].on;
      temporary[0].on = !temporary[0].on;
    } else if (index == 0){
      temporary[0].on = !temporary[0].on;
    }
    this.setState({ array: temporary, chosenStar : index + 1});
    //this.setState({chosenStar : index + 1});
    //const idValue = index;
    //return index;

    //const target = this.index.target;
    //const chosenValue = target.id;
    //console.log(chosenIndex);
    //return chosenIndex;
  }

  //create a separate function to handle events

  //getImageName = () => this.state.on ? 'unfilled' : 'filled'

  render() {
    //const imageName = this.getImageName();

    return (
      <span>
        {this.state.array.map((el, index) =>

                <img style={{maxWidth: '50px'}} src={pathForImages[el.on ? "true" : "false"]} onClick={() => this.onClick(index)}/>


                )}
        <span>{(this.state.chosenStar == 0)? "" : this.state.chosenStar + "/" + this.state.array.length + " stars"}</span>
      </span>

//<span>{this.state.chosenStar + "/" + this.state.array.length + " stars"}</span>
      //{el.on? "" : index+1 +  "/" +  this.state.array.length
      //can dynamically create more arrays, make them separate, and use them to..
      //rating property inside clothing item object, make it into generic props so it can be a component that you put into this object
      //clothing.item.rating -- keep the scope within that item. this.rating inside item.rating.. create a functional component rather than a class component
    );
  }
}

//const rootElement = document.getElementById("root");
ReactDOM.render(<Page />, document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById("root2"));
