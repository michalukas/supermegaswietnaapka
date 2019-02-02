import React from 'react'
import {colors} from '../constants/colors'

const data = [
    [1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]
]

const ListComponent = ({columnAmount, rowData, style, table, header }) => 
<div className="list-component">
<div className="header-list" style={style ? style.header || {} : {}}>
{header && header.map(e => <div className="header-element">{e}</div>)}
</div>
<div className="list-wrapper">
{data.map(el => <div className="list-row" style={style ? style.row || {} : {}}>{el.map(e => <div className="cell">
{e}
</div>)}</div>)}
</div>
<style jsx>{`
.list-component {
    display: grid;
    grid-template-rows: ${header ? '30px auto' : 'auto'};
}
.header-list {
    font-family: Lato;
    color: white;
    display: grid;
    grid-template-columns: 50px 10% 10% auto;
    
}
.header-element {
    display: grid;
    place-content: center;
}
.list-wrapper {
    overflow: auto;
    display: grid;
    grid-auto-rows: 60px;
    border-bottom: 1px solid rgba(255,255,255,0.4);
    border-top: 1px solid rgba(255,255,255,0.4);
}

.list-row {
    display: grid;
    grid-template-columns: 50px 10% 10% auto;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    align-items: center;
    text-align: center;
}
.cell {
    flex: 1;
    color: white;
}
`}</style>
</div>

export default ListComponent