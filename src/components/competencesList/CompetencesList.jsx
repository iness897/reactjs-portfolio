import "./competencesList.scss";
import React from 'react';

function CompetencesList({id,title, active, setSelected}) {
return (
    <li className={active ? "competencesList active" : "competencesList"} onClick={() => setSelected(id)}>
        {title}
    </li>
)
}

export default CompetencesList;
