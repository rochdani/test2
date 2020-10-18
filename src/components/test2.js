import React ,{Component} from 'react';
//import {Media} from 'reactstrap';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class Menu extends Component{
    constructor(props){
      super(props);
      this.state={
          selectedDish:null
         
      }
    }
    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }
    renderDish(dish){
        if(dish != null){
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    
                    <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                   
                </Card>
                <Card>
                <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
           
                    </CardBody>
          
            </Card>

              
                     <Card>
                <CardBody>
            <CardTitle>{dish.comments.comment}</CardTitle>
            <CardText>{dish.description}</CardText>
           
                    </CardBody>
          
            </Card>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }

    }

    render(){
        const menu=this.props.dishes.map((dish)=>{
            return(
                //when returnng list we using key value option
            //     <div key={dish.id} className="col-12 mt-5">
            //         <Media tag="li">
            //             <Media left middle>
            //                 <Media object src={dish.image} alt={dish.name}/>
            //             </Media>
            //             <Media body className="ml-5">
            // <Media heading>{dish.name}</Media>
            // <p>{dish.description}</p>
            //             </Media>
            //         </Media>
            //     </div>
                 <div key={dish.id} className="col-12 col-md-5 m-1">
                 <Card onClick={()=> this.onDishSelect(dish)}>
                    
                         <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                    
                     <CardImgOverlay>
         <CardTitle>{dish.name}</CardTitle>
         {/* <p>{dish.description}</p> */}
                     </CardImgOverlay>
                 </Card>
             </div>
            );

        });
        return(
        <div className="container">
            <div className="row">
            
                {menu}
           
            </div>
            <div className="row">
                {this.renderDish(this.state.selectedDish)}
            </div>
        </div>
        );
    }
}
export default Menu;