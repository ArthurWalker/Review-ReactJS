import React from 'react'
import ContactCard from './ContactCard'

class Prop1 extends React.Component{
    render(){
        return (
            <div>
                 {/*  First way of passing prop
                <ContactCard 
                    name='Phuc2' 
                    imgUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAS1BMVEUBAQH///+Xl5dVVVULCwseHh4UFBRkZGSFhYUuLi5OTk42NjZra2s8PDx8fHxbW1uzs7O7u7ukpKQlJSWOjo7FxcVERER1dXWdnZ1VFaCqAAAD2UlEQVRoge2a2aKjIAyGXVBwqUvVtu//pONSC4QAQZm5mv+qp/b4CYQkJCbpP1DyH/J3IOPMX1XBkiRhxfTg8xAb8uRFYqrMs2iQuUEApyYRATLWDsKhx/MeZHANQqrwTJsLMlQkxKbSiXFA/BOlqlouQAQLYqziwZBHKGJVYRsMDhnKC4xVcwCku4ZYVZMh/DJj3TRESJhVQVUkyJUlV1UQIPfGgY8FQu6sx6nGA7luV6qgjemQIQojSToX5OIeNDXaIXcNS6q0QkQ0RpLkNkiw33VpwCH3d4iqAoXEsqxTHQahx1qaGAJxDqSsmqoMXbLOhFjzkof4BbysDwExA2IZCHunurKJThEQgpsWlhtkZLdQQAj6I5kYLKOSJLyolFGHZMhPzkj6qb8r0ZxL+SZCuA5Blv11XNHzr5djbk0xHWL+4Ig8Zm60Pl1LZPx8ywF5GpcPN4q5zIo6WataFWIG3RH/OlCVCjHOUf327RxwuybPc2QLqRB4bV+xII+5HR2QtRokZITXWnR4FyBCQox5CZ0sK6SXELjAu/mGJRUWSCMh0E+8Uau+AmESAuPVtlw9/H2RQx1jrfbPm8l/9k/6UkoIXGK7VWs6vAs8yPfGrQ4ImH6GOhoTwoMgcGKIkPcdyIRCmkzVFl4Oz1bvf2//suyfdIe+hI1EV5fqYcViXcpIQHqAr4muOdW3lx+CWZdnL24mq24vPwS6zyX1Rj/4bH4IPDJsBoNFfakHnFH/joe+64EslK4MPkYthEAShUpCUC/sirJ7cKZkRrmEGOFJeIYyE+xvVychxu9LdHw/Ndgco3oqEMNeO9NBSBXog6FKFUiOX8UPqmyxXwOaVIhpr5UFfo6DVlXgKgQZe26515EhEzOZpwZBUqbvyUQ31OKzfzkSD0OpBsHy0e9YF36aBau/TzYQGbUOQW1FVuGGTGTP3wmFXOUZAAQ1FrykTKt6J0rt44RYMqDKqMNjBmdRCyHY0h+P0yoVnznosJ8aEJdrn2re8rwJPMhzExKv1nUqRSDuKBUujkEiF1fUspoCWaJCMhwSpVx7SivbajXIoLOVUyy1QuJN2McOiWZhIDkHFe44dUhYrYe1+hilYaPvYHQd7u+WEt4S6Z/cNTFmts+QTlBAARAbB9Kiw3pa5KiECOkDWbpz120M62jZ+oxXWwPm4dUBSccr0YV98JvZe7/hU2a0svyQdAizZVez3NWP7wKCur2F7YHQMU6E/x0J4Z+0svXcg/C2x+huNdSE91dI760MLe42J+590YMO2UGiV7I7VuUdDRAE+WlxvHERDXJB/yFB+gPEeCFuKHWFcAAAAABJRU5ErkJggg=='
                />
                <ContactCard
                    name='Phuc3' 
                    imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Jk8d6KiJ01Vx-goKQLqnzmrMnNC-J_0SCCmkWTPLOJsnsj0RGw'
                />
                <ContactCard
                    name='Phuc4' 
                    imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWq3HZHJN0r77NIMMOvfl46MFm85t29Xf8fQ7evtAdZrB-eBeng'
                /> */}
    
    
                {/** Second way of passing prop
                Instead of writing a lot of instance above, we can put them into a prop whish is similar to a list */}
                 <ContactCard 
                    contact={{
                        name:'Phuc',
                        imgUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAaVBMVEUAAAD///9mZmbMzMweHh5EREQQEBAMDAwEBARZWVnr6+vY2NhpaWn8/Pxvb2+RkZHS0tI3Nzejo6Pf39+ampooKCiMjIxNTU0jIyO8vLx2dnaBgYG7u7vj4+M/Pz9SUlJHR0eenp4rKys8jlpPAAADYklEQVRogc2a6ZqqMAyGyzIsRUBEAcFt5v4v8hRRQWiaFGuf8/0cbN/pkjRJyxyi+DHP6qIJQsbCoCnqLD9yaltG+VGSxz6TyI/zxAwkaRsZ4KmmxTkIhOeFijCoyJGJU0ISN8IRvSJXORwFJIlphEGxAgNC+IY4itdoNuCkQZDfQA/RK9hrQcqLPqLXpaRDduE6hrDTHRGSumsRvdyUAuEEy1CpOOOQrdSB6MjfYhBvxa6aK/DUkOPqJZ8qPKognhGGoHgwZGtgrgYFWwhy/njNR/lnOST9cO++q0ilkI9scClXBtmZZTC2W0JKQxtrVFguICv9rkqXOWRvnsHY/h3CjVnIVAF/g2y+wWBsM4Ukmuc5VVEygWjFJTqKR0jyLQZjyQsC2/rBJekAduA+IRy0w05yYMuUtlAPIX9AKugXfzRErz+oj+oBAQfrYl2PAmf8MEA86Ptzm1MEG5p3h4DzaQbS3iFwjmME0vSQEvzMajqkhnspBSSHP0eLMA2Sp/BLuYCoXErYeSRVKiceC4jBEEUu32H82wwmEEfdJr720E9Mse4SRa3wRedMD5IzvQa/w2bSiwgyptjgS70yT63x10wnNs1HwwA9t0QF01jGamp+Hb2dz+ixUPdu5HRKwMjR6Yyh8t4z0QPgdumwNHcyrkzmFskhIW0swEFMS2lC2sJDh31KigoD0haOwciIRPEpxnhVRF/pFW9fENyKiiEoeAc17iBvSBSZ3rAeMtTVYwxB+UG6yMWJolRAKGNjadoJO36vOMNxkMXnWCDxQ4Go58tHQiJx3s5rVxKpgi42hETIygc7bHftkCXJ1WHqA3P5GRRP+44ffyxQ51eqA+6Z/CmEfKI2SOpgBNIiSZARiIekcyYgj3SOHN6sgjwTUzjF/hzySrGphcE1kFexgFr2WAMZyx7EAs4KyKSAQyxFRRMHk9JaTEtRxAhqUoKn5U5vRTViefA2QrDT8K5ZeZCY1rziepppzQqd1JJtdv/fOC0KXpRsqcXnIO66mJZuSIrPVsrodi4E7FxtWLmksXPdZOfizM4VoJ3LTDvXsmKPWbhgtnNV7li59HfsPF8Q2n//IYZj50mJY+VxzB3z/Wc+vXhFiMYP1ScPlu7ysKdXeFb5nzwie4if5s/hTuTncP8Anbclc6Y+/ZQAAAAASUVORK5CYII=',
                    }}
                />           
            </div>
        )
    }
}



export default Prop1