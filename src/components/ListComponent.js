import React from 'react'
import {colors} from '../constants/colors'

const data = [
    [1,'+',3,4],[1,'+',3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]
]

const ListComponent = ({columnAmount, rowData, rowStyle, table }) => 
<div className="list-component">
{data.map(el => <div className="list-row">{el.map(e => <div className="cell">
{e}
</div>)}</div>)}
<style jsx>{`
.list-component {
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