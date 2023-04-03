import React, { Component } from 'react'
import Card from '../card'
import styles from '../../App.module.css'
// toroltei ajillah function
class State extends Component {
    state={
        name:"ene bol state iin ner gdeg huwisagchtai object yuma",
        zurag:"https://cdnp.cody.mn/spree/images/1284165/large/1766607789_%2839%29.jpg",
        type: true,
        number: 9999,
        null: null,
        arr: [
            {
                title: "title1",
                des: "sdarsa",
                img: "https://cdnp.cody.mn/spree/images/1284165/large/1766607789_%2839%29.jpg",
                css: styles.box
            },
            {
                title: "title2",
                des: "sdarsa",
                img: "https://cdnp.cody.mn/spree/images/1284165/large/1766607789_%2839%29.jpg",
            },
            {
                title: "title3",
                des: "sdarsa",
                img: "https://cdnp.cody.mn/spree/images/1284165/large/1766607789_%2839%29.jpg",
                css: styles.box3
            }
        ]
    }
    
    render(){
        console.log(this.state)
        return(
            <div className={styles.grid}>
                {this.state.arr.map((props) =>{
                    
                    return(
                        <Card
                            title={props.title}
                            des={props.des}
                            img={props.img}
                            style={props.css}
                        />
                    )
                })}
            </div>
        )
    }
}

export default State 