import React from 'react'
import PropTypes from "prop-types";


const Profile = props => {
    const{fullName="Ronaldo Luís Nazário de Lima", bio="Ronaldo Luis Nazario de Lima, dit Ronaldo, est un footballeur brésilien né le 22 septembre 1976 à Rio de Janeiro. Il reçoit un ballon de football au Noël de ses 4 ans, et dès lors se découvre une passion pour ce sport, qu’il apprend à maîtriser dans la rue. Il acquiert ses capacités techniques grâce au futsal, sport qu’il pratique dès ses 10 ans. Il est recruté dans un club de première division brésilienne dès 1992, alors qu’il est encore mineur. Deux ans plus tard, Ronaldo commence sa carrière en Europe, au PSV Eindhoven, club néerlandais où il reste pour deux saisons. Ses résultats au poste d’avant-centre sont très convaincants. Le footballeur part ensuite pour le FC Barcelone en 1996, puis entre autres à l’Inter de Milan, au Real Madrid et au Milan AC, où il rencontre un succès de plus en plus important. Il est rapidement considéré comme l’un des meilleurs joueurs de l’histoire. Il prend sa retraite en 2011, vainqueur de deux Coupes du monde et de deux ballons d’or.", profession="Footballeur international", handleName= name => alert(name)}= props;
const style1= {color: "white", border: "6px outset orangered", marginLeft: "260px", marginRight: "260px", backgroundColor: "black", fontFamily: '"Brush Script MT", cursive'}
const style2= {color: "white", border: "6px outset pink", backgroundColor: "maroon", marginLeft: "490px", marginRight: "490px", fontFamily: '"Brush Script MT", cursive'}
const style3= {color: "white", marginLeft: "470px", marginRight: "470px", backgroundColor: "blueviolet", border: "8px double gold"}
const style4= {color: "white", marginLeft: "160px", marginRight: "160px", backgroundColor: "blueviolet", border: "8px double gold"}
const style5= {border: "4px solid black", marginBottom: "40px"}
const style6= {border: "8px double blue", backgroundColor: "aqua", marginLeft: "60px", marginRight: "60px", marginTop: "40px", marginBottom: "40px"}
    return ( <div>
        <div style={style6}>
    
        
            <h1 style={style1}>Ronaldo, le meilleur footballeur du monde</h1>
            <h1 style={style2}>Nom complet</h1>
            <h2 style= {style3}>{fullName}</h2>
            <h1 style={style2}>Biogaphie</h1>
            <h2 style= {style4}>{bio}</h2>
            <h1 style={style2}>Profession</h1>
            <h2 style= {style3}>{profession}</h2>
            {props.children}
            <br/>
            
            
            



            
            
        
            <button className= "button1" style= {style5} onClick={()=>handleName(fullName)}>click</button>
            </div>
            </div>
        
            
            
            
            
            
            
            )
        
            Profile.propTypes= {
                fullName: PropTypes.string,
                bio: PropTypes.string,
                profession: PropTypes.string,
                handleName: PropTypes.func
            
            };
            
            
}

export default Profile
